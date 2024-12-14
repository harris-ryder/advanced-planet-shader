attribute vec4 tangent;

uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequency;
uniform float uStrength;

varying float vElevation;
varying vec3 vPosition;
varying vec3 vSurfaceNormal;

#include ../includes/simplexNoise4d.glsl

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
