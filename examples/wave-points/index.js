import * as THREE from "three";
import { createScene, createCube } from "lib";

const scene = createScene();

// createCube(scene);

// 创建点
const pointsPosition = [];
for (let i = 0; i < 16; i += 0.2) {
  for (let j = 0; j < 16; j += 0.2) {
    pointsPosition.push(new THREE.Vector3(i - 8, j - 8, 0));
  }
}

const geometry = new THREE.BufferGeometry().setFromPoints(pointsPosition);

// let arr = [];
// for (let i = 0; i < pointsPosition.length; i++) {
//   arr.push(pointsPosition[i].x, pointsPosition[i].y, pointsPosition[i].z);
// }
// geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(arr), 3));
// geometry.setAttribute("position", new THREE.Float32BufferAttribute(arr, 3));

const material = new THREE.PointsMaterial({ color: 0xeeeeee, size: 0.05 });
const points = new THREE.Points(geometry, material);
scene.add(points);

// clock
const clock = new THREE.Clock();

const [amplitude, speed, frequency] = [0.5, 1, 0.7]; // 振幅，速度，频率

function animate() {
  pointsPosition.forEach((p) => {
    /**
     *  p.x 或 p.y;        一个轴波动，波动方向即轴方向
        p.x + p.y;        x轴和y轴同时波动，波动数量一样；波动方向是x/y轴的夹角方向
        2 * p.x + p.y     x轴的波动数量是y的两倍；波动方向是2x和y轴的夹角方向
        p.x * p.y;
        p.x / p.y;

        x、y、x+y：总有一条线计算出的结果是一样的，比如x+y时，[0,5]和[5,0]的结果是一样的，如果要让其不一样，有波动使用 sin|cos(x|y) * sin|cos(x|y)
     */
    // p.z = amplitude * Math.sin((clock.getElapsedTime() * speed + p.x) * frequency);
    // p.z = amplitude * Math.sin((clock.getElapsedTime() * speed + p.x + p.y) * frequency);

    // sin 的结果范围是 [-1, 1], 整体会有上下移动的问题
    // p.z =
    //   amplitude *
    //   Math.sin((clock.getElapsedTime() * speed + Math.sin(p.x) + /* `+或*` 都可以 */ Math.cos(p.y)) * frequency);

    /**
     * sin(x) 是在x轴上做弦运动、cos(y) 是在y轴上做弦运动
     * 所以应该是 sin(x) + cos(y)
     */
    p.z =
      amplitude *
      (Math.sin((clock.getElapsedTime() * /* +、*都可 */ speed + p.x) * frequency) /* +、*都可 */ *
        Math.cos((clock.getElapsedTime() * speed + p.y) * frequency));

    // 有其他效果
    // p.z =
    //   amplitude *
    //   (Math.sin((clock.getElapsedTime() * speed * p.x) * frequency) *
    //     Math.cos((clock.getElapsedTime() * speed * p.y) * frequency));
  });

  points.geometry = new THREE.BufferGeometry().setFromPoints(pointsPosition);

  requestAnimationFrame(animate);
}
animate();
