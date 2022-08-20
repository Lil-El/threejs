export function onSizeChange(camera, renderer) {
    window.addEventListener("resize", evt => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};