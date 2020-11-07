<template>
	<div
		class="slide"
		:class="{invisible: invisible_slide}"
		@click.stop="change_slide()">
		<span>sada sdas dasdasd</span>
		<p>I dsad asd asd asd asd as dsa d sad asd sadas d sad asd sad as dasd</p>
		<p>jioijdofsodo msdomfiosdmfoisd miofm iofsmdoifm sdoifms mfosmf osdmfo sdimfomd fois</p>
		<img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg">
	</div>
</template>
<script>

export default {
	props: {
		invisible_slide: {
			type: Boolean,
			required: true
		}
	},
	emits: ['change_slide'],
	methods: {
		change_slide() {
			this.$emit('change_slide');
		}
	}
};
</script>
<style src="../assets/less/slide.less"></style>
