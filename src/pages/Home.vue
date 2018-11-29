<template>
	<div id="HOME" class="home">
	    <div class="home-cover home-cover_1 home-cover_1 home-cover--active"></div>
        <div class="home-cover home-cover_2 home-cover--active"></div> 
		<div class="wrap" :class={active:goZoom}>
			<div class="bloc left" :class={active:goPortfolio}>
				<div>
					<span class="intro">
                       <span class="intro-first_sentance">Hello, I'm <a href="#" class="intro-name">Justal Kevin</a>.</span>
                       <span class="intro-second_sentance">I'm a full stack web developer.</span>
                       <span class="intro-third_sentance">Contact me at <a href="#" class="intro-email">justal.kevin@gmail.com</a></span>
					</span>
		    	</div>
			    <a class="links-open-door left portfolio" @click.stop="open('portfolio')">
			    	<div v-for="index in 20" :key="index" class="links-blocks" :class="['lb-' + (index*1-1)]"><div class="lb-inside">Liens 2</div></div>
			    	<div class="links-background">Liens 2</div>
			    </a>
		    </div>
		    <div class="bloc right" :class={active:goPortfolio} ref="bloc-right">
		    	<div>
					<span class="intro">
                       <span class="intro-first_sentance">Hello, I'm <a href="#" class="intro-name">Justal Kevin</a>.</span>
                       <span class="intro-second_sentance">I'm a full stack web developer.</span>
                       <span class="intro-third_sentance">Contact me at <a href="#" class="intro-email"><div class="intro-links_effect"></div>justal.kevin@gmail.com</a></span>
					</span>
				</div>	    
			    <a class="links-open-door right articles" @click.stop="open('articles')">
			    	<div v-for="index in 20" :key="index" class="links-blocks" :class="['lb-' + (index*1-1)]"><div class="lb-inside">Liens 2</div></div>
			    	<div class="links-background">Liens 2</div>
			    </a>
		    </div>
	    </div>
	</div>
</template>
<script>

export default {
    data: () => {
    	return {
			goPortfolio: false,
			goZoom: false,
			intro: "Hello, I'm Justal Kevin.<br>I'm a full stack web developer."
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
    },
    mounted: function () {
        setTimeout(() => {
            var cover = document.querySelectorAll(".home-cover");
            for(var i=cover.length;i--;) {
                cover[i].classList.remove("home-cover--active");
            }
        }, 200);
    }
}
</script>
<style src="../assets/less/home.less"></style>