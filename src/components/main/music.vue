<template>
	<div
		id="MUSIC"
		:class="{active: is_music_active, invisible}"
		@click.stop="toggle_music()">
		<div
			v-for="index in 4"
			:key="index" />
	</div>
</template>
<script>
export default {
	props: {
		is_music_active: {
			type: Boolean,
			required: true
		},
		invisible: {
			type: Boolean,
			required: true
		}
	},
	emits: ['toggle_music'],
	methods: {
		toggle_music() {
			return this.$emit('toggle_music');
		}
	}
};
</script>
<style src="../../assets/less/music.less"></style>
