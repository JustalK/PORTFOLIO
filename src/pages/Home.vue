<template>
	<div id="HOME">
		<div class="wrap" :class={active:goZoom}>
			<div class="bloc left" :class={active:goPortfolio}>
				<div>
					<span id="TITLE">I'm Latsuj</span>
		    	</div>
			    <a class="links-open-door portfolio" @click.stop="open('portfolio')">Liens</a>
		    </div>
		    <div class="bloc right" :class={active:goPortfolio} ref="bloc-right">
		    	<div>
					<span id="TITLE">I'm Latsuj</span>
				</div>	    
			    <a class="links-open-door articles" @click.stop="open('articles')">
			    	<div v-for="index in 20" :key="index" class="links-blocks" :class="['lb-' + (index*1-1)]"><div class="lb-inside">Liens 2</div></div>
			    </a>
		    </div>
		    <span>Press START for playing</span>
	    </div>
	</div>
</template>
<script>

export default {
    data: () => {
    	return {
			goPortfolio: false,
			goZoom: false
		}
    },
    methods: {
    	open: function(direction) {
    		this.goPortfolio = true
    		setTimeout(() => {
    			this.goZoom = true
    			setTimeout(() => {
    				direction=="portfolio" ? this.$router.push('portfolio') : this.$router.push('articles') 
    			}, 500);
    		}, 500)
    	}
    }
}
</script>