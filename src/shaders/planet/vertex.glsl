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

float BiasFunction(float x, float bias) {
    float k = pow(1.0 - bias, 3.0);
    return (x * k) / (x * k - x + 1.0);
}

float getWobble(vec3 position)
{
    vec3 warpedPosition = position;
    warpedPosition += simplexNoise4d(vec4(
        position,
        uTime * uTimeFrequency
    ));

    float wobble = simplexNoise4d(vec4(
        position * uPositionFrequency, // XYZ
        uTime * uTimeFrequency         // W
    )) * uStrength;
  
    wobble += simplexNoise4d(vec4(
        warpedPosition * uPositionFrequency*2.0, // XYZ
        uTime * uTimeFrequency         // W
    )) * uStrength*0.5;


    return pow(abs(wobble), 2.0) * sign(wobble)* -1.0;
}

float addCrater(vec3 position)
{
    float craterDepth = 0.0;
    
    for(int i = 0; i < MAX_CRATERS; i++)
    {
       if(i >= uCratersCount) break; 

       float biasedRadius = uCraters[i].radius * BiasFunction(length(position - uCraters[i].position), 0.3);

       float x = length(position - uCraters[i].position)/uCraters[i].radius;
       float cavity = x * x - 1.0;
       float rimX = min(abs(x) - 1.0 - uRimWidth, 0.0);
       float rim = uRimSteepness * rimX * rimX;

       float craterShape = smoothMin(cavity, uFloorHeight, -uSmoothness);
       craterShape = smoothMin(craterShape, rim, uSmoothness);
       craterDepth += craterShape * uCraters[i].radius;
    }
    
    return craterDepth; 
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
  float elevation = addCrater(csm_Position);
  csm_Position += elevation * normal;
  positionA += addCrater(positionA)*normal;
  positionB += addCrater(positionB)*normal;

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
