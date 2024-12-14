uniform vec3 uColorWaterDeep;
uniform vec3 uColorWaterSurface;
uniform vec3 uColorSand;
uniform vec3 uColorGrass;
uniform vec3 uColorSnow;
uniform vec3 uColorRock;

varying float vElevation;

void main() 
{
  // Color
  vec3 color = vec3(1.0);

  // Water
  float surfaceWaterMix = smoothstep(-0.2, -0.1, vElevation);
  color = mix(uColorWaterDeep, uColorWaterSurface, surfaceWaterMix);
  csm_DiffuseColor = vec4(color, 1.0);
}
