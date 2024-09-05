import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function animate(controls, camera, renderer, scene) {
  function next() {
    controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(next);
  }

  next();
}

function onResize(renderer, camera) {
  window.addEventListener("resize", (evt) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.up.set(0, 0, 1);
  camera.position.set(5, -5, 5);
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI / 2;

  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  onResize(renderer, camera);

  animate(controls, camera, renderer, scene);

  return scene;
}

export function createCube(scene) {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}
