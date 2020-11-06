<template>
	<div
		class="back"
		:class="{invisible: invisible}">
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
