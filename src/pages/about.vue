<template>
	<div id="ABOUT" ref="about" />
</template>
<script>
import * as THREE from 'three';
import { getWidthAndHeight } from '../helper/utils';
import FogMaterial from '../materials/fog';

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
			delta: 0,
			clock: null,
			width: 0,
			height: 0,
			line: null,
			x: 0,
			y: 0,
			limitMouseMove: null,
			isFirstAnimation: true
		};
	},
	async mounted() {
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
			this.createWorld();
			this.renderWebGL();

			this.$refs.about.appendChild(this.renderer.domElement);

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
		createWorld() {
			this.createBackground();
			this.createLine();
			this.createPhoto();
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
				new THREE.Vector2(-this.width/2 - borderOffset, 50),
				new THREE.Vector2(-50, 50),
				new THREE.Vector2(50, -50),
				new THREE.Vector2(this.width/2 + borderOffset, -50)
			]);

			const points = curve.getPoints(100);
			const geometry = new THREE.BufferGeometry().setFromPoints(points);

			const material = new THREE.LineBasicMaterial({ color: 0x0099ff, transparent: true, opacity: 0 });

			// Create the final object to add to the scene
			const splineObject = new THREE.Line(geometry, material);
			const positionAttribute = splineObject.geometry.getAttribute( 'position' );
			splineObject.geometry.attributes.position.original = [...positionAttribute.array];
			splineObject.indexToMove = [];
			splineObject.indexToReturn = [];
			splineObject.name = 'line';
			this.line = splineObject;
			this.scene.add(splineObject);
		},
		createPhoto() {
			const geometry = new THREE.PlaneGeometry(this.width * 20/100, this.height/2);
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const photo = new THREE.Mesh(geometry, material);
			photo.name = 'photo';
			photo.position.z = 0.01;
			this.scene.add(photo);
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
			
			if (this.line.material.opacity === 1) {
				this.isFirstAnimation = false;
			}
		},
		animate() {
			requestAnimationFrame(this.animate);
			this.delta += this.clock.getDelta();

			if (this.delta  > 1 / 60) {
				if (this.isFirstAnimation && this.clock.getElapsedTime() > 2) {
					this.startAnimation();
				}

				const positionAttribute = this.line.geometry.getAttribute( 'position' );

				for (const index of this.line.indexToMove) {
					const px = positionAttribute.array[0 + index*3] > this.x ? Math.max(positionAttribute.array[0 + index*3] - 0.5, this.x) : Math.min(positionAttribute.array[0 + index*3] + 0.5, this.x);
					const py = positionAttribute.array[1 + index*3] > this.y ? Math.max(positionAttribute.array[1 + index*3] - 0.5, this.y) : Math.min(positionAttribute.array[1 + index*3] + 0.5, this.y);
					positionAttribute.setXYZ( index, px, py, 0 );
				}

				for (const [i, index] of this.line.indexToReturn.entries()) {
					const px = positionAttribute.array[0 + index*3] > positionAttribute.original[0 + index*3] ? Math.max(positionAttribute.array[0 + index*3] - 0.8, positionAttribute.original[0 + index*3]) : Math.min(positionAttribute.array[0 + index*3] + 0.8, positionAttribute.original[0 + index*3]);
					const py = positionAttribute.array[1 + index*3] > positionAttribute.original[1 + index*3] ? Math.max(positionAttribute.array[1 + index*3] - 0.8, positionAttribute.original[1 + index*3]) : Math.min(positionAttribute.array[1 + index*3] + 0.8, positionAttribute.original[1 + index*3]);
					positionAttribute.setXYZ( index, px, py, 0 );
					if (positionAttribute.original[0 + index*3] === positionAttribute.array[0 + index*3] && positionAttribute.original[1 + index*3] === positionAttribute.array[1 + index*3]) {
						this.line.indexToReturn.splice(i, 1);
					}
				}

				positionAttribute.needsUpdate = true;

				this.backgroundMaterial.uniforms.uTime.value =
					this.clock.getElapsedTime();

				if (this.camera.position.z < 100) {
					this.camera.position.z += SPEED_LOGO;
					this.camera.original.position.z = this.camera.position.z;
				}

				this.moveCameraTo(this.nextBreakpoint);
				this.renderer.render(this.scene, this.camera);
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
				const positionAttribute = this.line.geometry.getAttribute( 'position' );
				this.x = (this.width) * ((event.clientX / WINDOWS_WIDTH) - 0.5);
				this.y = (this.height) * (0.5 - event.clientY / WINDOWS_HEIGHT);
				for ( let i = 0; i < positionAttribute.count; i ++ ) {
					if (positionAttribute.original[1 + i*3] > this.y - 10 && positionAttribute.original[1 + i*3] < this.y + 10 && positionAttribute.original[0 + i*3] > this.x - 10 && positionAttribute.original[0 + i*3] < this.x + 10) {
						if (!this.line.indexToMove.includes(i)) {
							const index = this.line.indexToReturn.indexOf(i);
							if (index !== -1) {
								this.line.indexToReturn.splice(index, 1);
							}
							this.line.indexToMove.push(i);
						}
					} else {
						if (this.line.indexToMove.includes(i) && !this.line.indexToReturn.includes(i)) {
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
			}, 2); // Reduce the number of call to the calculation
		}
	}
};
</script>
<style src="../assets/less/about.less"></style>
