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

const LIGHT_AMBIANT_COLOR = 0xffffff;

const SPEED_LOGO = 1.25;
const SPEED_ROTATION_LOGO = 0.03;

export default {
	data: () => {
		return {
			camera: null,
			scene: null,
			invisible: false,
			renderer: null,
			groupCubeLogo: [],
			originalCube: null
		};
	},
	async mounted() {
		this.init();
	},
	methods: {
		init() {
			this.initCamera();
			this.initScene();
			this.initLight(LIGHT_AMBIANT_COLOR);
			this.createWorld();
			this.renderWebGL();

			this.$refs.about.appendChild(this.renderer.domElement);

			this.animate();
		},
		back() {
			console.log('azeae');
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
		initLight(color) {
			this.scene.add(new THREE.AmbientLight(color, 0.8));
			const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
			light.position.set(-10, 0, 20);
			this.scene.add(light);
		},
		createWorld() {
			const geometry = new THREE.BoxGeometry(20, 20, 20);
			const material = new THREE.MeshPhongMaterial({ color: 0x000000 });
			this.originalCube = new THREE.Mesh(geometry, material);
			this.originalCube.position.z = -10;
			this.scene.add(this.originalCube);

			this.createCube(25, 25, 0x001d2e);
			this.createCube(-25, -25, 0x005c94);
			this.createCube(-25, 25, 0x009bfa);
			this.createCube(25, -25, 0x61c3ff);
			this.camera.position.z = 5;
		},
		createCube(x, y, color) {
			const geometry = new THREE.BoxGeometry(20, 20, 60);
			const material = new THREE.MeshPhongMaterial({ color });
			const cube = new THREE.Mesh(geometry, material);
			cube.position.z = -10;
			cube.position.x = x;
			cube.origin = {};
			cube.origin.x = x;
			cube.origin.y = y;
			this.groupCubeLogo.push(cube);
			this.scene.add(cube);
		},
		renderWebGL() {
			this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(WINDOWS_WIDTH, WINDOWS_HEIGHT);
			this.renderer.gammaInput = true;
			this.renderer.gammaOutput = true;
			this.renderer.powerPreference = 'high-performance';
		},
		animate() {
			this.renderer.render(this.scene, this.camera);
			if (this.camera.rotation.z < (3 * Math.PI) / 4) {
				this.camera.position.z += SPEED_LOGO;
				this.camera.rotation.z = Math.min(
					this.camera.rotation.z + SPEED_ROTATION_LOGO,
					(3 * Math.PI) / 4
				);
			}
			for (const cubeLogo of this.groupCubeLogo) {
				cubeLogo.position.x =
					cubeLogo.origin.x > 10
						? Math.max(cubeLogo.position.x - 0.5, 11)
						: Math.min(cubeLogo.position.x + 0.5, -11);
				cubeLogo.position.y =
					cubeLogo.origin.y > 10
						? Math.max(cubeLogo.position.y - 0.5, 11)
						: Math.min(cubeLogo.position.y + 0.5, -11);
			}
			this.originalCube.position.z -= SPEED_LOGO;
			requestAnimationFrame(this.animate);
		}
	}
};
</script>
<style src="../assets/less/about.less"></style>
