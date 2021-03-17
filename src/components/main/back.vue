<template>
	<div
		:class="{back:true, invisible: invisible, is_animated: is_animated}">
		<a
			href="#"
			@click.stop="back">
			<div
				v-for="index in 4"
				:key="index" />
		</a>
		<span>back</span>
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
	methods: {
		back() {
			this.$emit('back');
		}
	}
};
</script>
<style src="../../assets/less/back.less"></style>
