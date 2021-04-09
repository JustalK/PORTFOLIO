<template>
	<div
		id="SLIDE"
		:class="{is_animated: is_animated}">
		<a>
			<i class="fake_button" />
			<div
				ref="background"
				class="background" />
			<h2>{{ title }}</h2>
			<components_slide
				:invisible_slide="invisible_slide"
				:slide="slide"
				:titles="titles"
				@change_slide="change_slide" />
		</a>
	</div>
</template>
<script>
import slide from '../components/slide';
import api from '../services/api';
import utils from '../helper/utils.js';

export default {
	components: {
		components_slide: slide
	},
	props: {
		title: {
			type: String,
			required: true
		},
		all_slides: {
			type: Array,
			required: true
		},
		background_image: {
			type: Object,
			required: true
		},
		is_animated: {
			type: Boolean
		}
	},
	data: () => {
		return {
			invisible_slide: true,
			actual_index_slide: 0,
			titles: [],
			slide: {}
		};
	},
	watch: {
		async all_slides(slides) {
			this.titles = slides.map(slide => slide.title);
			const slide_obj = await this.get_slide_by_id(slides[0]);
			this.update_slide(slide_obj);
			await this.$nextTick();
			this.invisible_slide = false;
		},
		background_image() {
			this.set_background_project();
		}
	},
	async mounted() {
		if (this.all_slides.length > 0) {
			this.titles = this.all_slides.map(slide => slide.title);
			const slide_obj = await this.get_slide_by_id(this.all_slides[0]);
			this.update_slide(slide_obj);
			this.set_background_project();
			await this.$nextTick();
			this.invisible_slide = false;
		}
	},
	methods: {
		async change_slide() {
			const index_slide = this.next_index_slide();
			const slide_obj = await this.get_slide_by_id(index_slide);
			this.update_slide(slide_obj, this.actual_index_slide);
		},
		set_background_project() {
			const tmp = new Image();
			if (this.background_image.path === undefined) {
				return null;
			}

			tmp.src = utils.absolute_path_from_relative(this.background_image.path);
			this.$refs.background.style.backgroundImage='url(\'' + utils.absolute_path_from_relative(this.background_image.path) + '\')';
			tmp.addEventListener('load',() => {
				this.$refs.background.classList.add('loaded');
			});
		},
		async get_slide_by_id(slide) {
			return api.get_slide_by_id(slide.id);
		},
		next_index_slide() {
			this.actual_index_slide++;
			return this.all_slides[this.actual_index_slide%this.all_slides.length];
		},
		update_slide(slide, index = 0) {
			this.slide = slide;
			this.actual_index_slide = index;
		},
	}
};
</script>
<style src="../assets/less/slides.less"></style>
