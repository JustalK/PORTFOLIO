<template>
	<div
		:class="{back:true, invisible: invisible, is_animated: is_animated}">
		<div @click.stop="back">
			<div class="legend">
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
	methods: {
		back() {
			this.$emit('back');
		}
	}
};
</script>
<style src="../../assets/less/back.less"></style>
