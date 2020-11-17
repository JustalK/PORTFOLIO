<template>
	<div id="SLIDE">
		<a :style="set_background_project(background_image)">
			<i class="fake_button" />
			<h2>{{ title }}</h2>
			<components_slide
				:invisible_slide="invisible_slide"
				:slide="slide"
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
		invisible_slide: {
			type: Boolean,
			required: true
		}
	},
	emits: ['change_slide'],
	data: () => {
		return {
			actual_index_slide: 0,
			slide: {}
		};
	},
	watch: {
		async all_slides(slides) {
			const slide_obj = await this.get_slide_by_id(slides[0]);
			this.update_slide(slide_obj);
		}
	},
	async mounted() {
		if (this.all_slides.length > 0) {
			const slide_obj = await this.get_slide_by_id(this.all_slides[0]);
			this.update_slide(slide_obj);
		}
	},
	methods: {
		change_slide() {
			setTimeout(async () => {
				const index_slide = this.next_index_slide();
				const slide_obj = await this.get_slide_by_id(index_slide);
				this.update_slide(slide_obj, this.actual_index_slide);
			}, 500);
			this.$emit('change_slide');
		},
		set_background_project(background_image) {
			if (background_image.path === undefined) {
				return null;
			}

			return {
				'background-image': 'url(\'' + utils.absolute_path_from_relative(background_image.path) + '\')'
			};
		},
		async get_slide_by_id(id) {
			return api.get_slide_by_id(id);
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
