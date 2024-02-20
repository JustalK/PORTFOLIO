<template>
    <div id="ABOUT" ref="about">
        <div>Test</div>
    </div>
</template>
<script>
import * as THREE from '../libs/three.js';

const FOV = 75;
const WINDOWS_WIDTH = window.innerWidth;
const WINDOWS_HEIGHT = window.innerHeight;

const CAMERA_START_POSITION_X = 0;
const CAMERA_START_POSITION_Y = 0;
const CAMERA_START_POSITION_Z = 0;
const CAMERA_START_ROTATION_X = 0;
const CAMERA_START_ROTATION_Y = 0;
const CAMERA_START_ROTATION_Z = 0;

export default {
    data: () => {
        return {
            camera: null
        };
    },
    async mounted() {
        init();
    },
    methods: {
        init() {
            this.initCamera();
            this.initScene();
        },
        initCamera() {
            this.camera = new THREE.PerspectiveCamera(
                FOV,
                WINDOWS_WIDTH / WINDOWS_HEIGHT,
                1,
                1000
            );
            this.camera.position.set(
                CAMERA_START_POSITION_X,
                CAMERA_START_POSITION_Y,
                CAMERA_START_POSITION_Z
            );
            this.camera.rotation.set(
                CAMERA_START_ROTATION_X,
                CAMERA_START_ROTATION_Y,
                CAMERA_START_ROTATION_Z
            );
        },
        initScene() {}
    }
};
</script>
<style src="../assets/less/about.less"></style>
