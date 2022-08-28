# Three.js

- [three.js文档](https://threejs.org/docs/geometry/index.html)
- [three.js](https://threejs.org/)
- [three.js](https://threejs.org/Three.js/)

## step

1. start
2. docs\
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
    - √ [Curve](/docs/geometry/5.curve.html): 众多曲线类的父类
    - √ [CurvePath](/docs/geometry/13.Tube.html)
    - Interpolations
    - √ [Path](/docs/geometry/5.curve.html): Path
    - √ [Shape](/docs/geometry/5.curve.html): Shape
    - ShapePath   
- 曲线
    - √ [ArcCurve](/docs/geometry/7.lathe.html): EllipseCurve的别名，相较于ellipse，arc的x和y的radius是一样的
    - CatmullRomCurve3
    - CubicBezierCurve
    - CubicBezierCurve3
    - √ [EllipseCurve](/docs/geometry/7.lathe.html): 椭圆曲线
    - √ [LineCurve](/docs/geometry/7.lathe.html): 二维线段
    - √ [LineCurve3](/docs/geometry/7.lathe.html): 三维线段
    - QuadraticBezierCurve
    - QuadraticBezierCurve3
    - SplineCurve

### 几何体
- √ [BoxGeometry](/docs/geometry/1.box.html): 立方缓冲几何体
- √ [CircleGeometry](/docs/geometry/2.circle.html): 圆形缓冲几何体
- √ [ConeGeometry](/docs/geometry/3.cone.html): 圆锥缓冲几何体
- √ [CylinderGeometry](/docs/geometry/4.edge.html): 圆柱缓冲几何体
- √ DodecahedronGeometry: 十二面缓冲几何体
- √ [EdgesGeometry](/docs/geometry/4.edge.html): 边缘几何体(用作辅助对象来查看其他geometry的边缘)
- √ [ExtrudeGeometry](/docs/geometry/6.extrude.html): 挤压缓冲几何体(根据一个形状路径，生成一个几何体)
- √ IcosahedronGeometry: 二十面缓冲几何体
- √ [LatheGeometry](/docs/geometry/7.lathe.html): 车削缓冲几何体
- √ OctahedronGeometry: 八面缓冲几何体
- √ [PlaneGeometry](/docs/geometry/1.box.html): 平面缓冲几何体
- √ [PolyhedronGeometry](/docs/geometry/8.polyhedron.html): 缓冲几何体(是DodecahedronGeometry、IcosahedronGeometry、OctahedronGeometry和TetrahedronGeometry的父类)
- √ [RingGeometry](/docs/geometry/9.ring.html): 圆环缓冲几何体
- √ [ShapeGeometry](/docs/geometry/10.shape.html): 形状缓冲几何体
- √ [SphereGeometry](/docs/geometry/11.sphere.html): 球缓冲几何体
- √ TetrahedronGeometry: 四面缓冲几何体
- √ [TorusGeometry](/docs/geometry/12.torus.html): 圆环缓冲几何体
- √ TorusKnotGeometry: 圆环缓冲扭结几何体
- √ [TubeGeometry](/docs/geometry/13.Tube.html): 管道缓冲几何体
- √ [WireframeGeometry](/docs/geometry/13.Wireframe.html): 网格几何体: 辅助物体, 对一个geometry以线框的形式进行查看

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
- √ Color
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
- √ Vector2
- √ [Vector3](/docs/geometry/13.Tube.html)
- Vector4
- 插值
    - CubicInterpolant
    - DiscreteInterpolant
    - LinearInterpolant
    - QuaternionLinearInterpolant

### 物体

- √ [Bone](/docs/thing/1.bone.html): 骨骼: 几乎和空白的Object3D相同。是skeleton的一部分，由SkinnedMesh依次使用；
- √ Group
- √ [InstancedMesh](/docs/thing/2.InstancedMesh.html): 实例化网格；用来渲染大量具有相同geometry和material的物体，提升性能
- √ [Line](/start/2.line.html)
- √ LineLoop: 将第一个、最后一个点连接起来
- √ [LineSegments](/docs/geometry/13.Tube.html): 线段; 在若干对的顶点之间绘制的一系列的线。(也可是辅助查看物体的顶点)
- √ Mesh
- LOD: 多细节层次（LOD，Levels of Detail）
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