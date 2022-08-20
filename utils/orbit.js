import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

export function orbitControl(camera, dom) {
    const orbitControl = new OrbitControls(camera, dom);
    orbitControl.enableDamping  = true; // 惯性阻尼
    orbitControl.maxPolarAngle = 1.5; // 垂直旋转的角度的上限 (PI / 2) 90度；为了plane可以看到取1.5
    return orbitControl;
};