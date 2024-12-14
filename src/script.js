import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import GUI from 'lil-gui'
import planetVertexShader from './shaders/planet/vertex.glsl'
import planetFragmentShader from './shaders/planet/fragment.glsl'
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
/**
 * Base
 */
// Debug
const gui = new GUI({ width: 325 })
const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Loaders
const rgbeLoader = new RGBELoader()

// Material
debugObject.colorWaterDeep = '#0b75a2'
debugObject.colorWaterSurface = '#97cff2'
debugObject.colorSand = '#cec5a6'
debugObject.colorGrass = '#8abd56'
debugObject.colorSnow = '#ffffff'
debugObject.colorRock = '#868574'

// Uniforms
const uniforms = {
  uTime: new THREE.Uniform(0),
  uPositionFrequency: new THREE.Uniform(0.28),
  uTimeFrequency: new THREE.Uniform(0.02),
  uStrength: new THREE.Uniform(0.7),
  uColorWaterDeep: new THREE.Uniform(new THREE.Color(debugObject.colorWaterDeep)),
  uColorWaterSurface: new THREE.Uniform(new THREE.Color(debugObject.colorWaterSurface)),
  uColorSand: new THREE.Uniform(new THREE.Color(debugObject.colorSand)),
  uColorGrass: new THREE.Uniform(new THREE.Color(debugObject.colorGrass)),
  uColorSnow: new THREE.Uniform(new THREE.Color(debugObject.colorSnow)),
  uColorRock: new THREE.Uniform(new THREE.Color(debugObject.colorRock)),
}

/**
 * GUI
 */
gui.add(uniforms.uPositionFrequency, 'value', 0, 2, 0.001).name('uPositionFrequency')
gui.add(uniforms.uTimeFrequency, 'value', 0, 2, 0.001).name('uTimeFrequency')
gui.add(uniforms.uStrength, 'value', 0, 2, 0.001).name('uStrength')
gui.addColor(debugObject, 'colorWaterDeep').onChange(() => uniforms.uColorWaterDeep.value.set(debugObject.colorWaterDeep))
gui.addColor(debugObject, 'colorWaterSurface').onChange(() => uniforms.uColorWaterSurface.value.set(debugObject.colorWaterSurface))
gui.addColor(debugObject, 'colorSand').onChange(() => uniforms.uColorSand.value.set(debugObject.colorSand))
gui.addColor(debugObject, 'colorGrass').onChange(() => uniforms.uColorGrass.value.set(debugObject.colorGrass))
gui.addColor(debugObject, 'colorSnow').onChange(() => uniforms.uColorSnow.value.set(debugObject.colorSnow))
gui.addColor(debugObject, 'colorRock').onChange(() => uniforms.uColorRock.value.set(debugObject.colorRock))

/**
 * Environment map
 */
rgbeLoader.load('/spruit_sunrise.hdr', (environmentMap) => {
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
renderer.toneMappingExposure = 1
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(sizes.pixelRatio)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Materials
  uniforms.uTime.value = elapsedTime


  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
