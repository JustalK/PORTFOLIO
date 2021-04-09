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
					v-for="title in titles"
					:key="title"
					:data-title="title">
					{{ title }}
				</li>
			</ul>
		</div>
		<div
			ref="description"
			class="description">
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
		<div class="borders_top_right" />
		<div class="borders_bottom_left" />
	</div>
</template>
<script>
import utils from '../helper/utils.js';
import * as THREE from '../libs/three.js';

const FOV = 40;
const BOARD_WIDTH = 256;
const BOARD_HEIGHT = 128;
const BOARD_NAME_CENTER = 'center';
const BOARD_NAME_LEFT = 'left';
const BOARD_NAME_RIGHT = 'right';
const BOARD_NAME_LEFT_WIREFRAME = 'left_wireframe';
const BOARD_NAME_RIGHT_WIREFRAME = 'right_wireframe';
// Half of the board minus the distance between the inside of the shape to the extremity right
const SIDE_BOARD_X = BOARD_WIDTH / 2 - 25;
const SPEED_MOVEMENT_CENTER_BOARD = 12;
const SPEED_MOVEMENT_SIDE_BOARD = 450;
const DEFAULT_ROTATION_PERPETUAL_X = 0.001;
const DEFAULT_ROTATION_PERPETUAL_Y = 0.002;
const DEFAULT_ROTATION_PERPETUAL_X_START = 0;
const DEFAULT_ROTATION_PERPETUAL_Y_START = 0;
const DEFAULT_ROTATION_PERPETUAL_X_AMPLITUDE = 20;
const DEFAULT_ROTATION_PERPETUAL_Y_AMPLITUDE = 15;
const DEFAULT_ROTATION_PERPETUAL_X_SPEED = 100;
const DEFAULT_ROTATION_PERPETUAL_Y_SPEED = 200;
const WHITE_MATERIAL = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
const BLACK_MATERIAL = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const GREEN_MATERIAL = new THREE.MeshBasicMaterial( { color: 0x1d1d23 } );
const BOARD_MATERIAL = new THREE.MeshPhongMaterial( {  color: 0x1d1d23 } );
const BLUE_LINE_MATERIAL = new THREE.LineBasicMaterial( { color: 0x61c3ff, linewidth: 1 } );
const EXTRUDE_SETTINGS = { amount: 10, bevelEnabled: true, bevelSegments: 1, steps: 2, bevelSize: 3, bevelThickness: 3 };
const SHAPE = new THREE.Shape();
SHAPE.moveTo( -50, -85 );
SHAPE.lineTo( -45, -30 );
SHAPE.lineTo( -35, -20 );
SHAPE.lineTo( -35, 25 );
SHAPE.lineTo( -45, 35 );
SHAPE.lineTo( -50, 85 );
SHAPE.lineTo( -5, 75 );
SHAPE.lineTo( 0, 64 );
SHAPE.lineTo( -20, 64 );
SHAPE.lineTo( -25, 60 );
SHAPE.lineTo( -25, -55 );
SHAPE.lineTo( -20, -60 );
SHAPE.lineTo( 0, -64 );
SHAPE.lineTo( -5, -75 );
const GEOMETRY_FROM_SHAPE = new THREE.ExtrudeGeometry( SHAPE, EXTRUDE_SETTINGS );

