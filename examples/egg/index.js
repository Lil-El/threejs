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
  const geometry = new THREE.CircleGeometry(4, 40);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
}
