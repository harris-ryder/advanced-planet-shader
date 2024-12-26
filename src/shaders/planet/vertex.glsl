attribute vec4 tangent;

uniform float uStrength;
uniform float uOceanFloorStrength;
uniform float uMountainStrength;

uniform float uOceanFloorDepth;
uniform float uOceanFloorSmoothing;
uniform float uOceanDepthMultiplier;

uniform float uSmoothness;

varying float vElevation;
varying vec3 vPosition;
varying vec3 vSurfaceNormal;


#include ../includes/simplexNoise4d.glsl

float smoothMin(float a, float b, float k) {
    float h = clamp((b - a + k) / (2.0 * k), 0.0, 1.0);
    return a * h + b * (1.0 - h) - k * h * (1.0 - h);
}

float getMountains(vec3 position)
{
    float wobble = 0.0;
    float amplitude = 1.0;
    float frequency = 0.3;
    
    // FBM parameters
    const int OCTAVES = 4;
    const float PERSISTENCE = 1.0;
    const float LACUNARITY = 1.5;
    
    for(int i = 0; i < OCTAVES; i++)
    {
        wobble += simplexNoise4d(vec4(position * frequency, 0.0)) * (uMountainStrength * amplitude);
        frequency *= LACUNARITY;
        amplitude *= PERSISTENCE;
    }

    return max(wobble*0.15, 0.0);
}

float noiseMask(vec3 position)
{
    return max(simplexNoise4d(vec4(position*0.5, 0.0)), 0.0);
}

float getOcean(vec3 position)
{
    float wobble = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    
    // FBM parameters
    const int OCTAVES = 6;
    const float PERSISTENCE = 0.5;
    const float LACUNARITY = 2.0;
    
    for(int i = 0; i < OCTAVES; i++)
    {
        wobble += simplexNoise4d(vec4(position * frequency, 0.0)) * (uOceanFloorStrength * amplitude);
        frequency *= LACUNARITY;
        amplitude *= PERSISTENCE;
    }

    float oceanFloorShape = -uOceanFloorDepth + wobble * 0.15;
    float continentShape = smoothMin(wobble, oceanFloorShape, uOceanFloorSmoothing);
    continentShape = continentShape * mix(uOceanDepthMultiplier, 1.0, step(0.0, continentShape));

    float mountainMask = noiseMask(position);
    float mountainShape = getMountains(position)*mountainMask;
    float finalShape = 1.0 + (continentShape + mountainShape)*uStrength;
    return finalShape; 
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
  float elevation = getOcean(csm_Position);
  csm_Position += elevation * normal;
  positionA += getOcean(positionA)*normal;
  positionB += getOcean(positionB)*normal;

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
