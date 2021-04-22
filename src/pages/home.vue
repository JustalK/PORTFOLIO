<template>
	<div
		id="HOME"
		ref="home"
		:class="{mounted: mounted, pointer: pointer, move_to_three: move_to_three, invisible: invisible_parent, locked: locked}">
		<div class="border" />
		<components_music
			:is_music_active="is_music_active"
			:invisible="invisible"
			@toggle_music="toggle_music" />
		<div
			:class="{panel: true, active: go_zoom}">
			<components_introduction
				:props_introduction="props_introduction"
				:animation_introduction="animation_introduction"
				@click="move_to_page"
				@hover_big="play_hover_menu_sound"
				@hover_small="play_hover_small_menu_sound" />
		</div>
	</div>
</template>
<script>
import music from '../components/main/music';
import introduction from '../components/introduction';
import api from '../services/api';
import utils from '../helper/utils.js';
import helper_meta from '../helper/meta.js';
import * as THREE from '../libs/three.js';

const ABSCISSA = ['x','y','z'];
const FOV = 50;
const MAX_DISTANCE_HOVER = 7000;
const WINDOWS_WIDTH = window.innerWidth;
const WINDOWS_HEIGHT = window.innerHeight;
const WIREFRAME_COLOR = 0x61C3FF;
const WIREFRAME_COLOR_HOVER = 0x001d2e;
const BUTTON_COLOR = '#FFFFFF';
const BUTTON_COLOR_HOVER = '#327DFF';
const BOARD_COLOR = 0x0a2234;
const DEFAULT_MOVEMENT_CAMERA_SPEED = 1;
const DEFAULT_ROTATION_CAMERA_SPEED = 1;
const	CAMERA_START_POSITION_X = 0;
const	CAMERA_START_POSITION_Y = -380;
const	CAMERA_START_POSITION_Z = 8500;
const	CAMERA_START_ROTATION_X = 0;
const	CAMERA_START_ROTATION_Y = 0;
const	CAMERA_START_ROTATION_Z = 0;
const LIGHT_AMBIANT_COLOR = 0xFFFFFF;
const DEFAULT_ROTATION_PERPETUAL_X = 0.001;
const DEFAULT_ROTATION_PERPETUAL_Y = 0.002;
const DEFAULT_ROTATION_PERPETUAL_X_START = 0;
const DEFAULT_ROTATION_PERPETUAL_Y_START = 0;
const DEFAULT_ROTATION_PERPETUAL_X_AMPLITUDE = 20;
const DEFAULT_ROTATION_PERPETUAL_Y_AMPLITUDE = 15;
const DEFAULT_ROTATION_PERPETUAL_X_SPEED = 100;
const DEFAULT_ROTATION_PERPETUAL_Y_SPEED = 200;
const TOTAL_PARTICLES = 500;
const CLUSTER_PARTICLES = 8;
const ROTATION_SPEED_PARTICLES = 0.0002;
const FOG_POWER = 0.0003;
const framerate = 1000/60;
const extrudeSettings = { amount: 10, bevelEnabled: true, bevelSegments: 1, steps: 2, bevelSize: 3, bevelThickness: 3 };
const TEXTURE_BUTTON_BACK = '../assets/imgs/back.png';
const TEXTURE_BUTTON_VISIT = '../assets/imgs/visit.png';

