attribute vec4 tangent;

uniform float uTime;
uniform float uTimeFrequency;
uniform float uPositionFrequency;
uniform float uWaveStrength;

varying float vElevation;
varying vec3 vPosition;
varying vec3 vSurfaceNormal;

#include ../includes/simplexNoise4d.glsl

float getWaves(vec3 position)
{
    float wobble = 0.0;
    float amplitude = 0.02;
    float frequency = 0.00001;

    // FBM parameters
    const int OCTAVES = 2;
    const float PERSISTENCE = 1.0;
    const float LACUNARITY = 1.5;
    
    for(int i = 0; i < OCTAVES; i++)
    {
        wobble += simplexNoise4d(vec4(position*0.1, uTime*uTimeFrequency*frequency)) * (uWaveStrength * amplitude);
        frequency *= LACUNARITY;
        amplitude *= PERSISTENCE;
    }

    return wobble;
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
  float elevation = getWaves(csm_Position);
  csm_Position += elevation * normal;
  positionA += getWaves(positionA)*normal;
  positionB += getWaves(positionB)*normal;

  // Compute Normal 
  vec3 toA = normalize(positionA - csm_Position);
  vec3 toB = normalize(positionB - csm_Position);
  csm_Normal = normalize(cross(toA, toB));

  // Varyings
  vElevation = elevation;
  vPosition = csm_Position;
  vSurfaceNormal = csm_Normal;

}

