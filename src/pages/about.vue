<template>
	<div id="ABOUT" ref="about" />
</template>
<script>
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { getWidthAndHeight } from '../helper/utils';
import FogMaterial from '../materials/fog';
import ImageMaterial from '../materials/image';

const TEXTURE_ME_ROLLER = '../assets/imgs/me_fake.jpg';
const TEXTURE_ME_WIFE = '../assets/imgs/me_and_wife.jpg';

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
			objectInteraction: [],
			imageMaterial: null,
			delta: 0,
			clock: null,
			width: 0,
			height: 0,
			line: null,
			x: 0,
			y: 0,
			limitMouseMove: null,
			isFirstAnimation: true,
			raycaster: null,
			mouse: { x: 0, y: 0 }
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		/**
		 * Initialize the screen
		 */
		init() {
			this.initClock();
			this.initCamera();
			this.initScene();
			this.initLight(LIGHT_AMBIANT_COLOR);
			this.initSettings();
			this.initRaycaster();
			this.renderWebGL();
			this.$refs.about.appendChild(this.renderer.domElement);
			this.createWorld();

			this.animate();

			window.addEventListener('wheel', this.onDocumentScroll, false);
			window.addEventListener('mousemove', this.onDocumentMouseMove, false);
		},
		/**
		 * Start the clock
		 */
		initClock() {
			this.clock = new THREE.Clock();
			// Set the time to 0
			this.clock.start();
		},
		initSettings() {
			const [width, height] = getWidthAndHeight(this.camera, 100);
			this.width = width;
			this.height = height;
		},
		/**
		 * Reverse the animation for going back to the previous screen
		 */
		back() {
			console.log('azeae');
		},
		/**
		 * Initialize the camera
		 */
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
		initRaycaster() {
			this.raycaster = new THREE.Raycaster();
			this.raycaster.setFromCamera(this.mouse, this.camera);
		},
		createWorld() {
			this.createBackground();
			this.createLine();
			this.createPhoto();
			this.createTitle();
		},
		createBackground() {
			const geometry = new THREE.PlaneGeometry(this.width, this.height);
			this.backgroundMaterial = new THREE.ShaderMaterial({
				uniforms: {
					uResolution: {
						value: new THREE.Vector2(
							WINDOWS_HEIGHT / WINDOWS_WIDTH,
							WINDOWS_HEIGHT / WINDOWS_WIDTH
						)
					},
					uMouse: { value: new THREE.Vector2(0.5, 0.5) },
					uTime: { type: 'f', value: 0.0 }
				},
				fragmentShader: FogMaterial.fragmentShader(),
				vertexShader: FogMaterial.vertexShader()
			});
			const background = new THREE.Mesh(geometry, this.backgroundMaterial);
			background.name = 'background';
			this.scene.add(background);
		},
		createLine() {
			const borderOffset = 20;
			const curve = new THREE.SplineCurve([
				new THREE.Vector2(-this.width / 2 - borderOffset, 50),
				new THREE.Vector2(-50, 50),
				new THREE.Vector2(50, -50),
				new THREE.Vector2(this.width / 2 + borderOffset, -50)
			]);

			const points = curve.getPoints(100);
			const geometry = new THREE.BufferGeometry().setFromPoints(points);

			const material = new THREE.LineBasicMaterial({
				color: 0x0099ff,
				transparent: true,
				opacity: 0
			});

			// Create the final object to add to the scene
			const splineObject = new THREE.Line(geometry, material);
			const positionAttribute = splineObject.geometry.getAttribute('position');
			splineObject.geometry.attributes.position.original = [
				...positionAttribute.array
			];
			splineObject.indexToMove = [];
			splineObject.indexToReturn = [];
			splineObject.name = 'line';
			this.line = splineObject;
			this.scene.add(splineObject);
		},
		async createPhoto() {
			const geometry = new THREE.PlaneGeometry(
				(this.width * 20) / 100,
				this.height / 2,
				8,
				8
			);
			const loader = new THREE.TextureLoader();
			const meRoller = await loader.loadAsync(TEXTURE_ME_ROLLER);
			const meWife = await loader.loadAsync(TEXTURE_ME_WIFE);
			this.photoMaterial = new THREE.ShaderMaterial({
				uniforms: {
					uTexture: { value: meRoller },
					uTexture2: { value: meWife },
					uResolution: {
						value: new THREE.Vector2(
							WINDOWS_HEIGHT / WINDOWS_WIDTH,
							WINDOWS_HEIGHT / WINDOWS_WIDTH
						)
					},
					uMouse: { value: new THREE.Vector2(0.0, 0.0) },
					uTime: { type: 'f', value: 0.0 },
					uVelo: { value: 0.0 },
					uOpacity: { value: 0.0 },
					smoothness: { value: 0.01 },
					scale: { value: 4.0 },
					seed: { value: 12.9898 }
				},
				fragmentShader: ImageMaterial.fragmentShader(),
				vertexShader: ImageMaterial.vertexShader(),
				transparent: true
			});
			const photo = new THREE.Mesh(geometry, this.photoMaterial);
			photo.name = 'photo';
			photo.position.z = 0.01;
			this.objectInteraction.push(photo);
			this.scene.add(photo);
		},
		createTitle() {
			var loader = new FontLoader();
			loader.load('../assets/fonts/Barlow_Regular.json', (font) => {
				var textGeometry = new TextGeometry('ABOUT ME', {
					font: font,

					size: 15,
					height: 0.01,
					curveSegments: 12,
				});

				var textMaterial = new THREE.MeshBasicMaterial({
					color: 0x0099ff
				});

				var mesh = new THREE.Mesh(textGeometry, textMaterial);
				textGeometry.computeBoundingBox();
				mesh.position.y = this.height / 4 + 10;

				if (textGeometry.boundingBox) {
					textGeometry.translate(-textGeometry.boundingBox.max.x / 2, 0, 0);
				}

				this.scene.add(mesh);
			});
		},
		renderWebGL() {
			this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(WINDOWS_WIDTH, WINDOWS_HEIGHT);
			this.renderer.gammaInput = true;
			this.renderer.gammaOutput = true;
			this.renderer.powerPreference = 'high-performance';
		},
		startAnimation() {
			this.line.material.opacity += 0.025;
			this.photoMaterial.uniforms.uOpacity.value += 0.1;

			if (this.line.material.opacity === 1) {
				this.isFirstAnimation = false;
			}
		},
		animate() {
			requestAnimationFrame(this.animate);
			this.delta += this.clock.getDelta();

			if (this.delta > 1 / 60) {
				if (this.isFirstAnimation && this.clock.getElapsedTime() > 2) {
					this.startAnimation();
				}
				this.searchingMatchMouseAndMesh();

				const positionAttribute = this.line.geometry.getAttribute('position');

				for (const index of this.line.indexToMove) {
					const px =
						positionAttribute.array[0 + index * 3] > this.x
							? Math.max(positionAttribute.array[0 + index * 3] - 0.5, this.x)
							: Math.min(positionAttribute.array[0 + index * 3] + 0.5, this.x);
					const py =
						positionAttribute.array[1 + index * 3] > this.y
							? Math.max(positionAttribute.array[1 + index * 3] - 0.5, this.y)
							: Math.min(positionAttribute.array[1 + index * 3] + 0.5, this.y);
					positionAttribute.setXYZ(index, px, py, 0);
				}

				for (const [i, index] of this.line.indexToReturn.entries()) {
					const px =
						positionAttribute.array[0 + index * 3] >
						positionAttribute.original[0 + index * 3]
							? Math.max(
								positionAttribute.array[0 + index * 3] - 0.8,
								positionAttribute.original[0 + index * 3]
							)
							: Math.min(
								positionAttribute.array[0 + index * 3] + 0.8,
								positionAttribute.original[0 + index * 3]
							);
					const py =
						positionAttribute.array[1 + index * 3] >
						positionAttribute.original[1 + index * 3]
							? Math.max(
								positionAttribute.array[1 + index * 3] - 0.8,
								positionAttribute.original[1 + index * 3]
							)
							: Math.min(
								positionAttribute.array[1 + index * 3] + 0.8,
								positionAttribute.original[1 + index * 3]
							);
					positionAttribute.setXYZ(index, px, py, 0);
					if (
						positionAttribute.original[0 + index * 3] ===
						positionAttribute.array[0 + index * 3] &&
						positionAttribute.original[1 + index * 3] ===
						positionAttribute.array[1 + index * 3]
					) {
						this.line.indexToReturn.splice(i, 1);
					}
				}

				positionAttribute.needsUpdate = true;

				this.backgroundMaterial.uniforms.uTime.value =
					this.clock.getElapsedTime();
				if (this.photoMaterial) {
					this.photoMaterial.uniforms.uTime.value = this.clock.getElapsedTime();
				}

				if (this.camera.position.z < 100) {
					this.camera.position.z += SPEED_LOGO;
					this.camera.original.position.z = this.camera.position.z;
				}

				this.moveCameraTo(this.nextBreakpoint);
			}
			this.renderer.render(this.scene, this.camera);
		},
		searchingMatchMouseAndMesh() {
			this.raycaster.setFromCamera(this.mouse, this.camera);
			const intersects = this.raycaster.intersectObjects(
				this.objectInteraction,
				true
			);

			if (this.photoMaterial) {
				if (intersects.length > 0) {
					this.photoMaterial.uniforms.uMouse.value.x = intersects[0].uv.x;
					this.photoMaterial.uniforms.uMouse.value.y = intersects[0].uv.y;
					this.photoMaterial.uniforms.uVelo.value = Math.min(
						this.photoMaterial.uniforms.uVelo.value + 0.1,
						1.0
					);
				} else {
					this.photoMaterial.uniforms.uVelo.value = Math.max(
						this.photoMaterial.uniforms.uVelo.value - 0.1,
						0.0
					);
				}
			}
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
			if (this.limitMouseMove) {
				clearTimeout(this.limitMouseMove);
			}
			this.limitMouseMove = setTimeout(() => {
				const positionAttribute = this.line.geometry.getAttribute('position');
				this.x = this.width * (event.clientX / WINDOWS_WIDTH - 0.5);
				this.y = this.height * (0.5 - event.clientY / WINDOWS_HEIGHT);
				for (let i = 0; i < positionAttribute.count; i++) {
					if (
						positionAttribute.original[1 + i * 3] > this.y - 10 &&
						positionAttribute.original[1 + i * 3] < this.y + 10 &&
						positionAttribute.original[0 + i * 3] > this.x - 10 &&
						positionAttribute.original[0 + i * 3] < this.x + 10
					) {
						if (!this.line.indexToMove.includes(i)) {
							const index = this.line.indexToReturn.indexOf(i);
							if (index !== -1) {
								this.line.indexToReturn.splice(index, 1);
							}
							this.line.indexToMove.push(i);
						}
					} else {
						if (
							this.line.indexToMove.includes(i) &&
							!this.line.indexToReturn.includes(i)
						) {
							const index = this.line.indexToMove.indexOf(i);
							if (index !== -1) {
								this.line.indexToMove.splice(index, 1);
							}
							this.line.indexToReturn.push(i);
						}
					}
				}

				this.backgroundMaterial.uniforms.uMouse.value.x =
					event.clientX / WINDOWS_WIDTH;
				this.backgroundMaterial.uniforms.uMouse.value.y =
					1.0 - event.clientY / WINDOWS_HEIGHT;
				this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
				this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			}, 2); // Reduce the number of call to the calculation
		}
	}
};
</script>
<style src="../assets/less/about.less"></style>
