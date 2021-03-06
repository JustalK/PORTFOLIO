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

const FOV = 50;
const WINDOWS_WIDTH = window.innerWidth;
const WINDOWS_HEIGHT = window.innerHeight;
const	CAMERA_START_POSITION_X = 0;
const	CAMERA_START_POSITION_Y = 0;
const	CAMERA_START_POSITION_Z = 8000;
const	CAMERA_START_ROTATION_X = 0;
const	CAMERA_START_ROTATION_Y = 0;
const	CAMERA_START_ROTATION_Z = 0;
const BACKGROUND_COLOR = 0x000000;
const LIGHT_AMBIANT_COLOR = 0xFFFFFF;
const TRIANGLE_COLOR = 0x000000;
const TRIANGLE_COLOR_HOVER = 0xFFFFFF;
const FOG_POWER = 0.0002;
const mTriangle = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, wireframe: true });
const fTriangle = new THREE.Face3( 0, 1, 2 );
const framerate = 1000/60;

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
			clock: null,
			raycaster: null,
			triangleHover: [],
			mouse: { x: 0, y: 0 },
			go_open_door: false,
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
			this.renderer.render( this.scene, this.camera );
			this.animate();

			window.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
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
			this.addObject3(500,-200,7000, 1000,-1000,7000, 3000,1500,7000);
			this.addObject3(500,-200,7000, 1000,1000,7000, 3000,1500,7000);
			this.addObject3(500,-200,7000, 1000,1000,7000, 0,0,7000);
			this.addObject3(0,300,7000, 1000,1000,7000, 0,0,7000);
			this.addObject3(0,300,7000, -300,200,7000, 0,0,7000);
			this.addObject3(0,300,7000, -300,200,7000, -500,500,7000);
			this.addObject3(0,300,7000, -300,2000,7000, -500,500,7000);
			this.addObject3(0,300,7000, -300,2000,7000, 1000,1000,7000);
			this.addObject3(-700,0,7000, -300,200,7000, -500,500,7000);
			this.addObject3(-700,0,7000, -2000,2000,7000, -500,500,7000);
			this.addObject3(-700,0,7000, -2000,2000,7000, -800,-200,7000);
			this.addObject3(-700,-2000,7000, -2000,2000,7000, -800,-200,7000);
			this.addObject3(-700,-2000,7000, -400,-200,7000, -800,-200,7000);
			this.addObject3(-700,0,7000, -400,-200,7000, -800,-200,7000);
			this.addObject3(0,0,7000, -400,-200,7000, -100,-400,7000);
			this.addObject3(0,0,7000, 500,-200,7000, -100,-400,7000);
			this.addObject3(-700,-2000,7000, 500,-200,7000, -100,-400,7000);
			this.addObject3(-700,-2000,7000, 500,-200,7000, 1000,-1000,7000);
			this.addObject3(-700,-2000,7000, -400,-200,7000, -100,-400,7000);
		},
		addObject3(x1,y1,z1,x2,y2,z2,x3,y3,z3) {
			var geometries = [new THREE.Geometry(),new THREE.Geometry()];
			for(var i=geometries.length;i--;) {
				geometries[i].vertices.push( new THREE.Vector3(x1,y1,z1-i));
				geometries[i].vertices.push( new THREE.Vector3(x2,y2,z2-i));
				geometries[i].vertices.push( new THREE.Vector3(x3,y3,z3-i));
				geometries[i].faces.push( fTriangle );
				geometries[i].computeFaceNormals();
				geometries[i].computeVertexNormals();
			}
			this.scene.add( new THREE.Mesh( geometries[0], mTriangle ) );
			// It's not the fastest way to do it but it's the one using the less memory
			var mTriangleBlack = new THREE.MeshStandardMaterial( { color: TRIANGLE_COLOR } );
			mTriangleBlack.side = THREE.DoubleSide;
			this.triangleHover.push(new THREE.Mesh( geometries[1], mTriangleBlack ));
			this.scene.add(this.triangleHover[this.triangleHover.length-1]);
		},
		animate() {
			setTimeout(this.animate, framerate );
			this.renderer.render( this.scene, this.camera );
			this.searchingMatchMouseAndMesh();
		},
		searchingMatchMouseAndMesh() {
			this.raycaster.setFromCamera( this.mouse, this.camera );
			var triangleIntersects = this.raycaster.intersectObjects( this.triangleHover, true );
			console.log(triangleIntersects);

			if(triangleIntersects.length>0) {
				for(var i=this.triangleHover.length;i--;) {
					if(triangleIntersects[0].object==this.triangleHover[i]) {
						this.triangleHover[i].material.color = new THREE.Color(TRIANGLE_COLOR_HOVER);
					} else {
						this.triangleHover[i].material.color = new THREE.Color(TRIANGLE_COLOR);
					}
				}
			}
		},
		onDocumentMouseMove(event) {
			this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
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
		}
	}
};
</script>
<style src="../assets/less/home.less"></style>