export default {
	components: {
		components_introduction: introduction,
		components_music: music
	},
	metaInfo() {
		return helper_meta.get_meta(this.$route.name, this.meta_title, this.meta_description);
	},
	data: () => {
		return {
			meta_title: '',
			meta_description: '',
			camera: null,
			scene: null,
			renderer: null,
			delta: null,
			clock: null,
			raycaster: null,
			parent: null,
			animation: true,
			animation_introduction: false,
			is_music_active: true,
			last_parent_hover: null,
			is_true_darkness_allowed: false,
			particleSystem: [],
			positionReached: [false,false,false],
			rotationReached: [false,false,false],
			triangleHover: [],
			objectInteraction: [],
			groupScene: [],
			zoomIn: false,
			zoomOn: null,
			eventSoundListener: null,
			eventSoundActive: false,
			ambientSoundListener: null,
			movementCamera: false,
			movements: [0,0,0],
			rotation: [0,0,0],
			positionFinal: [0,0,0],
			rotationFinal: [0,0,0],
			speedTranslation: [0,0,0],
			speedRotation: [0,0,0],
			mouse: { x: 0, y: 0 },
			go_open_door: false,
			go_3D: false,
			go_zoom: false,
			props_introduction: {},
			invisible: true,
			invisible_parent: false,
			pointer: false,
			mounted: false,
			move_to_three: false,
			locked: false,
			props_links: [
				{name: 'Portfolio', link: 'portfolio', side: 'left'},
				{name: 'Resume', link: 'resume', side: 'right'}
			]
		};
	},
	async mounted() {
		// Put the meta data for the page
		const page = await api.get_pages(this.$route.name);
		if (page.length > 0) {
			this.meta_title = page[0].meta_title;
			this.meta_description = page[0].meta_description;
		}

		// Initialize the three js
		this.init();

		await this.get_my_identity();

		setTimeout(() => {
			this.mounted = true;
		}, 200);

		setTimeout(() => {
			this.invisible = false;
			this.eventSoundActive = true;
			this.play_ambient_sound();
			setTimeout(() => {
				this.animation_introduction = true;
			}, 2000);
		}, 1000);
	},
	methods: {
		init() {
			this.initCamera();
			this.initScene();
			this.initLight(LIGHT_AMBIANT_COLOR);
			this.initClock();
			this.initFog(true);
			this.initSoundListener();
			this.initRaycaster();
			this.createWorld();
			this.renderWebGL();

			this.$refs.home.appendChild(this.renderer.domElement);
			this.loadProjectsTextures();

			this.animate();

			window.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
			window.addEventListener( 'mousedown', this.onDocumentMouseDown, false );
			window.addEventListener( 'resize', this.onWindowResize, false );
		},
		initCamera() {
			this.camera = new THREE.PerspectiveCamera( FOV, WINDOWS_WIDTH / WINDOWS_HEIGHT, 1, 7500 );
			this.camera.position.set(CAMERA_START_POSITION_X,CAMERA_START_POSITION_Y,CAMERA_START_POSITION_Z);
			this.camera.rotation.set(CAMERA_START_ROTATION_X,CAMERA_START_ROTATION_Y,CAMERA_START_ROTATION_Z);
		},
		initScene() {
			this.scene = new THREE.Scene();
		},
		renderWebGL() {
			this.renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
			this.renderer.setPixelRatio( window.devicePixelRatio );
			this.renderer.setSize( window.innerWidth, window.innerHeight );
			this.renderer.gammaInput = true;
			this.renderer.gammaOutput = true;
			this.renderer.powerPreference = 'high-performance';
			this.renderer.setClearColor( 0x000000, 0 );
		},
		initLight(color) {
			this.scene.add(new THREE.AmbientLight(color,0.8));
			const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
			light.position.set(0,0,8000);
			this.scene.add( light );
		},
		initClock() {
			this.clock = new THREE.Clock();
			// Set the time to 0
			this.clock.start();
		},
		initFog(fog) {
			if(fog) this.scene.fog = new THREE.FogExp2( 0x2261aa, FOG_POWER );
		},
		/**
		* Create and add the event sound listener to the camera
		**/
		initSoundListener() {
			this.eventSoundListener = new THREE.AudioListener();
			this.ambientSoundListener = new THREE.AudioListener();
			this.camera.add(this.eventSoundListener);
			this.camera.add(this.ambientSoundListener);
		},
		initAmbientSoundListener() {
			this.ambientSoundListener = new THREE.AudioListener();
			this.camera.add(this.ambientSoundListener);
		},
		initRaycaster() {
			this.raycaster = new THREE.Raycaster();
			this.raycaster.setFromCamera( this.mouse, this.camera );
		},
		createWorld() {
			const pMaterial = new THREE.PointsMaterial({
				color: 0x1a82f7,
				size: 30,
				map: new THREE.TextureLoader().load(
					'../assets/imgs/particle.png'
				),
				blending: THREE.AdditiveBlending,
				transparent: true
			});

			const distance = WINDOWS_WIDTH * 15;

			for (let ps = 0; ps < CLUSTER_PARTICLES; ps++) {
				const particles = new THREE.Geometry();
				for (let p = 0; p < TOTAL_PARTICLES; p++) {
					particles.vertices.push(new THREE.Vector3(
						Math.random() * distance - distance / 2,
						Math.random() * distance - distance / 2,
						Math.random() * distance - distance / 2)
					);
				}

				this.particleSystem.push(new THREE.Points(particles, pMaterial));
				this.scene.add(this.particleSystem[ps]);
			}
		},
		animate() {
			if (this.animation) {
				setTimeout(() => {
					requestAnimationFrame(this.animate);
				}, framerate );
				this.renderer.render( this.scene, this.camera );

				this.delta = this.clock.getDelta();
				for (let ps = 0; ps < CLUSTER_PARTICLES; ps++) {
					this.particleSystem[ps].rotation.x += ROTATION_SPEED_PARTICLES * (1 + ps) / 2;
					this.particleSystem[ps].rotation.y += ROTATION_SPEED_PARTICLES * ps;
				}

				for(var i=this.groupScene.length;i--;) {
					this.perpetual(this.groupScene[i]);
				}

				if(this.movementCamera && this.parent!=null) {
					this.pointer = false;
					this.move_to_darkness(this.camera.position.z);
					// If I have not reached the final position on each abcisse
					if(this.isPositionNotReached()) {
						this.moveCameraToBoard();
					} else {
						this.movementCamera=false;
						this.resetPositionReached();
					}
				} else if(!this.movementCamera) {
					this.searchingMatchMouseAndMesh();
				}
			}
		},
		searchingMatchMouseAndMesh() {
			this.raycaster.setFromCamera( this.mouse, this.camera );
			const intersects = this.raycaster.intersectObjects( this.objectInteraction, true );

			if(intersects.length>0) {
				// If the user trying to interact with a new mesh
				if((this.parent==null || this.parent!=intersects[0].object.parent) && this.is_object_close_enough_for_hover(intersects[0].object.parent)) {
					this.pointer = true;
					this.parent = intersects[0].object.parent;

					// If I am hovering a new element different from my zoom
					if(this.parent !== this.last_parent_hover && (!this.zoomIn || (this.zoomOn !== null && this.parent !== this.zoomOn))) {
						// If it's not my first time hovering on something
						if(this.last_parent_hover !== null && this.last_parent_hover !== this.zoomOn) {
							this.change_color_wireframe_childrens(this.last_parent_hover.children, WIREFRAME_COLOR);
							this.change_panel_childrens(this.last_parent_hover.children, 0);
							this.change_button_childrens(this.last_parent_hover.children, 0);
						}

						this.play_hover_sound();
						this.change_color_wireframe_childrens(this.parent.children, WIREFRAME_COLOR_HOVER);
						this.change_panel_childrens(this.parent.children, 1);
						this.change_button_childrens(this.parent.children, 0);

						this.last_parent_hover = this.parent;
					}

					// If I am hovering my zoom, I might want to click on the button inside
					if (this.parent === this.zoomOn) {
						const color_button_visit = intersects[0].object === this.zoomOn.children[0] ? BUTTON_COLOR_HOVER : BUTTON_COLOR;
						const color_button_back = intersects[0].object === this.zoomOn.children[1] ? BUTTON_COLOR_HOVER : BUTTON_COLOR;
						this.change_color_button_childrens(this.zoomOn, color_button_visit, color_button_back);
					}
				}
			} else {
				this.pointer = false;
				this.parent=null;
				if (this.zoomOn) {
					this.change_color_button_childrens(this.zoomOn, BUTTON_COLOR, BUTTON_COLOR);
				}
			}
		},
		change_color_button_childrens(parent, color_button_visit, color_button_back) {
			parent.children[0].material[4].color = new THREE.Color(color_button_visit);
			parent.children[1].material[4].color = new THREE.Color(color_button_back);
		},
		/**
		* Change to affect to panel when hovered
		* @param {object} childrens The list of the children of the board to affect
		* @param {number} opacity The opacity to give to panel
		**/
		change_panel_childrens(childrens, opacity) {
			childrens.filter(children => children['panel']).map(children => {
				children.material[4].opacity = opacity;
			});
		},
		/**
		* Change to affect the button of a board when hovered
		* @param {object} childrens The list of the children of the board to affect
		* @param {number} opacity The opacity to give the button
		**/
		change_button_childrens(childrens, opacity) {
			childrens.filter(children => children['button']).map(children => {
				children.material[4].opacity = opacity;
			});
		},
		/**
		* Change the color of the wireframe by the childrens
		* @param {object} childrens The list of the children of the board to affect
		* @param {string} color The color to affect to the wireframe
		**/
		change_color_wireframe_childrens(childrens, color) {
			childrens.filter(children => children['wireframe']).map(children => {
				children.material.color = new THREE.Color(color);
			});
		},
		/**
		* Check if the board is too far from being hover
		* @param {Object} board the board to check
		* @return True if the board is in a good distance or else false
		**/
		is_object_close_enough_for_hover(board) {
			return board.position.z > this.camera.position.z - MAX_DISTANCE_HOVER;
		},
		play_ambient_sound() {
			if (this.ambientSoundListener.context.state === 'suspended') {
				this.ambientSoundListener.context.resume();
			}
			this.play_sound(this.ambientSoundListener, '../assets/sounds/ambient.mp3', 1, true);
		},
		/**
		* Play a sound when you hover on an object
		**/
		play_hover_sound() {
			this.play_sound(this.eventSoundListener, '../assets/sounds/hover.wav', 0.42);
		},
		/**
		* Play a sound when you hover on a big menu
		**/
		play_hover_menu_sound() {
			this.play_sound(this.eventSoundListener, '../assets/sounds/hover_menu.mp3', 0.25);
		},
		/**
		* Play a sound when you hover on a small menu
		**/
		play_hover_small_menu_sound() {
			this.play_sound(this.eventSoundListener, '../assets/sounds/hover_small_menu.mp3', 0.12);
		},
		/**
		* Play a sound when you click on an object
		**/
		play_click_sound() {
			this.play_sound(this.eventSoundListener, '../assets/sounds/click.wav', 0.85);
		},
		/**
		* Play a sound on the event sound listener with a certain volume
		* @param {String} path_sound The path of the sound
		* @param {Number} volume The volume of the sound to be played
		**/
		play_sound(listener, path_sound, volume, loop = false) {
			if (listener === this.eventSoundListener && !this.is_music_active) {
				return;
			}

			if(!listener.isPlaying && this.eventSoundActive) {
				const sound = new THREE.Audio(listener);
				const audioLoader = new THREE.AudioLoader();
				audioLoader.load(path_sound, buffer => {
					sound.setBuffer(buffer);
					sound.setVolume(volume);
					sound.setLoop(loop);
					sound.play();
				});
			}
		},
		/**
		* Pausing the ambiant sound when visiting other pages
		**/
		pausing_ambient_sound() {
			const time_for_pausing_in_seconds = 1500;
			this.reducing_ambient_sound(100, time_for_pausing_in_seconds);
			setTimeout(() => {
				this.ambientSoundListener.context.suspend();
			}, time_for_pausing_in_seconds);
		},
		/**
		* Reduce the volume of the ambiant sound slowly by reducing the volume
		* @param {Number} tick the number of part for reducing
		* @param {Number} time The time in second for reaching the volume 0
		**/
		reducing_ambient_sound(tick, time) {
			const tick_value = time / tick;
			const reducer = setInterval(() => {
				const volume = this.ambientSoundListener.getMasterVolume();
				const reduced_volume = Math.max(volume - tick_value / time, 0);
				this.ambientSoundListener.setMasterVolume(reduced_volume);
				if (reduced_volume <= 0) {
					clearInterval(reducer);
				}
			}, tick_value);
		},
		/**
		* Increase the volume of the ambiant sound slowly by increasing the volume
		* @param {Number} tick the number of part for increasing
		* @param {Number} time The time in second for increasing the volume 0
		**/
		increasing_ambient_sound(tick, time) {
			const tick_value = time / tick;
			const reducer = setInterval(() => {
				const volume = this.ambientSoundListener.getMasterVolume();
				const reduced_volume = Math.min(volume + tick_value / time, 1);
				this.ambientSoundListener.setMasterVolume(reduced_volume);
				if (reduced_volume >= 1) {
					clearInterval(reducer);
				}
			}, tick_value);
		},
		moveCameraToBoard() {
			for(var i=this.movements.length;i--;) {
				if(this.isMoveCameraTo(this.movements[i], this.camera.position.getComponent(i), this.positionFinal[i])) {
					const add = this.delta * this.movements[i] * this.speedTranslation[i];
					const position_perfected = this.movements[i] > 0 ?
						Math.min(this.camera.position.getComponent(i) + add, this.positionFinal[i]) :
						Math.max(this.camera.position.getComponent(i) + add, this.positionFinal[i]);
					this.camera.position.setComponent(i, position_perfected);
				} else {
					this.positionReached[i] = true;
				}
				if(this.isMoveCameraTo(this.rotation[i], this.camera.rotation.toVector3().getComponent(i), this.rotationFinal[i])) {
					const add = this.delta * this.rotation[i] * this.speedRotation[i];
					const rotation_perfected = this.rotation[i] > 0 ?
						Math.min(this.camera.rotation.toVector3().getComponent(i) + add, this.rotationFinal[i]) :
						Math.max(this.camera.rotation.toVector3().getComponent(i) + add, this.rotationFinal[i]);
					this.camera.rotation[ABSCISSA[i]] = rotation_perfected;
				} else {
					this.rotationReached[i] = true;
				}
			}
		},
		isMoveCameraTo(movement, cameraPosition, finalDestination) {
			return (movement > 0 && cameraPosition < finalDestination) || (movement < 0 && cameraPosition > finalDestination);
		},
		isPositionNotReached() {
			for(var i=ABSCISSA.length;i--;) {
				if(!this.positionReached[i] || !this.rotationReached[i]) return true;
			}
			return false;
		},
		resetPositionReached() {
			this.positionReached = [false,false,false];
			this.rotationReached = [false,false,false];
			if(!this.zoomIn) {
				this.move_to_three = false;
				this.last_parent_hover = null;
				this.parent = null;
				this.animation_introduction = true;
			}
		},
		perpetual(board) {
			board.rotation.x = (this.radians(DEFAULT_ROTATION_PERPETUAL_X_START) + Math.cos(this.clock.elapsedTime*DEFAULT_ROTATION_PERPETUAL_X_SPEED * DEFAULT_ROTATION_PERPETUAL_X) * this.radians(DEFAULT_ROTATION_PERPETUAL_X_AMPLITUDE));
			board.rotation.y = (this.radians(DEFAULT_ROTATION_PERPETUAL_Y_START) + Math.cos(this.clock.elapsedTime*DEFAULT_ROTATION_PERPETUAL_Y_SPEED * DEFAULT_ROTATION_PERPETUAL_Y + 300) * this.radians(DEFAULT_ROTATION_PERPETUAL_Y_AMPLITUDE));
		},
		onDocumentMouseMove(event) {
			this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
		},
		onWindowResize() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
		},
		createBoard(slug, x, y, z, rz) {
			const boardTmp = new THREE.Group();

			// Construct the mesh piece by piece
			const piece = [];
			//piece.push(this.createSideBoard(-160,0,0,0,0,0));
			//piece.push(this.createSideBoard(140,0,10,0,Math.PI,0));
			piece.push(this.createSideWireframe(-160,0,0,0,0,0));
			piece.push(this.createSideWireframe(140,0,10,0,Math.PI,0));
			piece.push(this.createCenterWireframe(-10, 50, 4, 0, 0, 0));
			piece.push(this.createCenterBoard(-10,50,8));
			piece.push(this.createPanel(140, 40, 1, -10, 150, 8, 'panel'));
			// The back button has to be the 7th mesh because of the return implementation
			piece.push(this.createPanelWithTexture(null, 128, 64, 1, 80, -60, 8, 'button'));
			piece.push(this.createPanelWithTexture(null, 128, 64, 1, -80, -60, 8, 'button'));


			// Add the differents parts to the group of meshes
			for(var i=piece.length;i--;) {
				boardTmp.add(piece[i]);
			}

			// Add each mesh to the objectInteract for letting the user play with them
			for(i=piece.length;i--;) {
				this.objectInteraction.push(piece[i]);
			}

			// Value for the perpetual movement
			const distance = WINDOWS_WIDTH < 768 ? 1000 : 600;
			boardTmp['translationx'] = x;
			boardTmp['translationy'] = y;
			boardTmp['translationz'] = z + distance;
			boardTmp['rotationx'] = 0;
			boardTmp['rotationy'] = 0;
			boardTmp['rotationz'] = rz;
			boardTmp['lock'] = false;
			boardTmp['slug'] = slug;

			// Position of the board in the scene
			boardTmp.position.set(x,y,z);
			boardTmp.rotation.set(0, 0, rz);

			return boardTmp;
		},
		createSideBoard(x,y,z,rx,ry,rz) {
			const materialBoard = new THREE.MeshPhongMaterial( {  color: BOARD_COLOR } );
			const geometryBoard = new THREE.ExtrudeGeometry( this.createShape(), extrudeSettings );
			const sideMesh = new THREE.Mesh( geometryBoard, materialBoard );

			sideMesh.position.set( x, y, z );
			sideMesh.rotation.set( rx, ry, rz );
			return sideMesh;
		},
		createShape() {
			const leftShape = new THREE.Shape();
			leftShape.moveTo( -5, -40 );
			leftShape.lineTo( 0, 15 );
			leftShape.lineTo( 10, 25 );
			leftShape.lineTo( 10, 70 );
			leftShape.lineTo( 0, 80 );
			leftShape.lineTo( -5, 130 );
			leftShape.lineTo( 40, 120 );
			leftShape.lineTo( 45, 115 );
			leftShape.lineTo( 25, 115 );
			leftShape.lineTo( 20, 110 );
			leftShape.lineTo( 20, -10 );
			leftShape.lineTo( 25, -15 );
			leftShape.lineTo( 45, -15 );
			leftShape.lineTo( 40, -20 );
			return leftShape;
		},
		createCenterBoard(x,y,z) {
			const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
			const centerMesh =  new THREE.Mesh( new THREE.BoxBufferGeometry( 256, 128, 1 ),  [0,0,0,0,material,0] );
			centerMesh.position.set(x,y,z);
			return centerMesh;
		},
		createPanel(sx,sy,sz,x,y,z, category) {
			return this.createPanelWithTexture(null,sx,sy,sz,x,y,z, category);
		},
		createPanelWithTexture(texture,sx,sy,sz,x,y,z, category) {
			const material = new THREE.MeshBasicMaterial( { map: texture, transparent: true, opacity: 0 } );
			const informationsMesh =  new THREE.Mesh( new THREE.BoxBufferGeometry( sx, sy, sz ), [0,0,0,0,material,0] );
			informationsMesh.position.set(x,y,z);
			informationsMesh[category] = true;
			return informationsMesh;
		},
		createSideWireframe(x,y,z,rx,ry,rz) {
			const geometryBoard = new THREE.ExtrudeGeometry( this.createShape(), extrudeSettings );
			const material = new THREE.LineBasicMaterial( { color: WIREFRAME_COLOR, linewidth: 1 } );
			const sideWireframe = new THREE.LineSegments( new THREE.EdgesGeometry( geometryBoard ), material );
			sideWireframe['wireframe'] = true;
			sideWireframe.position.set( x, y, z );
			sideWireframe.rotation.set( rx, ry, rz );
			return sideWireframe;
		},
		createCenterWireframe(x,y,z,rx,ry,rz) {
			const geometryBoard = new THREE.BoxBufferGeometry( 250, 128, 1 );
			const material = new THREE.LineBasicMaterial( { color: WIREFRAME_COLOR, linewidth: 4 } );
			const sideWireframe = new THREE.LineSegments( new THREE.EdgesGeometry( geometryBoard ), material );
			sideWireframe['wireframe'] = true;
			sideWireframe.position.set( x, y, z );
			sideWireframe.rotation.set( rx, ry, rz );
			return sideWireframe;
		},
		onDocumentMouseDown() {
			this.raycaster.setFromCamera( this.mouse, this.camera );
			const intersects = this.raycaster.intersectObjects( this.objectInteraction, true );

			if(!this.movementCamera && intersects.length>0) {
				// Useful for the mobile version
				// since mobile does not have a mousehover, at the first click I need to set up the parent
				if (!this.parent) {
					this.parent = intersects[0].object.parent;
				}

				// If I am interacting with the back object of the board I am zooming on
				if(this.zoomOn !== null && intersects[0].object==this.zoomOn.children[1]) {
					this.backToStart();
					return true;
				}

				// If the user is interacting with the visit button I am zooming on
				if(this.zoomOn !== null && intersects[0].object==this.zoomOn.children[0]) {
					this.move_to_slug(this.zoomOn['slug']);
					return true;
				}

				// If I'm on a board, I move to the new position
				if(!this.parent['lock']) {
					this.move_to_three = true;
					this.animation_introduction = false;
					this.play_click_sound();
					for(var i=ABSCISSA.length;i--;) {
						this.positionFinal[i] = this.parent['translation'+ABSCISSA[i]];
						this.rotationFinal[i] = this.parent['rotation'+ABSCISSA[i]];
						this.positionReached[i] = false;
					}
					this.movementCamera = true;
					if (this.zoomOn) {
						this.change_panel_childrens(this.zoomOn.children, 0);
						this.change_button_childrens(this.zoomOn.children, 0);
					}
					this.zoomOn = this.parent;
					this.zoomIn = true;
					this.getSpeedMovement();
					this.getMovementWay();
					this.parent['lock'] = true;
					this.change_color_wireframe_childrens(this.parent.children, WIREFRAME_COLOR);
					this.change_button_childrens(this.zoomOn.children, 1);
					this.change_color_button_childrens(this.zoomOn, BUTTON_COLOR, BUTTON_COLOR);
					return true;
				}
			}
		},
		/**
		* Add a mask for making the background darker when we go deep into the ocean
		* @param {Number} position_z The z position of the user
		**/
		move_to_darkness(position_z) {
			this.renderer.setClearColor( 0x000000, this.is_true_darkness_allowed ? Math.min(Math.abs(1 - position_z / CAMERA_START_POSITION_Z), 1) : Math.min(1 - position_z / CAMERA_START_POSITION_Z, 0.8) );
		},
		loadProjectsTextures() {
			this.groupScene.push(this.createBoard('portfolio',-450, 90, 6600, this.radians(20)));
			this.groupScene.push(this.createBoard('my-sweet-diane', -400, 1000, 2600, this.radians(120)));
			this.groupScene.push(this.createBoard('manypixels', 600, 300, 4000, this.radians(45)));
			this.groupScene.push(this.createBoard('rumarocket', 1800, 1800, 1000, this.radians(-60)));
			this.groupScene.push(this.createBoard('labonapp', 200, 2500, 2400, this.radians(30)));
			this.groupScene.push(this.createBoard('onarto', 1400, 1000, 2400, this.radians(-70)));
			this.groupScene.push(this.createBoard('atlantic-grains', 600, 500, -600, this.radians(-60)));
			this.groupScene.push(this.createBoard('portfolio-app', 1300, 1300, -1500, this.radians(30)));

			for(var i=this.groupScene.length;i--;) {
				this.scene.add(this.groupScene[i]);
			}

			for(let j=0,countI=this.groupScene.length;j<countI;j++) {
				const texture = new THREE.TextureLoader().load( this.get_path_texture_by_slug(this.groupScene[j].slug) );
				const material_visit = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load(TEXTURE_BUTTON_VISIT), transparent: true, opacity: 0 } );
				const material_back = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load(TEXTURE_BUTTON_BACK), transparent: true, opacity: 0 } );
				const material_title = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load(this.get_path_title_by_slug(this.groupScene[j].slug)), transparent: true, opacity: j === 0 ? 1 : 0 } );
				const material = new THREE.MeshBasicMaterial( { map: texture } );
				this.groupScene[j].children[0].material = [0,0,0,0,material_visit,0];
				this.groupScene[j].children[1].material = [0,0,0,0,material_back,0];
				this.groupScene[j].children[2].material = [0,0,0,0,material_title,0];
				this.groupScene[j].children[3].material[4] = material;
			}
		},
		get_path_texture_by_slug(slug) {
			return `../assets/imgs/${slug}/home.jpg`;
		},
		get_path_title_by_slug(slug) {
			return `../assets/imgs/${slug}/title.png`;
		},
		getSpeedMovement() {
			for(var i=ABSCISSA.length;i--;) {
				this.speedTranslation[i] = Math.abs(this.camera.position.getComponent(i) - this.positionFinal[i])*DEFAULT_MOVEMENT_CAMERA_SPEED;
				this.speedRotation[i] = Math.abs(this.camera.rotation.toVector3().getComponent(i) - this.rotationFinal[i])*DEFAULT_ROTATION_CAMERA_SPEED;
			}
		},
		getMovementWay() {
			for(var i=ABSCISSA.length;i--;) {
				this.movements[i] = this.camera.position.getComponent(i) > this.positionFinal[i] ? -1 : 1;
				this.rotation[i] = this.camera.rotation.toVector3().getComponent(i) > this.rotationFinal[i] ? -1 : 1;
			}
		},
		backToStart() {
			this.positionFinal[0] = CAMERA_START_POSITION_X;
			this.positionFinal[1] = CAMERA_START_POSITION_Y;
			this.positionFinal[2] = CAMERA_START_POSITION_Z;
			this.rotationFinal[0] = CAMERA_START_ROTATION_X;
			this.rotationFinal[1] = CAMERA_START_ROTATION_Y;
			this.rotationFinal[2] = CAMERA_START_ROTATION_Z;
			for(var i=this.groupScene.length;i--;) {
				this.groupScene[i]['lock'] = false;
			}
			this.movementCamera = true;
			this.change_panel_childrens(this.zoomOn.children, 0);
			this.change_button_childrens(this.zoomOn.children, 0);
			this.zoomOn = null;
			this.zoomIn = false;
			this.getSpeedMovement();
			this.getMovementWay();
		},
		/**
    * Move the camera for switching to a new page
    **/
		move_camera_new_page(z, speed) {
			this.animation_introduction = false;
			this.positionFinal[2] = z;
			this.positionReached = [true, true, false];
			this.rotationReached = [true, true, true];
			for(var i=this.groupScene.length;i--;) {
				this.groupScene[i]['lock'] = false;
			}
			this.zoomOn = null;
			this.zoomIn = false;
			this.parent = true;
			this.getSpeedMovement();
			this.speedTranslation[2] = speed;
			this.getMovementWay();
			this.movementCamera = true;
		},
		move_to_page(page, ref) {
			if (!this.locked) {
				this.locked = true;
				this.animation_introduction = false;
				utils.add_class_to_element(ref, 'invisible');
				this.invisible_parent = true;
				this.is_true_darkness_allowed = true;
				this.move_camera_new_page(-10000, 7000);
				setTimeout(() => {
					this.pausing_ambient_sound();
				}, 500);
				setTimeout(() => {
					this.$router.push({name: page});
					this.animation = false;
				}, 2200);
			}
		},
		/**
		* Move the user to the slug page of the project
		* @param {string} slug The slug of the page we want to go
		**/
		async move_to_slug(slug) {
			if (!this.locked) {
				this.locked = true;
				this.animation_introduction = false;
				this.invisible_parent = true;
				this.is_true_darkness_allowed = true;
				this.move_camera_new_page(20000, 10000);
				const tags = await api.get_tags();
				const project = await api.get_project_by_slug(slug);
				setTimeout(() => {
					this.pausing_ambient_sound();
				}, 500);
				setTimeout(() => {
					this.$router.push({ name: 'project', params: {slug: slug, project, tags, is_animated: true}});
					this.animation = false;
				}, 2000);
			}
		},
		async get_my_identity() {
			const my_identity = await api.get_my_identity();
			const image_path = my_identity.image !== null ? my_identity.image_alternative.path : null;
			this.update_introduction(my_identity.fullname, my_identity.email, image_path, my_identity.android_url, my_identity.github_url);
		},
		update_introduction(name, email, image, android_url, github_url) {
			this.props_introduction = {
				name,
				email,
				image,
				android_url,
				github_url
			};
		},
		toggle_music() {
			this.is_music_active = !this.is_music_active;
			if (this.is_music_active) {
				this.increasing_ambient_sound(100, 2000);
			} else {
				this.reducing_ambient_sound(100, 1000);
			}
		},
		radians(degrees) {
			return degrees * Math.PI / 180;
		}
	}
};
</script>
<style src="../assets/less/home.less"></style>
