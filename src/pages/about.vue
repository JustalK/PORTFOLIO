<template>
	<div id="ABOUT" ref="about" />
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
			camera: null,
			scene: null,
			renderer: null
		};
	},
	async mounted() {
		this.init();
	},
	methods: {
		init() {
			this.initCamera();
			this.initScene();
			this.createWorld();
			this.renderWebGL();

			this.$refs.about.appendChild(this.renderer.domElement);

			this.animate();
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
		initScene() {
			this.scene = new THREE.Scene();
		},
		createWorld() {
			const geometry = new THREE.BoxGeometry(1, 1, 1);
			const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			const cube = new THREE.Mesh(geometry, material);
			this.scene.add(cube);

			this.camera.position.z = 5;
		},
		renderWebGL() {
			this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(WINDOWS_WIDTH, WINDOWS_HEIGHT);
			this.renderer.gammaInput = true;
			this.renderer.gammaOutput = true;
			this.renderer.powerPreference = 'high-performance';
			// this.renderer.setClearColor(0x000000, 0);
		},
		animate() {
			this.renderer.render(this.scene, this.camera);
			requestAnimationFrame(this.animate);
		}
	}
};
</script>
<style src="../assets/less/about.less"></style>
