<template>
	<div
		id="HOME"
		ref="home">
		<components_github
			:invisible="invisible" />
		<div
			:class="{active: go_zoom}">
			<components_introduction_side
				:props_link="props_links[0]"
				:props_introduction="props_introduction"
				:props_go_open_door="go_open_door"
				@zoom="zoom"
				@hovering="hovering" />
			<components_introduction_side
				:props_link="props_links[1]"
				:props_introduction="props_introduction"
				:props_go_open_door="go_open_door"
				@hovering="hovering" />
		</div>
	</div>
</template>
<script>
import introduction_side from '../components/introduction/introduction_side';
import github from '../components/main/github';
import api from '../services/api';
import utils from '../helper/utils.js';

export default {
	components: {
		components_introduction_side: introduction_side,
		components_github: github
	},
	data: () => {
		return {
			go_open_door: false,
			go_zoom: false,
			props_introduction: {},
			invisible: true,
			props_links: [
				{name: 'Portfolio', link: 'portfolio', side: 'left'},
				{name: 'Resume', link: 'resume', side: 'right'}
			]
		};
	},
	watch: {
		$route: {
			immediate: true,
			handler() {
				document.title = 'Justal Kevin - Home';
			}
		},
	},
	async mounted() {
		await this.get_my_identity();
		utils.add_class_to_element_delay(this.$refs.home, 'mounted', 200);
		setTimeout(() => {
			this.invisible = false;
		}, 1000);
	},
	methods: {
		zoom() {
			this.go_zoom = true;
			this.go_open_door = true;
			this.invisible = true;
			utils.add_class_to_element(this.$refs.home, 'unmounted');
		},
		hovering(event) {
			console.log(event);
			utils.add_class_to_element(this.$refs.home, 'hovering');
		},
		async get_my_identity() {
			const my_identity = await api.get_my_identity();
			const image_path = my_identity.image !== null ? my_identity.image_alternative.path : null;
			this.update_introduction(my_identity.fullname, my_identity.email, image_path, my_identity.android_url);
		},
		update_introduction(name, email, image, android_url) {
			this.props_introduction = {name, email, image, android_url};
		}
	}
};
</script>
<style src="../assets/less/home.less"></style>
