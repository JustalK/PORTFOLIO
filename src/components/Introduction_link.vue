<template>
	<a
		:class="props_link.side"
		class="links-open-door"
		@click.stop="open(props_link.link)">
		{{ props_link.name }}
	</a>
</template>
<script>
export default {
	props: {
		props_link: {
			type: Object,
			required: true
		}
	},
	methods: {
		open: function(direction) {
			this.goPortfolio = true;
			setTimeout(() => {
				this.goZoom = true;
				setTimeout(() => {
					return direction == 'portfolio' ? this.$router.push('portfolio') : this.$router.push('articles');
				}, 500);
			}, 500);
		}
	}
};
</script>
<style src="../assets/less/introduction_link.less"></style>
