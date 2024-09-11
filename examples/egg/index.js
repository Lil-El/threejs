import * as THREE from "three";
import { createScene, createCube } from "lib";

const scene = createScene();

// createCube(scene);

const yolk = createYolk();
const albumen = createAlbumen();

scene.add(yolk);
scene.add(albumen);

function createYolk() {
  const geometry = new THREE.CircleGeometry(2, 20);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = 0.1;

  return mesh;
}

function createAlbumen() {
  const clock = new THREE.Clock();

  const gu = {
    time: {
      value: 0,
    },
  };

  const geometry = new THREE.CircleGeometry(4, 40);

  // 设置随机转变
  const shift = new THREE.BufferAttribute(new Float32Array(geometry.attributes.position.count * 3), 3);
  for (let i = 0; i < geometry.attributes.position.count; i++) {
    shift.setXYZ(i, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 0.5);
  }
  geometry.setAttribute("shift", shift);

  const material = new THREE.MeshBasicMaterial({
    blending: THREE.AdditiveBlending,
    onBeforeCompile(shader) {
      shader.uniforms.time = gu.time;

      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `
          #include <common>
          uniform float time;
          attribute vec3 shift;

          float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
          }
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        `
          #include <begin_vertex>
          transformed += vec3(sin(shift.x + time), sin(shift.y + time), 0.0) * shift.z;
        `
      );
      console.log(shader.vertexShader);
      //  shader.fragmentShader
    },
  });

  const mesh = new THREE.Mesh(geometry, material);

  function animate() {
    gu.time.value = clock.getElapsedTime() * 0.5;
    requestAnimationFrame(animate);
  }
  animate();

  return mesh;
}
