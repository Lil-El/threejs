# Three.js

- [three.js文档](https://threejs.org/docs/geometry/index.html)
- [three.js](https://threejs.org/)
- [three.js](https://threejs.org/Three.js/)

## step

1. start
2. docs\
3. examples

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
- √ [Camera](https://zhuanlan.zhihu.com/p/510877492): 相机: near最小为0.1，near和far之间的是可视区域；投影时，需要调整相机尺寸（top、bottom、left、right）并将物体放在可视范围之内(near/far中间)  [例子](/docs/light/light.html)
- CubeCamera
- √ [OrthographicCamera](/docs/controls/trackBall.html): 正交相机，可以展示所有物体，不能透视到物体之后；[例子](https://threejs.org/examples/#misc_controls_trackball)
- √ [PerspectiveCamera](/docs/light/light.html): 透视相机
- StereoCamera

#### 常量 x

> 例如：Material中通过常量设置渲染哪一面THREE.FrontSide等。
Animation
Core
CustomBlendingEquation
√ [Materials](/docs/material/1.MeshDept.html): Side面
Renderer
√ [Textures](/docs/material/1.MeshDept.html): 纹理常量; RepeatWrapping

### 核心

- √ [BufferAttribute](/docs/thing/3.points.html): 用于BufferGeometry设置属性值（顶点、颜色等）
- √ [BufferGeometry](/start/5.bufferGeometry.html): geometry的父类
- Clock: 时间相关
- EventDispatcher: 事件相关，可以自定义obj的事件监听函数
- GLBufferAttribute
- InstancedBufferAttribute
- InstancedBufferGeometry
- InstancedInterleavedBuffer
- InterleavedBuffer
- InterleavedBufferAttribute
- Layers
- √ [Object3D](/docs/thing/2.InstancedMesh.html): thing的父类
- Raycaster: 光线投射，实现鼠标拾取功能
- Uniform
- √ BufferAttributes
    - √ [BufferAttribute Types](/docs/thing/3.points.html): Float32BufferAttribute, Int32BufferAttribute, Uint8BufferAttribute等许多都继承自BufferAttribute；会将array转换为对应的Type Array

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
    - CubicBezierCurve: 贝塞尔曲线
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
- √ [TorusKnotGeometry](/docs/geometry/14.toruKnot.html): 圆环缓冲扭结几何体
- √ [TubeGeometry](/docs/geometry/13.Tube.html): 管道缓冲几何体
- √ [WireframeGeometry](/docs/geometry/13.Wireframe.html): 网格几何体: 辅助物体, 对一个geometry以线框的形式进行查看

### 辅助对象

- √ [ArrowHelper](/docs/thing/3.1.points-colorfulBox.html): 箭头: 线段和椎体可以设置为物体
- √ [AxesHelper](/docs/thing/3.1.points-colorfulBox.html): 三维空间的坐标轴
- √ [BoxHelper](/docs/geometry/11.sphere.html): 将物体使用box包裹起来 [例子](https://threejs.org/examples/#webgl_buffergeometry_drawrange)
- Box3Helper
- √ [CameraHelper](/docs/geometry/11.sphere.html): 相机辅助 [例子](/docs/light/light.html)
- √ [DirectionalLightHelper](/docs/light/light.html): 平行光辅助线
- √ [GridHelper](/docs/light/light.html): 网格辅助线: 设置Material的depthWrite为false，可以使线不会抖动
- PolarGridHelper
- √ [HemisphereLightHelper](/docs/light/light.html): 模拟半球形光源
- √ [PlaneHelper](/docs/thing/4.skeleton.html): 模拟平面 Plane 的辅助对象, 传入Math.Plane可以生成平面
- √ [PointLightHelper](/docs/light/light.html): 点光源辅助线
- SkeletonHelper
- SpotLightHelper

### 灯光

- √ [AmbientLight](/docs/light/light.html): 均应照亮场景的物体；没有方向，没有阴影
- AmbientLightProbe
- √ [DirectionalLight](/docs/light/light.html): 平行光
- √ [HemisphereLight](/docs/light/light.html): 半球光，将光源放置于场景之上
- HemisphereLightProbe
- Light
- LightProbe
- √ [PointLight](/docs/light/light.html): 点光源
- RectAreaLight
- SpotLight
- 阴影
    - LightShadow
    - √ [PointLightShadow](/docs/light/light.html): 点光源投影，将物体放在光圈内
    - √ [DirectionalLightShadow](/docs/light/light.html): 平行光投影，将物体放在投影相机的可视范围内
    - SpotLightShadow

### 加载器

- AnimationLoader
- AudioLoader
- BufferGeometryLoader
- Cache
- CompressedTextureLoader
- √ [CubeTextureLoader](/docs/material/2.MeshBasic.html)
- DataTextureLoader
- FileLoader
- ImageBitmapLoader
- ImageLoader: 内部使用FileLoader来加载文件，并被 CubeTextureLoader、ObjectLoader、TextureLoader所使用。
- Loader: 加载器的基类。
- LoaderUtils
- MaterialLoader
- ObjectLoader
- √ [TextureLoader](/docs/material/1.MeshDept.html): 内部使用ImageLoader来加载文件
- 管理器
    - DefaultLoadingManager
    - LoadingManager

### 材质

- √ [LineBasicMaterial](/start/2.line.html): 直线
- √ [LineDashedMaterial](/start/2.line.html): 虚线
- √ [Material](/docs/material/1.MeshDept.html)
- √ [MeshBasicMaterial](/docs/material/2.MeshBasic.html): 基础的网格材质，不受光照的影响。
- √ [MeshPhongMaterial](/docs/geometry/14.toruKnot.html): 可以**反光**的Material材质
- √ [MeshDepthMaterial](/docs/material/1.MeshDept.html): 按深度绘制几何体的材质。深度基于相机远近平面。白色最近，黑色最远。
- √ [MeshDistanceMaterial](/docs/material/3.MeshDistance.html): 用于使用PointLight来实现阴影映射
- MeshLambertMaterial: 一种非光泽表面的材质，没有镜面高光。
- MeshMatcapMaterial
- MeshNormalMaterial
- MeshPhysicalMaterial
- MeshStandardMaterial
- MeshToonMaterial: 卡通阴影
- √ [PointsMaterial](/docs/thing/3.points.html): 点物体的材质
- RawShaderMaterial
- ShaderMaterial
- ShadowMaterial
- SpriteMaterial

### 数学库

- Box2
- Box3
- √ [Color](/docs/raycaster/index.html): 颜色生成，计算；`new THREE.Color() * Math.random();`, `Color1.equals(Color2)`
- Cylindrical
- Euler
- Frustum
- Interpolant
- Line3
- √ [MathUtils](/docs/thing/3.points.html): 不需要new。可以生成随机数、度数与弧度转换、生成UUID、线性差值等
- √ [Matrix3](/docs/thing/2.InstancedMesh.html): 矩阵。坐标的平移、转换、旋转。
- √ [Matrix4](/docs/thing/2.InstancedMesh.html): 矩阵。坐标的平移、转换、旋转。
- √ [Plane](/docs/thing/4.skeleton.html): 构建无限延伸的二维平面。可以判断与线段、box、球等物体是否相交
- Quaternion
- Ray
- Sphere
- Spherical
- SphericalHarmonics3
- Triangle
- √ Vector2
- √ [Vector3](/docs/geometry/13.Tube.html): 三维空间的点坐标，可以表示坐标、向量等。能计算点的距离，向量，应用旋转等操作；[**单位向量**](/docs/thing/3.1.points-colorfulBox.html)
- Vector4
- 插值
    - CubicInterpolant
    - DiscreteInterpolant
    - LinearInterpolant
    - QuaternionLinearInterpolant

### 物体

- √ Group
- √ [InstancedMesh](/docs/thing/2.InstancedMesh.html): 实例化网格；用来渲染大量具有相同geometry和material的物体，提升性能; [例子](/docs/raycaster/index.html)
- √ [Line](/start/2.line.html)
- √ LineLoop: 将第一个、最后一个点连接起来
- √ [LineSegments](/docs/geometry/13.Tube.html): 线段; 在若干对的顶点之间绘制的一系列的线。(也可是辅助查看物体的顶点)
- √ Mesh
- √ [Points](/docs/thing/3.points.html): 点; 绘制BoxGeometry时，THREE.Points会渲染box的8个点；传入THREE.BufferGeometry可以传入任何点
- LOD: 多细节层次（LOD，Levels of Detail） TODO:
- √ [Bone](/docs/thing/1.bone.html): 骨骼: 几乎和空白的Object3D相同。是skeleton的一部分，由SkinnedMesh依次使用；
- √ [Skeleton](/docs/thing/4.skeleton.html): 骨架（包含了Bone）
- √ [SkinnedMesh](/docs/thing/4.skeleton.html): 知识点较多，查看该文件
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

- √ [Fog](/docs/light/light.html): 雾
- √ [FogExp2](/docs/thing/3.1.points-colorfulBox.html): 雾
- √ [Scene](/docs/light/light.html): 场景

### 纹理贴图

- √ [CanvasTexture](/docs/material/3.MeshDistance.html): 从Canvas元素中创建纹理贴图。
- CompressedTexture
- CubeTexture: 立方纹理，由6张图片组成。对应了CubeTextureLoader
- DataArrayTexture
- Data3DTexture
- DataTexture
- DepthTexture
- FramebufferTexture
- Source
- Texture
- VideoTexture

### examples

### 动画

- CCDIKSolver
- MMDAnimationHelper
- MMDPhysics

### 控制

- √ [DragControls](/docs/controls/drag.html)
- √ [FirstPersonControls](/docs/controls/firstPerson.html): 是fly的另一种实现
- √ [FlyControls](/docs/controls/fly.html)
- √ OrbitControls
- PointerLockControls: 锁定鼠标; TODO:
- √ [TrackballControls](/docs/controls/trackBall.html): 这个控制器在up方向可以一直转动; **创建控制器需要在dom创建之后进行**
- √ [TransformControls](/docs/controls/transform.html): 变换控制，可以修改物体的位置、旋转等。

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

### 后期处理

- EffectComposer

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

### 物体 x

- Lensflare: 镜头光晕, 和light一起使用

### 导出器 x

- ColladaExporter
- GLTFExporter
- PLYExporter

### 数学库 x

- LookupTable
- MeshSurfaceSampler
- OBB
- QuickHull
- Face
- HalfEdge
- ConvexHull
- VertexNode
- VertexList

### 渲染器 x

- CSS2DRenderer
- CSS3DRenderer
- SVGRenderer

### 实用工具 x

- BufferGeometryUtils
- SceneUtils
- SkeletonUtils

动画 》音频 》合成

> wireframe、grid、line等线条发虚，可以material设置opacity，参考(/docs/light/light.html)
> wireframe、grid、line等线条发虚，可以WebGLRender设置**抗锯齿**antialias: true，参考(/docs/material/1.MeshDept.html)
 