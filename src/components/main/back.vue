<template>
	<div
		:class="{back:true, invisible: invisible, is_animated: is_animated, is_activated: is_activated}">
		<div @click.stop="back">
			<div :class="{legend:true, invisible: invisible}">
				<span>B</span>
				<span>A</span>
				<span>C</span>
				<span>K</span>
			</div>
			<a>
				<div
					v-for="index in 4"
					:key="index" />
			</a>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		invisible: {
			type: Boolean,
			required: true
		},
		is_animated: {
			type: Boolean
		}
	},
	emits: ['back'],
	data: () => {
		return {
			is_activated: false
		};
	},
	methods: {
		back() {
			this.is_activated = true;
			this.$emit('back', 'portfolio');
		}
	}
};
</script>
<style src="../../assets/less/back.less"></style>
