<template>
	<div
		id="RESUME"
		ref="resume"
		:class="{ unmounted: unmounted_parent, locked: locked }">
		<div class="mask" />
		<div>
			<components_links :invisible="invisible" />
			<components_menu
				:invisible="invisible"
				@back="back"
				@change_by_menu="change_by_menu" />
			<components_back :invisible="invisible" @back="back" />
			<h1>
				<components_text
					:text="title"
					:unmounted="unmounted"
					:invisible="invisible_text" />
			</h1>
			<components_text
				:text="description"
				:unmounted="unmounted"
				:invisible="invisible_text" />
			<ul class="options">
				<li
					v-for="option in options"
					:key="option.name"
					ref="options"
					:data-id="option.name"
					:class="{
						'options-option': true,
						'options-option--active': selected_option._id === option._id
					}"
					@mouseover="hover_enter"
					@click="change_resume(option._id)">
					<span> {{ option.name }} </span>
				</li>
				<li
					class="options-option-linkedin options-option"
					@mouseover="hover_enter"
					@click="go_linkedin()">
					<span> Linkedin </span>
				</li>
			</ul>
			<svg id="SVG_EFFECT">
				<defs>
					<filter id="wave">
						<feTurbulence
							ref="turbulence"
							type="fractalNoise"
							baseFrequency="1.1 1.1"
							numOctaves="1"
							result="warp" />
						<feDisplacementMap
							xChannelSelector="R"
							yChannelSelector="G"
							scale="80"
							in="SourceGraphic"
							in2="warpOffeset" />
					</filter>
				</defs>
			</svg>
			<iframe
				ref="iframe"
				:class="{ invisible: invisible }"
				:src="'../libs/web/viewer.html?file=' + selected_option.filename" />
			<components_pubs :invisible="invisible" />
		</div>
	</div>
</template>
<script>
import pubs from '../components/pubs';
import menu from '../components/main/menu';
import back from '../components/main/back';
import text from '../components/main/text';
import links from '../components/main/links';
import FogMaterial from '../materials/fog';
import api from '../services/api';
import { getWidthAndHeight } from '../helper/utils';
import helper_navigation from '../helper/navigation.js';
import * as THREE from 'three';

const FOV = 50;
const WINDOWS_WIDTH = window.innerWidth;
const WINDOWS_HEIGHT = window.innerHeight;
const LIGHT_AMBIANT_COLOR = 0xffffff;
const CAMERA_START_POSITION_X = 0;
const CAMERA_START_POSITION_Y = 0;
const CAMERA_START_POSITION_Z = 100;
const CAMERA_START_ROTATION_X = 0;
const CAMERA_START_ROTATION_Y = 0;
const CAMERA_START_ROTATION_Z = 0;

export default {
	components: {
		components_text: text,
		components_pubs: pubs,
		components_back: back,
		components_menu: menu,
		components_links: links
	},
	data: () => {
		return {
			title: '',
			options: [
				{
					_id: 0,
					name: 'Colorful resume',
					filename: 'resume.pdf'
				},
				{
					_id: 1,
					name: 'Classic english resume',
					filename: 'resume_en.pdf'
				}
			],
			selected_option: {
				_id: 0,
				name: 'Colorful resume',
				filename: 'resume.pdf'
			},
			description: '',
			locked: false,
			invisible: true,
			invisible_text: true,
			unmounted_parent: false,
			unmounted: false,
			clock: null,
			camera: null,
			scene: null,
			renderer: null,
			width: 0,
			height: 0,
			backgroundMaterial: null
		};
	},
	async created() {
		const page = await this.get_page(this.$route.name);

		this.selected_option = this.options[0];

		if (page !== null) {
			this.update_page(page[0]);
		}

		await this.$nextTick();
		setTimeout(() => {
			this.invisible = false;
			this.invisible_text = false;
		}, 1);
	},
	async mounted() {
		this.init();
	},
	methods: {
		init() {
			this.initClock();
			this.initCamera();
			this.initSettings();
			this.initScene();
			this.initLight(LIGHT_AMBIANT_COLOR);
			this.createWorld();
			this.renderWebGL();

			this.$refs.resume.appendChild(this.renderer.domElement);

			this.animate();

			window.addEventListener('mousemove', this.onDocumentMouseMove, false);
		},
		initClock() {
			this.clock = new THREE.Clock();
			// Set the time to 0
			this.clock.start();
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
		},
		initSettings() {
			const [width, height] = getWidthAndHeight(this.camera, 100);
			this.width = width;
			this.height = height;
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
		renderWebGL() {
			this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.renderer.gammaInput = true;
			this.renderer.gammaOutput = true;
			this.renderer.powerPreference = 'high-performance';
			this.renderer.setClearColor(0x000000, 0);
		},
		createWorld() {
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
					uTime: { type: 'f', value: 0.0 },
					uOpacity: { type: 'f', value: 0.0 }
				},
				fragmentShader: FogMaterial.fragmentShader(),
				vertexShader: FogMaterial.vertexShader()
			});
			const background = new THREE.Mesh(geometry, this.backgroundMaterial);
			background.name = 'background';
			this.scene.add(background);
		},
		animate() {
			requestAnimationFrame(this.animate);
			this.backgroundMaterial.uniforms.uTime.value =
				this.clock.getElapsedTime();
			if (!this.invisible) {
				this.backgroundMaterial.uniforms.uOpacity.value = Math.min(
					this.backgroundMaterial.uniforms.uOpacity.value + 0.05,
					1.0
				);
			}
			this.renderer.render(this.scene, this.camera);
		},
		change_by_menu(slug) {
			this.change_page_by_slug(slug);
		},
		back() {
			this.change_page_by_slug('home');
		},
		change_page_by_slug(slug) {
			this.unmounted_parent = true;
			this.locked = true;
			helper_navigation.change_page(this, slug);
		},
		go_linkedin() {
			window.open(
				'https://www.linkedin.com/in/justalk/',
				'_blank',
				'noreferrer'
			);
		},
		async get_page(name) {
			return api.get_pages(name);
		},
		update_page(page) {
			this.title = page.title;
			this.description = page.description;
		},
		change_resume(_id) {
			this.selected_option = this.options.find((r) => r._id == _id);
		},
		hover_enter() {
			let vertical_frequency = 1.1;
			this.$refs.turbulence.setAttribute(
				'baseFrequency',
				vertical_frequency + ' ' + vertical_frequency
			);
			const steps = 30;
			const interval = 10;
			for (let i = 0; i < steps; i++) {
				setTimeout(() => {
					vertical_frequency += 0.05;
					vertical_frequency = Math.min(vertical_frequency, 2.5);
					this.$refs.turbulence.setAttribute(
						'baseFrequency',
						vertical_frequency + ' ' + vertical_frequency
					);
				}, i * interval);
			}
		},
		onDocumentMouseMove(event) {
			this.backgroundMaterial.uniforms.uMouse.value.x =
				event.clientX / WINDOWS_WIDTH;
			this.backgroundMaterial.uniforms.uMouse.value.y =
				1.0 - event.clientY / WINDOWS_HEIGHT;
		}
	}
};
</script>
<style src="../assets/less/resume.less"></style>
