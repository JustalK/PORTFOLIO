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
			<a @click.stop="change_by_menu('home')">HOME</a>
			<a @click.stop="change_by_menu('portfolio')">PORTFOLIO</a>
			<a @click.stop="change_by_menu('resume')">RESUME</a>
			<a href="https://play.google.com/store/apps/details?id=com.justalk.portfolio">APP</a>
			<a href="https://github.com/JustalK">GITHUB</a>
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
	emits: ['back', 'change_by_menu'],
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
		},
		change_by_menu(slug) {
			this.$emit('change_by_menu', slug);
		}
	}
};
</script>
<style src="../../assets/less/menu.less"></style>
