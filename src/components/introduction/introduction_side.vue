<template>
	<div
		:class="[props_link.side,{active:props_go_open_door}]"
		class="bloc">
		<slot />
		<components_introduction
			:props_introduction="props_introduction"
			@hovering="hovering" />
	</div>
</template>
<script>
import introduction from './introduction';

export default {
	components: {
		components_introduction: introduction
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
	emits: ['zoom', 'hovering'],
	methods: {
		resume() {
			this.animation_door('resume');
		},
		portfolio() {
			this.animation_door('portfolio');
		},
		hovering(event) {
			this.$emit('hovering', event);
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
