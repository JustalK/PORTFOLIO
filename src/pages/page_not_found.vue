<template>
	<div id="PAGE_NOT_FOUND">
		<div>
			<h1>404</h1>
			<span>Sorry, this page does not exist...</span>
			<a
				href="#"
				@click.stop="back">
				<svg>
					<rect />
				</svg>
				Back to home
			</a>
		</div>
	</div>
</template>
<script>
import utils from '../helper/utils.js';

export default {
	methods: {
		back() {
			utils.add_class_to_element(this.$refs.portfolio, 'unmounted');
			setTimeout(() => {
				this.$router.push({name: 'home'});
			},1000);
		},
	}
};
</script>
<style src="../assets/less/page_not_found.less"></style>
