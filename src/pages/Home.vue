<template>
	<div
		id="HOME"
		class="home">
		<div class="home-cover home-cover_1 home-cover_1 home-cover--active" />
		<div class="home-cover home-cover_2 home-cover--active" />
		<div
			class="wrap"
			:class="{active:goZoom}">
			<div
				class="bloc left"
				:class="{active:goPortfolio}">
				<div>
					<my-introduction />
				</div>
				<a
					class="links-open-door left portfolio"
					@click.stop="open('portfolio')">
					Liens 2
				</a>
			</div>
			<div
				ref="bloc-right"
				class="bloc right"
				:class="{active:goPortfolio}">
				<div>
					<my-introduction />
				</div>
				<a
					class="links-open-door right articles"
					@click.stop="open('articles')">
					Liens 2
				</a>
			</div>
		</div>
	</div>
</template>
<script>
import Introduction from '../components/Introduction';

export default {
	components: {
		'my-introduction': Introduction
	},
	data: () => {
		return {
			goPortfolio: false,
			goZoom: false,
			intro: 'Hello, I\'m Justal Kevin.<br>I\'m a full stack web developer.'
		};
	},
	mounted: function () {
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
<style src="../assets/less/home.less"></style>
