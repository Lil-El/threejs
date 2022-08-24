# index.html

---

## Es Module

- importmap: 指定引入的包的路径

```html
<script type="importmap">
    {
        "imports": {
            "three": "/node_modules/three/build/three.module.js"
        }
    }
</script>
```

## 坐标系

- 采用`右手坐标系`
- 拇指、食指分布表示x、y轴：屏幕横、竖
- 中指表示z轴：垂直于屏幕；`调整相机和物体的距离`

## PerspectiveCamera

> PerspectiveCamera: 透视相机，远近处物体大小不同
>
> OrthographicCamera: 正投影相机，远近处大小都一样

-   near 和 far 不能相同，near 不能为负值
-   near 和 far，分别是 近剪裁平面(ABCD)和远剪裁平面(EFGH)到相机的距离 ，即图中的 OC 和 OG
-   当`camera.position.z`大于 far 或小于 near 时，观察不到物体
-   ![img](/assets/image/note.png)

## 线性代数

[线性代数](https://blog.csdn.net/web2022050901/article/details/124748693)

## 场景更新

默认情况下，所有对象都会自动更新它们的矩阵（如果它们已添加到场景中）

```js
const object = new THREE.Object3D();
scene.add( object );或者它们是已添加到场景中的另一个对象的子节点:
const object1 = new THREE.Object3D();
const object2 = new THREE.Object3D();

object1.add( object2 );
scene.add( object1 ); //object1 和 object2 会自动更新它们的矩阵
```

但是，如果你知道对象将是静态的，则可以禁用此选项并在需要时手动更新转换矩阵。

```js
object.matrixAutoUpdate = false;
object.updateMatrix();
```