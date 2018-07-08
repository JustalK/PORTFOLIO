<template>
	<div id="HOME">
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
	    <a @click.stop="portfolio">Portfolio</a>
	    <img :src="image" />
	</div>
</template>
<script>
import image from '../assets/imgs/campingcar.png'

export default {
    data: () => {
    	return {
			image: image.preSrc,
			goPortfolio: false
		}
    },
    methods: {
    	portfolio: function() {
    	 	console.log(this.goPortfolio);
    		this.goPortfolio = true
    	}
    }
}
</script>