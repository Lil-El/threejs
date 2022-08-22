# Three.js

- [three.js文档](https://threejs.org/docs/index.html)
- [three.js](https://threejs.org/)
- [three.js](https://threejs.org/Three.js/)

## step

1. start
2. docs
3. examples

## /three/examples/jsm(js)

- animation
- cameras
- capabilities
- controls
- csm
- curves
- effects
- environments
- exporters
- geometries
- helpers
- interactive
- libs
- lights
- lines
- loaders
- math
- misc
- modifiers
- node-editor
- nodes
- objects
- offscreen
- physics
- postprocessing
- renderers
- shaders
- textures
- utils
- webxr

## threejs docs category

### 动画

- AnimationAction
- AnimationClip
- AnimationMixer
- AnimationObjectGroup
- AnimationUtils
- KeyframeTrack
- PropertyBinding
- PropertyMixer
- 轨道
    - BooleanKeyframeTrack
    - ColorKeyframeTrack
    - NumberKeyframeTrack
    - QuaternionKeyframeTrack
    - StringKeyframeTrack
    - VectorKeyframeTrack

### 音频

- Audio
- AudioAnalyser
- AudioContext
- AudioListener
- PositionalAudio

### 摄像机

- ArrayCamera
- Camera
- CubeCamera
- OrthographicCamera
- PerspectiveCamera
- StereoCamera

#### 常量

Animation
Core
CustomBlendingEquation
Materials
Renderer
Textures

### 核心

- BufferAttribute
- BufferGeometry
- Clock
- EventDispatcher
- GLBufferAttribute
- InstancedBufferAttribute
- InstancedBufferGeometry
- InstancedInterleavedBuffer
- InterleavedBuffer
- InterleavedBufferAttribute
- Layers
- Object3D
- Raycaster
- Uniform
- BufferAttributes
    - BufferAttribute Types

### 附件

- Earcut
- ImageUtils
- PMREMGenerator
- ShapeUtils
- 核心
    - Curve
    - CurvePath
    - Interpolations
    - Path
    - Shape
    - ShapePath   
- 曲线
    - ArcCurve
    - CatmullRomCurve3
    - CubicBezierCurve
    - CubicBezierCurve3
    - EllipseCurve
    - LineCurve
    - LineCurve3
    - QuadraticBezierCurve
    - QuadraticBezierCurve3
    - SplineCurve

### 几何体
- √ [BoxGeometry](/docs/1.box.html): 立方缓冲几何体
- √ [CircleGeometry](/docs/2.circle.html): 圆形缓冲几何体
- √ [ConeGeometry](/docs/3.cone.html): 圆锥缓冲几何体
- √ [CylinderGeometry](/docs/4.edge.html): 圆柱缓冲几何体
- √ DodecahedronGeometry: 十二面缓冲几何体
- √ [EdgesGeometry](/docs/4.edge.html): 边缘几何体(用作辅助对象来查看其他geometry的边缘)
- [ExtrudeGeometry](/docs/5.extrude.html): 挤压缓冲几何体(根据一个形状路径，生成一个几何体)
- √ IcosahedronGeometry: 二十面缓冲几何体
- LatheGeometry
- √ OctahedronGeometry: 八面缓冲几何体
- √ [PlaneGeometry](/docs/1.box.html): 平面缓冲几何体
- PolyhedronGeometry
- RingGeometry
- ShapeGeometry
- SphereGeometry
- √ TetrahedronGeometry: 四面缓冲几何体
- TorusGeometry
- TorusKnotGeometry
- TubeGeometry
- WireframeGeometry

### 辅助对象

- ArrowHelper
- AxesHelper
- BoxHelper
- Box3Helper
- CameraHelper
- DirectionalLightHelper
- GridHelper
- PolarGridHelper
- HemisphereLightHelper
- PlaneHelper
- PointLightHelper
- SkeletonHelper
- SpotLightHelper

### 灯光

- AmbientLight
- AmbientLightProbe
- DirectionalLight
- HemisphereLight
- HemisphereLightProbe
- Light
- LightProbe
- PointLight
- RectAreaLight
- SpotLight
- 阴影
    - LightShadow
    - PointLightShadow
    - DirectionalLightShadow
    - SpotLightShadow

### 加载器

- AnimationLoader
- AudioLoader
- BufferGeometryLoader
- Cache
- CompressedTextureLoader
- CubeTextureLoader
- DataTextureLoader
- FileLoader
- ImageBitmapLoader
- ImageLoader
- Loader
- LoaderUtils
- MaterialLoader
- ObjectLoader
- TextureLoader
- 管理器
    - DefaultLoadingManager
    - LoadingManager

### 材质

- LineBasicMaterial
- LineDashedMaterial
- Material
- MeshBasicMaterial
- MeshDepthMaterial
- MeshDistanceMaterial
- MeshLambertMaterial
- MeshMatcapMaterial
- MeshNormalMaterial
- MeshPhongMaterial
- MeshPhysicalMaterial
- MeshStandardMaterial
- MeshToonMaterial
- PointsMaterial
- RawShaderMaterial
- ShaderMaterial
- ShadowMaterial
- SpriteMaterial

### 数学库

- Box2
- Box3
- Color
- Cylindrical
- Euler
- Frustum
- Interpolant
- Line3
- MathUtils
- Matrix3
- Matrix4
- Plane
- Quaternion
- Ray
- Sphere
- Spherical
- SphericalHarmonics3
- Triangle
- Vector2
- Vector3
- Vector4
- 插值
    - CubicInterpolant
    - DiscreteInterpolant
    - LinearInterpolant
    - QuaternionLinearInterpolant

### 物体

- Bone
- Group
- InstancedMesh
- Line
- LineLoop
- LineSegments
- LOD
- Mesh
- Points
- Skeleton
- SkinnedMesh
- Sprite

### 渲染器

- WebGLMultipleRenderTargets
- WebGLRenderer
- WebGL1Renderer
- WebGLRenderTarget
- WebGLCubeRenderTarget
- 着色器
    - ShaderChunk
    - ShaderLib
    - UniformsLib
    - UniformsUtils
- WebXR
    - WebXRManager

### 场景

- Fog
- FogExp2
- Scene

### 纹理贴图

- CanvasTexture
- CompressedTexture
- CubeTexture
- DataArrayTexture
- Data3DTexture
- DataTexture
- DepthTexture
- FramebufferTexture
- Source
- Texture
- VideoTexture

### 示例

### 动画

- CCDIKSolver
- MMDAnimationHelper
- MMDPhysics

### 控制

- DragControls
- FirstPersonControls
- FlyControls
- OrbitControls
- PointerLockControls
- TrackballControls
- TransformControls

### 几何体

- ConvexGeometry
- DecalGeometry
- ParametricGeometry
- TextGeometry

### 辅助对象

- LightProbeHelper
- PositionalAudioHelper
- RectAreaLightHelper
- VertexNormalsHelper
- VertexTangentsHelper

### 灯光

- LightProbeGenerator

### 加载器

- DRACOLoader
- FontLoader
- GLTFLoader
- MMDLoader
- MTLLoader
- OBJLoader
- PCDLoader
- PDBLoader
- PRWMLoader
- SVGLoader
- TGALoader

### 物体

- Lensflare

### 后期处理

- EffectComposer

### 导出器

- ColladaExporter
- GLTFExporter
- PLYExporter

### 数学库

- LookupTable
- MeshSurfaceSampler
- OBB
- QuickHull
- Face
- HalfEdge
- ConvexHull
- VertexNode
- VertexList

### 渲染器

- CSS2DRenderer
- CSS3DRenderer
- SVGRenderer

### 实用工具

- BufferGeometryUtils
- SceneUtils
- SkeletonUtils