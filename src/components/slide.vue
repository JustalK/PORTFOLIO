<template>
	<div
		class="slide"
		:class="{invisible: invisible_slide}"
		@click.stop="change_slide()">
		<span>{{ slide.title }}</span>
		<p>{{ slide.first_text }}</p>
		<p>{{ slide.second_text }}</p>
		<div class="slider_images">
			<img
				ref="slide_image">
			<span class="legend">
				Oh about that ?
			</span>
		</div>
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
			<ul class="slider_index">
				<li>Presentation</li>
				<li>Work</li>
				<li>Technical Challenges</li>
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
	watch: {
		slide() {
			this.slide_image();
		}
	},
	methods: {
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
			tmp.addEventListener('load',() => {
				this.$refs.slide_image.classList.add('loaded');
			});
		}
	}
};
</script>
<style src="../assets/less/slide.less"></style>
