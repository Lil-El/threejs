import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

export function orbitControl(camera, dom) {
    new OrbitControls(camera, dom);
};