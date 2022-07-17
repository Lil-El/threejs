# index.html

---

## 坐标系

x、y：屏幕长、宽
z：垂直于屏幕；`调整相机和物体的距离`

## PerspectiveCamera

> PerspectiveCamera: 透视相机，远近处物体大小不同
>
> OrthographicCamera: 正投影相机，远近处大小都一样

-   near 和 far 不能相同，near 不能为负值
-   near 和 far，分别是 近剪裁平面(ABCD)和远剪裁平面(EFGH)到相机的距离 ，即图中的 OC 和 OG
-   当`camera.position.z`大于 far 或小于 near 时，观察不到物体
-   ![img](../assets/image/note.png)

## 线性代数

[线性代数](https://blog.csdn.net/web2022050901/article/details/124748693)