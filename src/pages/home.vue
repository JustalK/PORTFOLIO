<template>
	<div
		id="HOME"
		ref="home">
		<components_github
			:invisible="invisible" />
		<div
			:class="{active: go_zoom}">
			<components_introduction_side
				:props_link="props_links[0]"
				:props_introduction="props_introduction"
				:props_go_open_door="go_open_door"
				@zoom="zoom"
				@hovering="hovering" />
			<components_introduction_side
				:props_link="props_links[1]"
				:props_introduction="props_introduction"
				:props_go_open_door="go_open_door"
				@zoom="zoom"
				@hovering="hovering" />
		</div>
	</div>
</template>
<script>
import introduction_side from '../components/introduction/introduction_side';
import github from '../components/main/github';
import api from '../services/api';
import utils from '../helper/utils.js';
import * as THREE from '../libs/three.js';

const ABSCISSA = ['x','y','z'];
const FOV = 50;
const WINDOWS_WIDTH = window.innerWidth;
const WINDOWS_HEIGHT = window.innerHeight;
const WIREFRAME_COLOR = 0x555555;
const WIREFRAME_COLOR_HOVER = 0x000000;
const BOARD_COLOR = 0x0a2234;
const DEFAULT_MOVEMENT_CAMERA_SPEED = 1;
const DEFAULT_ROTATION_CAMERA_SPEED = 1;
const	CAMERA_START_POSITION_X = 0;
const	CAMERA_START_POSITION_Y = 0;
const	CAMERA_START_POSITION_Z = 8000;
const	CAMERA_START_ROTATION_X = 0;
const	CAMERA_START_ROTATION_Y = 0;
const	CAMERA_START_ROTATION_Z = 0;
const BACKGROUND_COLOR = 0x111116;
const LIGHT_AMBIANT_COLOR = 0xFFFFFF;
const TRIANGLE_COLOR = 0x111116;
const TRIANGLE_COLOR_HOVER = 0xFFFFFF;
const DEFAULT_ROTATION_PERPETUAL_X = 0.001;
const DEFAULT_ROTATION_PERPETUAL_Y = 0.002;
const DEFAULT_ROTATION_PERPETUAL_X_START = 0;
const DEFAULT_ROTATION_PERPETUAL_Y_START = 0;
const DEFAULT_ROTATION_PERPETUAL_X_AMPLITUDE = 20;
const DEFAULT_ROTATION_PERPETUAL_Y_AMPLITUDE = 15;
const DEFAULT_ROTATION_PERPETUAL_X_SPEED = 100;
const DEFAULT_ROTATION_PERPETUAL_Y_SPEED = 200;
const FOG_POWER = 0.0002;
const framerate = 1000/60;
const extrudeSettings = { amount: 10, bevelEnabled: true, bevelSegments: 1, steps: 2, bevelSize: 3, bevelThickness: 3 };
const TEXTURE_BUTTON_BACK = '../assets/imgs/back.png';
const TEXTURE_BUTTON_VISIT = '../assets/imgs/visit.png';
const PROJECT_TEXTURE = ['../assets/imgs/portfolio/slide_01.jpg','../assets/imgs/manypixels/home.jpg','../assets/imgs/atlantic-grains/slide_01.jpg','../assets/imgs/labonapp/slide_01.jpg','../assets/imgs/happee/slide_01.jpg','../assets/imgs/rumarocket/slide_01.jpg'];
const PROJECT_TITLE_TEXTURE = ['../assets/imgs/test.png','../assets/imgs/test.png','../assets/imgs/test.png','../assets/imgs/test.png','../assets/imgs/test.png','../assets/imgs/test.png'];

