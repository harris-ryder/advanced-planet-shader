import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import GUI from 'lil-gui'
import planetVertexShader from './shaders/planet/vertex.glsl'
import planetFragmentShader from './shaders/planet/fragment.glsl'
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { addDebugUniform } from './utils'


// Debug
const gui = new GUI({ width: 325 })
const colorFolder = gui.addFolder('Color')
const oceanFolder = gui.addFolder('Ocean')
const mountainFolder = gui.addFolder('Mountains')
colorFolder.close()


const debugObject = {}
const uniforms = {
}

const oceanUniforms = {
  uTime: new THREE.Uniform(0),
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Loaders
const rgbeLoader = new RGBELoader()

// Colors
addDebugUniform('uColorWaterDeep', '#0b75a2', { label: 'Water Deep Color' }, debugObject, uniforms, colorFolder)
addDebugUniform('uColorWaterSurface', '#97cff2', { label: 'Water Surface Color' }, debugObject, uniforms, colorFolder)
addDebugUniform('uColorSand', '#cec5a6', { label: 'Sand Color' }, debugObject, uniforms, colorFolder)
addDebugUniform('uColorGrass', '#8abd56', { label: 'Grass Color' }, debugObject, uniforms, colorFolder)
addDebugUniform('uColorSnow', '#ffffff', { label: 'Snow Color' }, debugObject, uniforms, colorFolder)
addDebugUniform('uColorRock', '#808080', { label: 'Rock Color' }, debugObject, uniforms, colorFolder)

// Color Elevations
addDebugUniform('uElevationDeepWater', 0.93, { min: -2, max: 2, step: 0.01, label: 'Deep Water Level' }, debugObject, uniforms, colorFolder)
addDebugUniform('uElevationWater', 0.95, { min: -1, max: 1, step: 0.01, label: 'Water Level' }, debugObject, uniforms, colorFolder)
addDebugUniform('uElevationSand', 0.99, { min: -0.5, max: 3, step: 0.01, label: 'Sand Level' }, debugObject, uniforms, colorFolder)
addDebugUniform('uElevationLowland', 1.03, { min: 0, max: 5, step: 0.01, label: 'Lowland Level' }, debugObject, uniforms, colorFolder)
addDebugUniform('uElevationMountain', 0.64, { min: 0.5, max: 1.5, step: 0.01, label: 'Mountain Level' }, debugObject, uniforms, colorFolder)
addDebugUniform('uElevationPeak', 1.18, { min: 0.8, max: 2, step: 0.01, label: 'Peak Level' }, debugObject, uniforms, colorFolder)

// Ocean
addDebugUniform('uTimeFrequency', 0.00, { min: 0, max: 1, step: 0.001, label: 'Time Frequency' }, debugObject, oceanUniforms, oceanFolder)
addDebugUniform('uPositionFrequency', 1.0, { min: 0, max: 5, step: 0.1, label: 'Position Frequency' }, debugObject, oceanUniforms, oceanFolder)
addDebugUniform('uWaveStrength', 0.01, { min: 0, max: 1, step: 0.01, label: 'Wave Strength' }, debugObject, oceanUniforms, oceanFolder)

// Numeric controls
addDebugUniform('uOceanFloorDepth', 0.04, { min: 0, max: 4, step: 0.01, label: 'Ocean Floor Depth' }, debugObject, uniforms, oceanFolder)
addDebugUniform('uOceanFloorSmoothing', 0.08, { min: 0, max: 4, step: 0.01, label: 'Ocean Floor Smoothing' }, debugObject, uniforms, oceanFolder)
addDebugUniform('uOceanDepthMultiplier', 0.09, { min: 0, max: 2, step: 0.01, label: 'Ocean Depth Multiplier' }, debugObject, uniforms, oceanFolder)
addDebugUniform('uOceanFloorStrength', 0.7, { min: 0, max: 8, step: 0.001, label: 'Mountain Strength' }, debugObject, uniforms, oceanFolder)
addDebugUniform('uMountainStrength', 0.7, { min: 0, max: 8, step: 0.001, label: 'Mountain Strength' }, debugObject, uniforms, mountainFolder)
addDebugUniform('uStrength', 4, { min: 0, max: 8, step: 0.001, label: 'Strength' }, debugObject, uniforms, gui)


/**
 * Environment map
 */
rgbeLoader.load('/multi_nebulae.hdr', (environmentMap) => {
  environmentMap.mapping = THREE.EquirectangularReflectionMapping
  scene.background = environmentMap
  scene.backgroundBlurriness = 0.5
  scene.environment = environmentMap
})

/**
 * planet 
 */
const planetMaterial = new CustomShaderMaterial({
  // CSM
  baseMaterial: THREE.MeshStandardMaterial,
  vertexShader: planetVertexShader,
  fragmentShader: planetFragmentShader,
  uniforms: uniforms,
  silent: true,

  // MeshStandardMaterial
  metalness: 0,
  roughness: 0.5,
  color: '#85d534',
})


const depthMaterial = new CustomShaderMaterial({
  // CSM
  baseMaterial: THREE.MeshDepthMaterial,
  vertexShader: planetVertexShader,
  fragmentShader: planetFragmentShader,
  uniforms: uniforms,
  silent: true,

  // MeshDepthMaterial
  depthPacking: THREE.RGBADepthPacking
})


let planetGeometry = new THREE.IcosahedronGeometry(2.5, 250)
planetGeometry = mergeVertices(planetGeometry)
planetGeometry.computeTangents()

const planet = new THREE.Mesh(planetGeometry, planetMaterial)
planet.CustomShaderMaterial = depthMaterial
scene.add(planet)

let oceanGeometry = new THREE.IcosahedronGeometry(3.45, 250)
const oceanMaterial = new THREE.MeshPhysicalMaterial({
  color: '#0077ff',
  transparent: true,
  opacity: 0.6,
  roughness: 0.2,
  metalness: 0.1,
  transmission: 0.9,
  thickness: 0.5,
  ior: 1.33
})
const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial)
scene.add(ocean)


/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 2)
directionalLight.position.set(6.25, 3, 4)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.near = 0.1
directionalLight.shadow.camera.far = 30
directionalLight.shadow.camera.top = 8
directionalLight.shadow.camera.right = 8
directionalLight.shadow.camera.bottom = -8
directionalLight.shadow.camera.left = -8
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2)
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(sizes.pixelRatio)
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-10, 6, -2)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 2
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(sizes.pixelRatio)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Materials
  oceanUniforms.uTime.value = elapsedTime
  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
