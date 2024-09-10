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

  const geometry = new THREE.CircleGeometry(4, 40 / 4);
  geometry.setAttribute(
    "color",
    new THREE.Float16BufferAttribute(new Array(geometry.attributes.position.count * 3).fill(1), 3)
  );

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    // vertexColors: true,
    blending: THREE.AdditiveBlending,
    onBeforeCompile(shader) {
      shader.uniforms.time = gu.time;

      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `
          #include <common>
          uniform float time;
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        `
          #include <begin_vertex>
          transformed += vec3(sin(time), sin(time), 0.0);
        `
      );
      console.log(shader.vertexShader);
      //  shader.fragmentShader
    },
  });

  const mesh = new THREE.Mesh(geometry, material);

  function animate() {
    gu.time.value = clock.getElapsedTime();
    requestAnimationFrame(animate);
  }
  animate();

  return mesh;
}
