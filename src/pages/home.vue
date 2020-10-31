<template>
	<div
		id="HOME">
		<div
			:class="{active:goZoom}">
			<components_introduction_side
				:props_link="props_links[0]"
				:props_introduction="props_introduction"
				:props_go_open_door="go_open_door"
				@zoom="zoom" />
			<components_introduction_side
				:props_link="props_links[1]"
				:props_introduction="props_introduction"
				:props_go_open_door="go_open_door"
				@zoom="zoom" />
		</div>
	</div>
</template>
<script>
import introduction_side from '../components/introduction/introduction_side';
import api from '../services/api';

export default {
	components: {
		components_introduction_side: introduction_side
	},
	data: () => {
		return {
			go_open_door: false,
			goZoom: false,
			props_introduction: {},
			props_links: [
				{name: 'Portfolio', link: 'portfolio', side: 'left'},
				{name: 'Resume', link: 'articles', side: 'right'}
			]
		};
	},
	async mounted() {
		await this.get_my_identity();
		this.add_class_to_element_delay('#HOME', 'mounted', 200);
	},
	methods: {
		zoom() {
			this.goZoom = true;
			this.go_open_door = true;
		},
		async get_my_identity() {
			const my_identity = await api.get_my_identity();
			this.update_introduction(my_identity.fullname, my_identity.email);
		},
		update_introduction(name, email) {
			this.props_introduction = {name, email};
		},
		add_class_to_element_delay(selector, newclass, delay) {
			setTimeout(() => {
				this.add_class_to_element(selector, newclass);
			}, delay);
		},
		add_class_to_element(selector, newclass) {
			const element = document.querySelector(selector);
			element.classList.add(newclass);
		}
	}
};
</script>
<style src="../assets/less/home.less"></style>