export default {
	props: {
		invisible_slide: {
			type: Boolean,
			required: true
		},
		titles: {
			type: Array,
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
			new_image: false,
			board: null,
			board_animation: false,
			board_animation_step: 0,
			board_actual_rotation: 0
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
			this.camera = new THREE.PerspectiveCamera(FOV, this.$refs.canvas.clientWidth / this.$refs.canvas.clientHeight);
			this.camera.position.z = BOARD_WIDTH + 100;
			this.clock = new THREE.Clock();
			this.clock.start();

			this.scene = new THREE.Scene();
			this.scene.add(new THREE.AmbientLight(0xFFFFFF, 1));

			// Initialize the board
			this.board = this.initialize_board();
			this.scene.add(this.board);

			this.renderer = new THREE.WebGLRenderer( { antialias: true } );
			this.renderer.setPixelRatio( window.devicePixelRatio );
			this.renderer.setClearColor(0x111116, 1);
			this.renderer.setSize( this.$refs.canvas.clientWidth, this.$refs.canvas.clientHeight );
			this.$refs.canvas.appendChild( this.renderer.domElement );
		},
		/**
		* Construct a board piece by piece
		**/
		initialize_board() {
			const board = new THREE.Group();
			board.add(this.create_center_board(BOARD_NAME_CENTER));
			board.add(this.createSideBoard(BOARD_NAME_LEFT, -SIDE_BOARD_X));
			board.add(this.createSideBoard(BOARD_NAME_RIGHT, SIDE_BOARD_X, true));
			board.add(this.createSideWireframe(BOARD_NAME_LEFT_WIREFRAME, -SIDE_BOARD_X));
			board.add(this.createSideWireframe(BOARD_NAME_RIGHT_WIREFRAME, SIDE_BOARD_X, true));
			return board;
		},
		createSideBoard(name, x, symmetry = false) {
			const mesh = new THREE.Mesh( GEOMETRY_FROM_SHAPE, BOARD_MATERIAL );
			mesh.position.set(x, 0, 0);
			if (symmetry) {
				this.apply_symmetry(mesh);
			}
			mesh.name = name;
			return mesh;
		},
		createSideWireframe(name, x, symmetry = false) {
			const wireframe = new THREE.LineSegments( new THREE.EdgesGeometry(GEOMETRY_FROM_SHAPE), BLUE_LINE_MATERIAL);
			wireframe['wireframe'] = true;
			wireframe.position.set(x, 0, 0);
			if (symmetry) {
				this.apply_symmetry(wireframe);
			}
			wireframe.name = name;
			return wireframe;
		},
		apply_symmetry(mesh) {
			mesh.position.z = 10;
			mesh.rotation.y = Math.PI;
		},
		create_center_board(name) {
			const mesh =  new THREE.Mesh(new THREE.BoxBufferGeometry(BOARD_WIDTH, BOARD_HEIGHT, 1), [
				BLACK_MATERIAL,
				BLACK_MATERIAL,
				BLACK_MATERIAL,
				BLACK_MATERIAL,
				WHITE_MATERIAL,
				GREEN_MATERIAL
			]);
			mesh.name = name;
			return mesh;
		},
		get_children_by_name(name) {
			return this.board.children.find(children => children.name === name);
		},
		animate() {
			requestAnimationFrame( this.animate );
			this.delta = this.clock.getDelta();

			this.perpetual(this.board);
			if (this.board_animation) {
				this.board_new_image_animation();
			}

			this.renderer.render( this.scene, this.camera );
		},
		change_image(path) {
			const index = this.board_actual_rotation % 360 === 0 ? 4 : 5;
			const board_center = this.get_children_by_name(BOARD_NAME_CENTER);
			const texture = new THREE.TextureLoader().load(utils.absolute_path_from_relative(path), () => {
				console.log('loaded');
			});
			if(index === 5) {
				texture.flipY = false;
				texture.wrapS = THREE.RepeatWrapping;
				texture.repeat.x = - 1;
			}
			const material = new THREE.MeshBasicMaterial({map: texture});
			board_center.material[index] = material;
		},
		perpetual(board) {
			board.rotation.x = (this.radians(DEFAULT_ROTATION_PERPETUAL_X_START) + Math.cos(this.clock.elapsedTime*DEFAULT_ROTATION_PERPETUAL_X_SPEED * DEFAULT_ROTATION_PERPETUAL_X) * this.radians(DEFAULT_ROTATION_PERPETUAL_X_AMPLITUDE));
			board.rotation.y = (this.radians(DEFAULT_ROTATION_PERPETUAL_Y_START) + Math.cos(this.clock.elapsedTime*DEFAULT_ROTATION_PERPETUAL_Y_SPEED * DEFAULT_ROTATION_PERPETUAL_Y + 300) * this.radians(DEFAULT_ROTATION_PERPETUAL_Y_AMPLITUDE));
		},
		initialize_board_rotation() {
			this.board_animation = true;
			this.board_actual_rotation += 180;
			this.board_animation_step = 0;
		},
		board_new_image_animation() {

			// Remove the space between the side and the center
			if(this.board_animation_step === 0) {
				const left_step = this.space_negative_side_board(-165, BOARD_NAME_LEFT, BOARD_NAME_LEFT_WIREFRAME);
				const right_step = this.space_positive_side_board(165, BOARD_NAME_RIGHT, BOARD_NAME_RIGHT_WIREFRAME);
				this.board_animation_step = left_step && right_step ? 1 : 0;
			}

			// rotate the center board
			if(this.board_animation_step === 1) {
				this.board_animation_step = this.rotate_center_board() ? 2 : 1;
			}

			// Make the sides come back
			if(this.board_animation_step === 2) {
				const left_step = this.space_positive_side_board(-SIDE_BOARD_X, BOARD_NAME_LEFT, BOARD_NAME_LEFT_WIREFRAME);
				const right_step = this.space_negative_side_board(SIDE_BOARD_X, BOARD_NAME_RIGHT, BOARD_NAME_RIGHT_WIREFRAME);
				this.board_animation_step = left_step && right_step ? 3 : 2;
			}

			// Animation over
			if(this.board_animation_step === 3) {
				this.board_animation = false;
			}
		},
		space_side_board(limit, board_name, wireframe_name, fc) {
			const side_board = [
				this.get_children_by_name(board_name),
				this.get_children_by_name(wireframe_name)
			];
			const is_limit_reached = side_board.map(children => {
				children.position.x = fc(limit, children, SPEED_MOVEMENT_SIDE_BOARD);
				return children.position.x === limit;
			});
			return is_limit_reached[0] && is_limit_reached[1];
		},
		space_negative_side_board(limit, board_name, wireframe_name) {
			return this.space_side_board(limit, board_name, wireframe_name, (limit, children, speed) => {
				return Math.max(limit, children.position.x - this.delta * speed);
			});
		},
		space_positive_side_board(limit, board_name, wireframe_name) {
			return this.space_side_board(limit, board_name, wireframe_name, (limit, children, speed) => {
				return Math.min(limit, children.position.x + this.delta * speed);
			});
		},
		rotate_center_board() {
			const board_center = this.get_children_by_name(BOARD_NAME_CENTER);
			board_center.rotation.x = Math.min(this.radians(this.board_actual_rotation), board_center.rotation.x + this.delta * SPEED_MOVEMENT_CENTER_BOARD);
			return board_center.rotation.x === this.radians(this.board_actual_rotation);
		},
		radians(degrees) {
			return degrees * Math.PI / 180;
		},
		change_slide() {
			this.$refs.slide_image.classList.remove('loaded');
			this.$emit('change_slide');
		},
		change_summary(title) {
			const liPrevious = this.$refs.summary.querySelector('.selected');
			const liNext = this.$refs.summary.querySelector('li[data-title=\''+title+'\']');
			liNext.classList.add('selected');
			if(liPrevious) {
				liPrevious.classList.remove('selected');
			}
		},
		slide_image() {
			this.$refs.description.classList.add('loading');
			const tmp = new Image();
			if (this.slide.image.path === undefined) {
				return null;
			}
			this.change_summary(this.slide.title);
			tmp.src = utils.absolute_path_from_relative(this.slide.image.path);
			this.$refs.slide_image.src = utils.absolute_path_from_relative(this.slide.image.path);
			this.$refs.image_legend.innerHTML = this.slide.image.name;
			this.initialize_board_rotation();
			tmp.addEventListener('load',() => {
				this.change_image(this.slide.image.path);
				this.$refs.description.classList.remove('loading');
			});
		}
	}
};
</script>
<style src="../assets/less/slide.less"></style>
