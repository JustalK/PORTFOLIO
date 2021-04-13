<template>
	<div
		id="MENU">
		<div :class="{bar:true}">
			<span @click.stop="back">
				<div :class="{logo:true, invisible: invisible}">
					<div
						v-for="index in 4"
						:key="index" />
				</div>
				Back
			</span>
			<div
				:class="{hamburger:true, invisible: invisible}"
				@click.stop="show_menu">
				<div />
				<div />
				<div />
			</div>
		</div>
		<nav :class="{active: active}">
			<a href="#">AAAA</a>
			<a href="#">AAAA</a>
			<a href="#">AAAA</a>
		</nav>
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
	data: () => {
		return {
			active: false
		};
	},
	methods: {
		back() {
			this.$emit('back');
		},
		show_menu() {
			this.active = !this.active;
		}
	}
};
</script>
<style src="../../assets/less/menu.less"></style>
