<template>
	<div id="SLIDE">
		<a>
			<i class="fake_button" />
			<h2>{{ title }}</h2>
			<components_slide
				:invisible_slide="invisible_slide"
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
		invisible_slide: {
			type: Boolean,
			required: true
		}
	},
	emits: ['change_slide'],
	methods: {
		change_slide() {
			this.$emit('change_slide');
		}
	}
};
</script>
<style src="../assets/less/slides.less"></style>
