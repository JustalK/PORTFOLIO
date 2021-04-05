<template>
	<div
		class="slide"
		:class="{invisible: invisible_slide}"
		@click.stop="change_slide()">
		<span>{{ slide.title }}</span>
		<p>{{ slide.first_text }}</p>
		<p>{{ slide.second_text }}</p>
		<div
			ref="canvas"
			class="slider_images" />
		<img
			ref="slide_image">
		<span
			ref="image_legend"
			class="slider_legend" />
		<div class="informations">
			<div class="field">
				<span class="legend">Client</span>
				<span class="value">Manypixels</span>
			</div>
			<div class="field">
				<span class="legend">Industry</span>
				<span class="value">Services</span>
			</div>
			<div class="field">
				<span class="legend">Position</span>
				<span class="value">Lead FullStack Developer</span>
			</div>
			<ul
				ref="summary"
				class="slider_index">
				<li
					class="selected">
					Presentation
				</li>
				<li>
					Work
				</li>
				<li>
					Technical Challenges
				</li>
			</ul>
		</div>
		<div class="description">
			<div class="block block_1">
				<div class="block_title">
					<span>Slide 1</span>
				</div>
				<div class="block_information">
					<span>{{ slide.first_text }}</span>
				</div>
			</div>
			<div class="block block_2">
				<div class="block_title">
					<span>Slide 2</span>
				</div>
				<div class="block_information">
					<span>{{ slide.second_text }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import utils from '../helper/utils.js';
import * as THREE from '../libs/three.js';

const DEFAULT_ROTATION_PERPETUAL_X = 0.001;
const DEFAULT_ROTATION_PERPETUAL_Y = 0.002;
const DEFAULT_ROTATION_PERPETUAL_X_START = 0;
const DEFAULT_ROTATION_PERPETUAL_Y_START = 0;
const DEFAULT_ROTATION_PERPETUAL_X_AMPLITUDE = 20;
const DEFAULT_ROTATION_PERPETUAL_Y_AMPLITUDE = 15;
const DEFAULT_ROTATION_PERPETUAL_X_SPEED = 100;
const DEFAULT_ROTATION_PERPETUAL_Y_SPEED = 200;
const extrudeSettings = { amount: 10, bevelEnabled: true, bevelSegments: 1, steps: 2, bevelSize: 3, bevelThickness: 3 };


export default {
	props: {
		invisible_slide: {
			type: Boolean,
			required: true
		},
		slide: {
			type: Object,
			required: true
		}
	},
	emits: ['change_slide'],
	data: () => {
		return {
			camera: null,
			scene: null,
			renderer: null,
			groupScene: []
		};
	},
	watch: {
		slide() {
			this.slide_image();
		}
	},
	async mounted() {
		this.initCamera();
		this.animate();
	},
	methods: {
		initCamera() {
			this.camera = new THREE.PerspectiveCamera(70, this.$refs.canvas.clientWidth / this.$refs.canvas.clientHeight);
			this.camera.position.z = 180;
			this.clock = new THREE.Clock();
			this.clock.start();

			this.scene = new THREE.Scene();

			var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
			var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
			var cube = new THREE.Mesh(boxGeometry, basicMaterial);
			this.scene.add(cube);
			cube.rotation.set(0, 0, 0);
			cube.rotation.set(0.4, 0.2, 0);

			this.groupScene.push(this.createBoard());

			for(var i=this.groupScene.length;i--;) {
				this.scene.add(this.groupScene[i]);
			}

			this.renderer = new THREE.WebGLRenderer( { antialias: true } );
			this.renderer.setPixelRatio( window.devicePixelRatio );
			this.renderer.setClearColor(0x111116, 1);
			this.renderer.setSize( this.$refs.canvas.clientWidth, this.$refs.canvas.clientHeight );
			this.$refs.canvas.appendChild( this.renderer.domElement );
		},
		createBoard() {
			const boardTmp = new THREE.Group();

			// Construct the mesh piece by piece
			const piece = [];
			piece.push(this.createSideWireframe(-103,0,0,0,0,0));
			piece.push(this.createSideWireframe(103,0,10,0,Math.PI,0));
			piece.push(this.createCenterBoard(0,0,0));

			// Add the differents parts to the group of meshes
			for(var i=piece.length;i--;) {
				boardTmp.add(piece[i]);
			}

			boardTmp.position.set(0, 0, 0);
			boardTmp.rotation.set(0, 0, 0);

			return boardTmp;
		},
		createShape() {
			const leftShape = new THREE.Shape();
			leftShape.moveTo( -50, -85 );
			leftShape.lineTo( -45, -30 );
			leftShape.lineTo( -35, -20 );
			leftShape.lineTo( -35, 25 );
			leftShape.lineTo( -45, 35 );
			leftShape.lineTo( -50, 85 );
			leftShape.lineTo( -5, 75 );
			leftShape.lineTo( 0, 64 );
			leftShape.lineTo( -20, 64 );
			leftShape.lineTo( -25, 60 );
			leftShape.lineTo( -25, -55 );
			leftShape.lineTo( -20, -60 );
			leftShape.lineTo( 0, -64 );
			leftShape.lineTo( -5, -75 );
			return leftShape;
		},
		createSideWireframe(x,y,z,rx,ry,rz) {
			const geometryBoard = new THREE.ExtrudeGeometry( this.createShape(), extrudeSettings );
			const material = new THREE.LineBasicMaterial( { color: 0xFFFFFF, linewidth: 1 } );
			const sideWireframe = new THREE.LineSegments( new THREE.EdgesGeometry( geometryBoard ), material );
			sideWireframe['wireframe'] = true;
			sideWireframe.position.set( x, y, z );
			sideWireframe.rotation.set( rx, ry, rz );
			return sideWireframe;
		},
		createCenterBoard(x,y,z) {
			const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
			const centerMesh =  new THREE.Mesh( new THREE.BoxBufferGeometry( 256, 128, 1 ),  [0,0,0,0,material,0] );
			centerMesh.position.set(x,y,z);
			return centerMesh;
		},
		animate() {
			requestAnimationFrame( this.animate );
			this.delta = this.clock.getDelta();

			for(var i=this.groupScene.length;i--;) {
				this.perpetual(this.groupScene[i]);
			}

			this.renderer.render( this.scene, this.camera );
		},
		perpetual(board) {
			board.rotation.x = (this.radians(DEFAULT_ROTATION_PERPETUAL_X_START) + Math.cos(this.clock.elapsedTime*DEFAULT_ROTATION_PERPETUAL_X_SPEED * DEFAULT_ROTATION_PERPETUAL_X) * this.radians(DEFAULT_ROTATION_PERPETUAL_X_AMPLITUDE));
			board.rotation.y = (this.radians(DEFAULT_ROTATION_PERPETUAL_Y_START) + Math.cos(this.clock.elapsedTime*DEFAULT_ROTATION_PERPETUAL_Y_SPEED * DEFAULT_ROTATION_PERPETUAL_Y + 300) * this.radians(DEFAULT_ROTATION_PERPETUAL_Y_AMPLITUDE));
		},
		radians(degrees) {
			return degrees * Math.PI / 180;
		},
		change_slide() {
			this.$refs.slide_image.classList.remove('loaded');
			this.$emit('change_slide');
		},
		slide_image() {
			const tmp = new Image();
			if (this.slide.image.path === undefined) {
				return null;
			}
			tmp.src = utils.absolute_path_from_relative(this.slide.image.path);
			this.$refs.slide_image.src = utils.absolute_path_from_relative(this.slide.image.path);
			this.$refs.image_legend.innerHTML = this.slide.image.name;
			const li = this.$refs.summary.querySelectorAll('li');
			const liSelected = this.$refs.summary.querySelector('.selected');
			let index = 0;
			for(let i = li.length; i--;) {
				index = li[i] == liSelected ? i : index;
			}
			liSelected.classList.remove('selected');
			li[(index + 1)%li.length].classList.add('selected');
			tmp.addEventListener('load',() => {
				this.$refs.slide_image.classList.add('loaded');
			});
		}
	}
};
</script>
<style src="../assets/less/slide.less"></style>
