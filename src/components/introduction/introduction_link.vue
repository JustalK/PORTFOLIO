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
		open: function(link) {
			this.$emit(link);
		}
	}
};
</script>
<style src="../../assets/less/introduction_link.less"></style>
