<template>
	<div
		id="HOME"
		class="home">
		<div class="home-cover home-cover_1 home-cover_1 home-cover--active" />
		<div class="home-cover home-cover_2 home-cover--active" />
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
			var cover = document.querySelectorAll('.home-cover');
			var buttonLink = document.querySelectorAll('.links-open-door');
			for(var i=cover.length; i--;) {
				cover[i].classList.remove('home-cover--active');
			}
			setTimeout(() => {
				for(var i=buttonLink.length; i--;) {
					buttonLink[i].classList.add('links-open-door--active');
				}
			},350);
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
