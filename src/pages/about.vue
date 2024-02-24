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
			height: 0
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

			/**
			const curve = new THREE.SplineCurve([
				new THREE.Vector2(-width, 0),
				new THREE.Vector2(-50, 50),
				new THREE.Vector2(50, -50),
				new THREE.Vector2(width, 0)
			]);

			const points = curve.getPoints(50);
			const geometry5 = new THREE.BufferGeometry().setFromPoints(points);

			const material5 = new THREE.LineBasicMaterial({ color: 0xff0000 });

			// Create the final object to add to the scene
			const splineObject = new THREE.Line(geometry5, material5);
			this.scene.add(splineObject);

			this.createCube(25, 25, 0x001d2e);
			this.createCube(-25, -25, 0x005c94);
			this.createCube(-25, 25, 0x009bfa);
			this.createCube(25, -25, 0x61c3ff);
			**/
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
			const curve = new THREE.SplineCurve([
				new THREE.Vector2(-this.width, 0),
				new THREE.Vector2(-50, 50),
				new THREE.Vector2(50, -50),
				new THREE.Vector2(this.width, 0)
			]);

			const points = curve.getPoints(50);
			const geometry5 = new THREE.BufferGeometry().setFromPoints(points);

			const material5 = new THREE.LineBasicMaterial({ color: 0xff0000 });

			// Create the final object to add to the scene
			const splineObject = new THREE.Line(geometry5, material5);
			const positionAttribute = splineObject.geometry.getAttribute( 'position' );
			splineObject.geometry.attributes.position.original = [...positionAttribute.array];
			splineObject.name = 'line';
			this.scene.add(splineObject);
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
			
			requestAnimationFrame(this.animate);
			this.delta += this.clock.getDelta();


			if (this.delta  > 1 / 60) {
				const line = this.scene.getObjectByName('line');
				const positionAttribute = line.geometry.getAttribute( 'position' );

				// let x = 0, y = 0, z = 0;
				/**
				let y = 0;
				for ( let i = 0; i < positionAttribute.count; i ++ ) {
					positionAttribute.setXYZ( i, positionAttribute.array[0 + i*3], y, positionAttribute.array[2 + i*3] );

					// x += ( Math.random() - 0.5 ) * 30;
					if (i < positionAttribute.count) {
						y = positionAttribute.array[1 + (i+1)*3] > 0 ? positionAttribute.array[1 + (i+1)*3] + 0.05 : positionAttribute.array[1 + (i+1)*3] - 0.05;
					}
					// z += ( Math.random() - 0.5 ) * 30;
					
				}
				*/

				positionAttribute.needsUpdate = true;

				// line.geometry.computeBoundingBox();
				// line.geometry.computeBoundingSphere();

				this.backgroundMaterial.uniforms.uTime.value =
					this.clock.getElapsedTime();

				if (this.camera.position.z < 100) {
					this.camera.position.z += SPEED_LOGO;
					this.camera.original.position.z = this.camera.position.z;
				}
				//this.originalCube.position.z -= SPEED_LOGO;

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
			const line = this.scene.getObjectByName('line');
			const positionAttribute = line.geometry.getAttribute( 'position' );
			const x = (this.width) * ((event.clientX / WINDOWS_WIDTH) - 0.5);
			const y = (this.height) * (0.5 - event.clientY / WINDOWS_HEIGHT);
			for ( let i = 0; i < positionAttribute.count; i ++ ) {
				if (positionAttribute.original[1 + i*3] > y - 10 && positionAttribute.original[1 + i*3] < y + 10 && positionAttribute.original[0 + i*3] > x - 10 && positionAttribute.original[0 + i*3] < x + 10) {
					positionAttribute.setXYZ( i, positionAttribute.original[0 + i*3], (this.height) * (0.5 - event.clientY / WINDOWS_HEIGHT), 0 );
				} else {
					positionAttribute.setXYZ( i, positionAttribute.original[0 + i*3], positionAttribute.original[1 + i*3], 0 );
				}
			}

			this.backgroundMaterial.uniforms.uMouse.value.x =
				event.clientX / WINDOWS_WIDTH;
			this.backgroundMaterial.uniforms.uMouse.value.y =
				1.0 - event.clientY / WINDOWS_HEIGHT;
		}
	}
};
</script>
<style src="../assets/less/about.less"></style>