export default {
	components: {
		components_introduction_side: introduction_side,
		components_github: github
	},
	data: () => {
		return {
			camera: null,
			scene: null,
			renderer: null,
			delta: null,
			clock: null,
			raycaster: null,
			parent: null,
			childrens: null,
			particleSystem: null,
			positionReached: [false,false,false],
			rotationReached: [false,false,false],
			triangleHover: [],
			objectInteraction: [],
			groupScene: [],
			zoomIn: false,
			zoomOn: null,
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
			props_links: [
				{name: 'Portfolio', link: 'portfolio', side: 'left'},
				{name: 'Resume', link: 'resume', side: 'right'}
			]
		};
	},
	watch: {
		$route: {
			immediate: true,
			handler() {
				document.title = 'Justal Kevin - Home';
			}
		},
	},
	async mounted() {
		this.init();
		await this.get_my_identity();
		utils.add_class_to_element_delay(this.$refs.home, 'mounted', 200);
		setTimeout(() => {
			this.invisible = false;
		}, 1000);
	},
	methods: {
		init() {
			this.initCamera();
			this.initScene(BACKGROUND_COLOR);
			this.initLight(LIGHT_AMBIANT_COLOR);
			this.initClock();
			this.initFog(false);
			this.initRaycaster();
			this.createWorld();
			this.renderWebGL();

			this.$refs.home.appendChild( this.renderer.domElement );
			this.loadProjectsTextures();

			this.animate();

			window.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
			window.addEventListener( 'resize', this.onWindowResize, false );
			window.addEventListener( 'mousedown', this.onDocumentMouseDown, false );
		},
		initCamera() {
			this.camera = new THREE.PerspectiveCamera( FOV, WINDOWS_WIDTH / WINDOWS_HEIGHT, 1, 15000 );
			this.camera.position.set(CAMERA_START_POSITION_X,CAMERA_START_POSITION_Y,CAMERA_START_POSITION_Z);
			this.camera.rotation.set(CAMERA_START_ROTATION_X,CAMERA_START_ROTATION_Y,CAMERA_START_ROTATION_Z);
		},
		initScene(color) {
			this.scene = new THREE.Scene();
			this.scene.background = new THREE.Color( color );
		},
		renderWebGL() {
			this.renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
			this.renderer.setPixelRatio( window.devicePixelRatio );
			this.renderer.setSize( window.innerWidth, window.innerHeight );
			this.renderer.gammaInput = true;
			this.renderer.gammaOutput = true;
			this.renderer.powerPreference = 'high-performance';
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
			if(fog) this.scene.fog = new THREE.FogExp2( 0x000000, FOG_POWER );
		},
		initRaycaster() {
			this.raycaster = new THREE.Raycaster();
			this.raycaster.setFromCamera( this.mouse, this.camera );
		},
		createWorld() {
			const particleCount = 1800;
			const particles = new THREE.Geometry();
			const pMaterial = new THREE.ParticleBasicMaterial({
				color: 0x7BCDFF,
				size: 100,
				map: THREE.ImageUtils.loadTexture(
					'../assets/imgs/particle.png'
				),
				blending: THREE.AdditiveBlending,
				transparent: true
			});

			for (let p = 0; p < particleCount; p++) {
				particles.vertices.push(new THREE.Vector3(
					Math.random() * 24000 - 12000,
					Math.random() * 24000 - 12000,
					Math.random() * 24000 - 12000)
				);
			}

			this.particleSystem = new THREE.Points(particles, pMaterial);

			this.scene.add(this.particleSystem);
		},
		animate() {
			setTimeout(this.animate, framerate );
			this.renderer.render( this.scene, this.camera );

			this.delta = this.clock.getDelta();
			this.particleSystem.rotation.y += 0.0004;

			for(var i=this.groupScene.length;i--;) {
				this.perpetual(this.groupScene[i]);
			}

			if(this.movementCamera && this.parent!=null) {
				document.body.style.cursor = 'inherit';
				// If I have not reached the final position on each abcisse
				if(this.isPositionNotReached()) {
					this.moveCameraToBoard();
				} else {
					this.movementCamera=false;
					this.resetPositionReached();
				}
			} else {
				this.searchingMatchMouseAndMesh();
			}
		},
		searchingMatchMouseAndMesh() {
			this.raycaster.setFromCamera( this.mouse, this.camera );
			const intersects = this.raycaster.intersectObjects( this.objectInteraction, true );
			const triangleIntersects = this.raycaster.intersectObjects( this.triangleHover, true );

			if(triangleIntersects.length>0) {
				for(var i=this.triangleHover.length;i--;) {
					if(triangleIntersects[0].object==this.triangleHover[i]) {
						this.triangleHover[i].material.color = new THREE.Color(TRIANGLE_COLOR_HOVER);
					} else {
						this.triangleHover[i].material.color = new THREE.Color(TRIANGLE_COLOR);
					}
				}
			} else {
				if(intersects.length>0) {
					// If the user trying to interact with a new mesh
					if(this.parent==null || this.parent!=intersects[0].object.parent) {
						document.body.style.cursor = 'pointer';
						this.parent = intersects[0].object.parent;
						if(this.childrens!=null) {
							if(this.zoomIn==false || (this.zoomOn!=null && this.zoomOn.children!=this.childrens)) {
								for(var x=this.childrens.length;x--;) {
									if(this.childrens[x]['panel']) {
										this.childrens[x].material[4].opacity = 0;
									}
								}
							} else {
								for(var z=this.childrens.length;z--;) {
									if((z==1 || z==0) && intersects[0].object==this.childrens[z]) {
										this.childrens[z].material[4].color = new THREE.Color('#327DFF');
									}
								}
							}
						}
						this.childrens = this.parent.children;
						for(var j=this.childrens.length;j--;) {
							if(this.childrens[j]['wireframe']) {
								this.childrens[j].material.color = new THREE.Color(WIREFRAME_COLOR_HOVER);
							}
							if(this.childrens[j]['panel']) {
								this.childrens[j].material[4].opacity = 1;
							}
						}
					}
				} else {
					document.body.style.cursor = 'inherit';
					if(this.childrens!=null) {
						if(this.zoomIn==false || (this.zoomOn!=null && this.zoomOn.children!=this.childrens)) {
							for(var s=this.childrens.length;s--;) {
								if(this.childrens[s]['wireframe']) {
									this.childrens[s].material.color = new THREE.Color(WIREFRAME_COLOR);
								}
							}
						}
						for(var d=this.childrens.length;d--;) {
							if(d==1 || d==0) this.childrens[d].material[4].color = new THREE.Color('#FFFFFF');
						}
					}
					this.parent=null;
				}
			}
		},
		moveCameraToBoard() {
			for(var i=this.movements.length;i--;) {
				if(this.isMoveCameraTo(this.movements[i], this.camera.position.getComponent(i), this.positionFinal[i])) {
					const add = this.delta * this.movements[i] * this.speedTranslation[i];
					this.camera.position.setComponent(i, this.camera.position.getComponent(i) + add);
				} else {
					this.positionReached[i] = true;
				}
				if(this.isMoveCameraTo(this.rotation[i], this.camera.rotation.toVector3().getComponent(i), this.rotationFinal[i])) {
					const add = this.delta * this.rotation[i] * this.speedRotation[i];
					this.camera.rotation[ABSCISSA[i]] = this.camera.rotation.toVector3().getComponent(i) + add;
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
				utils.remove_class_to_element(this.$refs.home, 'move_to_three');
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
		createBoard(url,x,y,z,rx,ry,rz,translationX,translationY,translationZ,rotationX,rotationY,rotationZ) {
			const boardTmp = new THREE.Group();

			// Construct the mesh piece by piece
			const piece = [];
			piece.push(this.createSideBoard(-160,0,0,0,0,0));
			piece.push(this.createSideBoard(140,0,10,0,Math.PI,0));
			piece.push(this.createSideWireframe(-160,0,0,0,0,0));
			piece.push(this.createSideWireframe(140,0,10,0,Math.PI,0));
			piece.push(this.createCenterWireframe(-10,50,4,0,0,0));
			piece.push(this.createCenterBoard(-10,50,8));
			piece.push(this.createPanel(140, 40, 1,-10,140,8));
			// The back button has to be the 7th mesh because of the return implementation
			piece.push(this.createPanelWithTexture(null,40, 20, 1,20,-40,8));
			piece.push(this.createPanelWithTexture(null,40, 20, 1,-40,-40,8));


			// Add the differents parts to the group of meshes
			for(var i=piece.length;i--;) {
				boardTmp.add(piece[i]);
			}

			// Add each mesh to the objectInteract for letting the user play with them
			for(i=piece.length;i--;) {
				this.objectInteraction.push(piece[i]);
			}

			// Value for the perpetual movement
			boardTmp['translationx'] = translationX;
			boardTmp['translationy'] = translationY;
			boardTmp['translationz'] = translationZ;
			boardTmp['rotationx'] = rotationX;
			boardTmp['rotationy'] = rotationY;
			boardTmp['rotationz'] = rotationZ;
			boardTmp['lock'] = false;
			boardTmp['url'] = url;

			// Position of the board in the scene
			boardTmp.position.set(x,y,z);
			boardTmp.rotation.set(rx,ry,rz);

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
		createPanel(sx,sy,sz,x,y,z) {
			return this.createPanelWithTexture(null,sx,sy,sz,x,y,z);
		},
		createPanelWithTexture(texture,sx,sy,sz,x,y,z) {
			const material = new THREE.MeshBasicMaterial( { map: texture, transparent: true, opacity: 0 } );
			const informationsMesh =  new THREE.Mesh( new THREE.BoxBufferGeometry( sx, sy, sz ), [0,0,0,0,material,0] );
			informationsMesh.position.set(x,y,z);
			informationsMesh['panel'] = true;
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
			const geometryBoard = new THREE.BoxBufferGeometry( 120, 70, 1 );
			const material = new THREE.LineBasicMaterial( { color: WIREFRAME_COLOR, linewidth: 1 } );
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
				if(intersects[0].object==this.childrens[1]) {
					this.backToStart();
					return true;
				}

				// If the user is interacting with the visit button
				if(intersects[0].object==this.childrens[0]) {
					window.open(parent['url']);
					return true;
				}

				// If I'm on a board, I move to the new position
				if(this.parent!=null && !this.parent['lock']) {
					utils.add_class_to_element(this.$refs.home, 'move_to_three');
					for(var i=ABSCISSA.length;i--;) {
						this.positionFinal[i] = this.parent['translation'+ABSCISSA[i]];
						this.rotationFinal[i] = this.parent['rotation'+ABSCISSA[i]];
						this.positionReached[i] = false;
					}
					this.zoomOn = parent;
					this.zoomIn = true;
					this.getSpeedMovement();
					this.getMovementWay();
					this.movementCamera = true;
					this.parent['lock'] = true;
					return true;
				}
			}
		},
		loadProjectsTextures() {
			this.groupScene.push(this.createBoard('https://www.zip-world.fr/',-400, 50,6600,0,0,this.radians(20),-400, 70,7100,0,0,this.radians(20)));
			this.groupScene.push(this.createBoard('http://www.gouters-magiques.com/pro/',-500,1300,2600,0,0,this.radians(50),-500,1300,3000,0,0,this.radians(50)));
			this.groupScene.push(this.createBoard('https://www.hapee.fr/',500,100,4000,0,this.radians(-90),this.radians(-40),500,150,4500,0,0,this.radians(-40)));
			this.groupScene.push(this.createBoard('http://www.promarine-boats.com/',-1600,500,4600,0,0,this.radians(-60),-1550,500,4900,0,0,this.radians(-60)));
			this.groupScene.push(this.createBoard('https://onarto.com/',1800,1800,1000,0,0,this.radians(-60),1800,1800,1500,0,0,this.radians(-60)));
			this.groupScene.push(this.createBoard('http://www.odyssea.info/',2000,250,2400,0,0,this.radians(-70),2000,250,3000,0,0,this.radians(-70)));

			for(var i=this.groupScene.length;i--;) {
				this.scene.add(this.groupScene[i]);
			}

			for(var j=0,countI=this.groupScene.length;j<countI;j++) {
				const texture = new THREE.TextureLoader().load( PROJECT_TEXTURE[j] );
				const material = new THREE.MeshBasicMaterial( { map: texture } );
				this.groupScene[j].children[3].material[4] = material;
			}

			this.loadTexturesOnMove();
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
			this.zoomOn = null;
			this.zoomIn = false;
			this.getSpeedMovement();
			this.getMovementWay();
			this.movementCamera = true;
		},
		loadTexturesOnMove() {
			const material = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load(TEXTURE_BUTTON_BACK), transparent: true, opacity: 1 } );
			const material2 = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load(TEXTURE_BUTTON_VISIT), transparent: true, opacity: 1 } );
			for(var i=0,countI=this.groupScene.length;i<countI;i++) {
				const material3 = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load(PROJECT_TITLE_TEXTURE[i]), transparent: true, opacity: 1 } );
				this.groupScene[i].children[0].material = [0,0,0,0,material2,0];
				this.groupScene[i].children[1].material = [0,0,0,0,material,0];
				this.groupScene[i].children[2].material = [0,0,0,0,material3,0];
			}

			this.childrens = this.groupScene[0].children;
			if(this.childrens!=null) {
				for(var j=this.childrens.length;j--;) {
					if(this.childrens[j]['panel']) {
						this.childrens[j].material[4].opacity = 1;
						const texture = new THREE.TextureLoader().load( PROJECT_TEXTURE[0] );
						const material = new THREE.MeshBasicMaterial( { map: texture } );
						this.childrens[3].material[4] = material;
					}
				}
			}
		},
		zoom() {
			this.go_zoom = true;
			this.go_open_door = true;
			this.invisible = true;
			utils.add_class_to_element(this.$refs.home, 'unmounted');
		},
		hovering(event) {
			if(event) {
				utils.add_class_to_element(this.$refs.home, 'hovering');
			} else {
				utils.remove_class_to_element(this.$refs.home, 'hovering');
			}
		},
		async get_my_identity() {
			const my_identity = await api.get_my_identity();
			const image_path = my_identity.image !== null ? my_identity.image_alternative.path : null;
			this.update_introduction(my_identity.fullname, my_identity.email, image_path, my_identity.android_url);
		},
		update_introduction(name, email, image, android_url) {
			this.props_introduction = {name, email, image, android_url};
		},
		radians(degrees) {
			return degrees * Math.PI / 180;
		}
	}
};
</script>
<style src="../assets/less/home.less"></style>
