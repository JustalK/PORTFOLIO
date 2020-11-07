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

export default {
	components: {
		components_slide: slide
	},
	props: {
		title: {
			type: String,
			required: true
		},
		slide: {
			type: Object,
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
	methods: {
		change_slide() {
			this.$emit('change_slide');
		},
		set_background_project(background_image) {
			return {
				'background-image': 'url(\'.' + background_image.path + '\')'
			};
		}
	}
};
</script>
<style src="../assets/less/slides.less"></style>
