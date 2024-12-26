import * as THREE from 'three'

export const addDebugUniform = (name, initialValue, guiOptions = {}, debugObject, uniforms, gui) => {
  // Add to debug object
  debugObject[name] = initialValue
  
  // Create uniform
  uniforms[name] = new THREE.Uniform(
    typeof initialValue === 'string' && initialValue.startsWith('#') 
      ? new THREE.Color(initialValue)
      : initialValue
  )
  
  // Add GUI control
  const { min = 0, max = 1, step = 0.001, label = name } = guiOptions
  
  if (typeof initialValue === 'string' && initialValue.startsWith('#')) {
    gui.addColor(debugObject, name)
      .onChange(() => uniforms[name].value.set(debugObject[name]))
      .name(label)
  } else {
    gui.add(uniforms[name], 'value', min, max, step)
      .name(label)
  }
}