<template>
	<div
		id="HOME">
		<div
			class="wrap"
			:class="{active:goZoom}">
			<components_introduction_side
				:props_link="props_links[0]"
				:props_introduction="props_introduction" />
			<components_introduction_side
				:props_link="props_links[1]"
				:props_introduction="props_introduction" />
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
			goPortfolio: false,
			goZoom: false,
			props_introduction: {},
			props_links: [
				{name: 'Lien 1', link: 'portfolio', side: 'left'},
				{name: 'Lien 2', link: 'articles', side: 'right'}
			]
		};
	},
	async mounted() {
		await this.get_my_identity();
		setTimeout(() => {
			const home = document.querySelector('#HOME');
			home.classList.add('mounted');
		}, 200);
	},
	methods: {
		async get_my_identity() {
			const my_identity = await api.get_my_identity();
			this.update_introduction(my_identity.fullname, my_identity.email);
		},
		update_introduction(name, email) {
			this.props_introduction = {name, email};
		}
	}
};
</script>
<style src="../assets/less/home.less"></style>
