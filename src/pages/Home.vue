<template>
	<div id="HOME">
		<div class="wrap" :class={active:goPortfolioZoom}>
			<div class="bloc left" :class={active:goPortfolio}>
				<div>
					<span id="TITLE">I'm Latsuj</span>
		    	</div>
		    </div>
		    <div class="bloc right" :class={active:goPortfolio} ref="bloc-right">
		    	<div>
					<span id="TITLE">I'm Latsuj</span>
				</div>	    
		    </div>
		    <a @click.stop="portfolio">Liens</a>
		    <img :src="image" />
	    </div>
	</div>
</template>
<script>
import image from '../assets/imgs/campingcar.png'

export default {
    data: () => {
    	return {
			image: image.preSrc,
			goPortfolio: false,
			goPortfolioZoom: false
		}
    },
    methods: {
    	portfolio: function() {
    		this.goPortfolio = true
    		setTimeout(() => {
    			this.goPortfolioZoom = true
    			setTimeout(() => {
    				this.$router.push('portfolio')
    			}, 500);
    		}, 500)
    	}
    }
}
</script>