uniform vec3 uColorWaterDeep;
uniform vec3 uColorWaterSurface;
uniform vec3 uColorSand;
uniform vec3 uColorGrass;
uniform vec3 uColorSnow;
uniform vec3 uColorRock;

uniform float uElevationDeepWater;
uniform float uElevationWater;
uniform float uElevationSand;
uniform float uElevationLowland;
uniform float uElevationMountain;
uniform float uElevationPeak;

varying float vElevation;
varying vec3 vPosition;
varying vec3 vSurfaceNormal;

#include ../includes/simplexNoise4d.glsl

void main() 
{
  // Color
  vec3 color = vec3(1.0);

  // Water
  float surfaceWaterMix = smoothstep(uElevationDeepWater, uElevationWater, vElevation);
  color = mix(uColorWaterDeep, uColorWaterSurface, surfaceWaterMix);

  // Sand
  float sandMix = step(uElevationWater, vElevation);
  color = mix(color, uColorSand, sandMix);

  // Grass
  float grassMix = step(uElevationSand, vElevation);
  color = mix(color, uColorGrass, grassMix);

  // Rock
  float rockMixOn = step(uElevationSand, vElevation);
  vec3 normalizedPosition = normalize(vPosition);
  float verticalness = 1.0 - abs(dot(vSurfaceNormal, normalizedPosition));
  float rockThreshold = 0.2;
  float rockMix = smoothstep(rockThreshold, rockThreshold + 0.1, verticalness);
  color = mix(color, uColorRock, rockMix*(rockMixOn));

  // Snow
  // float snowThreshold = 0.35;
  float localElevationPeak = uElevationPeak + simplexNoise4d(vec4(vPosition*15.5, 0.0))*0.1;
  float snowMix = step(localElevationPeak, vElevation);
  color = mix(color, uColorSnow, snowMix);

   csm_DiffuseColor = vec4(color, 1.0);
  //  csm_DiffuseColor = vec4(vec3(1.0), 1.0); // Comment this out later
}
