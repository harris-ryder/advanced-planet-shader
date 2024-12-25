attribute vec4 tangent;

uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uStrength;

// Craters 
#define MAX_CRATERS 50  
uniform int uCratersCount; 
uniform struct Crater {
    vec3 position;
    float radius;
} uCraters[MAX_CRATERS];
uniform float uRimSteepness;
uniform float uRimWidth;
uniform float uSmoothness;
uniform float uFloorHeight;

varying float vElevation;
varying vec3 vPosition;
varying vec3 vSurfaceNormal;


#include ../includes/simplexNoise4d.glsl

float smoothMin(float a, float b, float k) {
    float h = clamp((b - a + k) / (2.0 * k), 0.0, 1.0);
    return a * h + b * (1.0 - h) - k * h * (1.0 - h);
}

float getWobble(vec3 position)
{
    float wobble = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    
    // FBM parameters
    const int OCTAVES = 4;
    const float PERSISTENCE = 0.5;
    const float LACUNARITY = 2.0;
    
    for(int i = 0; i < OCTAVES; i++)
    {
        wobble += simplexNoise4d(vec4(position * frequency, 0.0)) * (uStrength * amplitude);
        
        frequency *= LACUNARITY;
        amplitude *= PERSISTENCE;
    }

    return pow(abs(wobble), 2.0) * sign(wobble) * -1.0;
}

void main()
{
  
  vec3 originalPosition = csm_Position;
  vec3 biTangent = cross(normal, tangent.xyz);

  // Neighbours positions
  float shift = 0.01;
  vec3 positionA = csm_Position + tangent.xyz * shift;
  vec3 positionB = csm_Position + biTangent * shift;

  // Wobble
  float elevation = getWobble(csm_Position);
  csm_Position += elevation * normal;
  positionA += getWobble(positionA)*normal;
  positionB += getWobble(positionB)*normal;

  // Compute Normal 
  vec3 toA = normalize(positionA - csm_Position);
  vec3 toB = normalize(positionB - csm_Position);
  csm_Normal = normalize(cross(toA, toB));

  // Varyings
  vElevation = elevation;
  vPosition = csm_Position;
  vSurfaceNormal = csm_Normal;

}


// :TSInstall glsl
