<template>
	<div
		:class="[props_link.side,{active:props_go_open_door}]"
		class="bloc">
		<components_introduction :props_introduction="props_introduction" />
		<components_introduction_link
			:props_link="props_link"
			@resume="resume"
			@portfolio="portfolio" />
	</div>
</template>
<script>
import introduction from './introduction';
import introduction_link from './introduction_link';

export default {
	components: {
		components_introduction: introduction,
		components_introduction_link: introduction_link
	},
	props: {
		props_introduction: {
			type: Object,
			required: true
		},
		props_link: {
			type: Object,
			required: true
		},
		props_go_open_door: {
			type: Boolean,
			required: true
		}
	},
	emits: ['zoom'],
	methods: {
		resume() {
			this.animation_door('resume');
		},
		portfolio() {
			this.animation_door('portfolio');
		},
		animation_door(link) {
			this.$emit('zoom');
			this.move_to_project(link, 1000);
		},
		move_to_project(link, delay) {
			setTimeout(() => {
				this.$router.push(link);
			}, delay);
		}
	}
};
</script>
<style src="../../assets/less/introduction_side.less"></style>
