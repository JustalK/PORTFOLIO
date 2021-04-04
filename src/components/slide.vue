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
			renderer: null
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
			this.camera.position.z = 200;

			this.scene = new THREE.Scene();

			var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
			var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
			var cube = new THREE.Mesh(boxGeometry, basicMaterial);
			this.scene.add(cube);
			cube.rotation.set(0.4, 0.2, 0);

			this.scene.add(this.createBoard());

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
			piece.push(this.createSideWireframe(0,0,0,0,0,0));

			// Add the differents parts to the group of meshes
			for(var i=piece.length;i--;) {
				boardTmp.add(piece[i]);
			}

			boardTmp.position.set(-150, 0, 0);
			boardTmp.rotation.set(0, 0, 0);

			return boardTmp;
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
		createSideWireframe(x,y,z,rx,ry,rz) {
			const geometryBoard = new THREE.ExtrudeGeometry( this.createShape(), extrudeSettings );
			const material = new THREE.LineBasicMaterial( { color: 0xFFFFFF, linewidth: 1 } );
			const sideWireframe = new THREE.LineSegments( new THREE.EdgesGeometry( geometryBoard ), material );
			sideWireframe['wireframe'] = true;
			sideWireframe.position.set( x, y, z );
			sideWireframe.rotation.set( rx, ry, rz );
			return sideWireframe;
		},
		animate() {
			requestAnimationFrame( this.animate );

			this.renderer.render( this.scene, this.camera );
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
