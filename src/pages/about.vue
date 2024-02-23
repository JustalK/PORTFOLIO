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
			currentBreakpoint: 0,
			nextBreakpoint: 0,
			scene: null,
			invisible: false,
			renderer: null,
			groupCubeLogo: [],
			originalCube: null,
			backgroundMaterial: null,
			delta: 0,
			clock: null
		};
	},
	async mounted() {
		this.init();
	},
	methods: {
		init() {
			this.initClock();
			this.initCamera();
			this.initScene();
			this.initLight(LIGHT_AMBIANT_COLOR);
			this.createWorld();
			this.renderWebGL();

			this.$refs.about.appendChild(this.renderer.domElement);

			this.animate();

			window.addEventListener('wheel', this.onDocumentScroll, false);
			window.addEventListener('mousemove', this.onDocumentMouseMove, false);
		},
		initClock() {
			this.clock = new THREE.Clock();
			// Set the time to 0
			this.clock.start();
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
			this.camera.original = {
				position: {
					x: CAMERA_START_POSITION_X,
					y: CAMERA_START_POSITION_Y,
					z: CAMERA_START_POSITION_Z
				}
			};
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

			var vFOV = this.camera.fov * Math.PI / 180;
			var height = 2 * Math.tan( vFOV / 2 ) * 100;
			var width = height * this.camera.aspect; 
			const geometry2 = new THREE.PlaneGeometry(width, height);
			this.backgroundMaterial = new THREE.ShaderMaterial({
				uniforms: {
					uResolution: {
						value: new THREE.Vector2(
							window.innerHeight / window.innerWidth,
							window.innerHeight / window.innerWidth
						)
					},
					uMouse: { value: new THREE.Vector2(0.5, 0.5) },
					uTime: { type: 'f', value: 0.0 }
				},
				fragmentShader: this.fragmentShader(),
				vertexShader: this.vertexShader()
			});
			const background = new THREE.Mesh(geometry2, this.backgroundMaterial);
			background.position.z = 0;
			this.scene.add(background);

			/**
			this.createCube(25, 25, 0x001d2e);
			this.createCube(-25, -25, 0x005c94);
			this.createCube(-25, 25, 0x009bfa);
			this.createCube(25, -25, 0x61c3ff);
			**/
		},
		vertexShader() {
			return `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}`;
		},
		fragmentShader() {
			return `
			uniform float uTime;
			uniform vec2 uResolution;
			uniform vec2 uMouse;
			varying vec2 vUv;

			float random(in vec2 st) {
				return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
			}
			float noise(in vec2 st) {
				vec2 i = floor(st);
				vec2 f = fract(st);

				float a = random(i + vec2(0.0, 0.0));
				float b = random(i + vec2(1.0, 0.0));
				float c = random(i + vec2(0.0, 1.0));
				float d = random(i + vec2(1.0, 1.0));
				vec2 u = f * f * (3.0 - 2.0 * f);

				return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
			}
			float fbm(in vec2 st) {
				float v = 0.0;
				float a = 0.5;
				int octave = 5;
				for (int i = 0; i < 5; i++) {
					v += a * noise(st);
				st = st * 2.0;
				a *= 0.5;
				}
				return v;
			}
			float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
				uv -= disc_center;
				uv*=uResolution;
				float dist = sqrt(dot(uv, uv));
				return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
			}
			void main() {
				vec3 color = vec3(0.035, 0.078, 0.356);
				vec3 colorHover = vec3(0.978, 0.035, 0.356);
				float circleMouse = circle(vUv, uMouse, 0.0005, 0.5);
				float cornerLeftBottom = circle(vUv, vec2(0, 0), 0.0005, 4.0);
				float cornerRightTop = circle(vUv, vec2(1, 1), 0.0005, 4.0);
				float maskLeftBottom = smoothstep(0.4, 0.5, cornerLeftBottom);
				float maskRightTop = smoothstep(0.4, 0.5, cornerRightTop);
				float maskCenter = circle(vUv, vec2(0.5), 0.1, 0.1);
				vec2 st = gl_FragCoord.xy * 0.001 / uResolution.xy;

				vec2 q = vec2(0.0);
				q.x = fbm(st + vec2(0.0));
				q.y = fbm(st + vec2(1.0));

				vec2 r = vec2(0.0);
				r.x = fbm(st + (1.0 * q) + vec2(0.0, 9.2) + (0.1 * uTime));
				//r.y = fbm(st + (1.0 * q) + vec2(0.0, 2.8) + (0.05 * uTime));
				float f = fbm(st + r);

				float coef = (f * f * f + (0.6 * f * f) + (0.5 * f));
				vec4 mixed1 = mix(vec4(coef * color, 1.0), vec4(coef * colorHover, 1.0), circleMouse);
				vec4 mixed2 = mix(mixed1, vec4(0.0, 0.0, 0.0, 1.0), maskLeftBottom);
				vec4 mixed3 = mix(mixed2, vec4(0.0, 0.0, 0.0, 1.0), maskRightTop);
				vec4 mixed4 = mix(mixed3, vec4(0.0, 0.0, 0.0, 1.0), maskCenter);
				gl_FragColor = mixed4;
			}`;
		},
		createCube(x, y, color) {
			const geometry = new THREE.BoxGeometry(20, 20, 60);
			const material = new THREE.MeshPhongMaterial({
				color,
				opacity: 1.0,
				transparent: true
			});
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
			this.delta = this.clock.getDelta();

			this.backgroundMaterial.uniforms.uTime.value =
				this.clock.getElapsedTime();

			console.log(SPEED_ROTATION_LOGO);

			if (this.camera.position.z < 100) {
				this.camera.position.z += SPEED_LOGO;
				this.camera.original.position.z = this.camera.position.z;
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

			this.moveCameraTo(this.nextBreakpoint);
			requestAnimationFrame(this.animate);
		},
		moveCameraTo(breakpoint) {
			if (this.currentBreakpoint !== breakpoint) {
				switch (breakpoint) {
				case 0:
					this.camera.position.z = Math.max(
						this.camera.position.z - SPEED_LOGO,
						this.camera.original.position.z
					);
					if (this.camera.position.z === this.camera.original.position.z) {
						this.currentBreakpoint = breakpoint;
					}
					break;
				case 1:
					this.camera.position.z = Math.min(
						this.camera.position.z + SPEED_LOGO,
						200
					);
					if (this.camera.position.z === 200) {
						this.currentBreakpoint = breakpoint;
					}
					break;
				}
			}
		},
		onDocumentScroll(event) {
			const variation = parseInt(event.deltaY);
			if (this.currentBreakpoint === this.nextBreakpoint) {
				this.nextBreakpoint =
					variation > 0
						? Math.min(this.currentBreakpoint + 1, 1)
						: Math.max(this.currentBreakpoint - 1, 0);
			}
		},
		onDocumentMouseMove(event) {
			this.backgroundMaterial.uniforms.uMouse.value.x = event.clientX / WINDOWS_WIDTH;
			this.backgroundMaterial.uniforms.uMouse.value.y = 1.0 - event.clientY / WINDOWS_HEIGHT;
		}
	}
};
</script>
<style src="../assets/less/about.less"></style>
