<template>
	<div
		class="slide"
		:class="{invisible: invisible_slide}"
		@click.stop="change_slide()">
		<span>{{ slide.title }}</span>
		<p>{{ slide.first_text }}</p>
		<p>{{ slide.second_text }}</p>
		<img :src="slide_image()">
	</div>
</template>
<script>
import utils from '../helper/utils.js';

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
	methods: {
		change_slide() {
			this.$emit('change_slide');
		},
		slide_image() {
			if (this.slide.image === undefined) {
				return '';
			}

			return utils.absolute_path_from_relative(this.slide.image.path);
		}
	}
};
</script>
<style src="../assets/less/slide.less"></style>
