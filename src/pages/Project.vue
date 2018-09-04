<template>
	<div id="PROJECT" class="content">
		<a href="#" class="back" @click.stop="projects">
			<div v-for="index in 4" :key="index" :class="['back-blocks back-blocks_' + (index*1-1)]"></div>
		</a>
		<my-informations :title="title" :goProject="goProject" :tags="tags" :description="shortDescription" :informationsTag="informationsTag"></my-informations>
		<div class="projects projects--extend">
			<div class="projects-left">
				
			</div>
			<div class="projects-project projects-project--extend">
				<div class="projects-windows" @click="slideUp">
					<div class="projects-background projects-background--up">
						<div class="projects-header">
							<h2 class="projects-title">{{ this.legend }}</h2>
						</div>
					</div>
					<div class="projects-background projects-background--down">
						<div class="projects-header">
							<h2 class="projects-title">{{ this.legend2 }}</h2>
						</div>
					</div>
					<div class="projects-background projects-background--tooup">
						<div class="projects-header">
							<h2 class="projects-title">{{ this.legend2 }}</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="projects-right">
					
			</div>
		</div>
		<transition name="fade">
			<div class="additional" v-html="this.longDescription">
				{{ this.longDescription }}
			</div>
		</transition>
	</div>
</template>
<script>
import Informations from '../components/Informations'
import API from '../services/Api'

export default {
    data: () => {
    	return {
    	    article: '',
    		title: '',
            legend: '',
            legend2: '',
    		shortDescription: '',
    		longDescription: '',
    		tags: [],
    		goProject: false,
    		tags: [],
    		informationsTag: [],
    		positionSlider: 0
		}
    },
    components: {
    	'my-informations': Informations
    },
	methods: {
    	projects: function(id) {
    		this.goProject = true;
    	   	var projects = document.querySelector(".projects"),
    		projectsProject = document.querySelector(".projects-project");
			projects.classList.add("projects--active")
    		projectsProject.classList.add("projects-project--active")
    		setTimeout(() => {
    			this.$router.push({ name: 'portfolio' })
	    	},1000);
    	},
    	slideUp: function() {
    		this.positionSlider = this.positionSlider+1<this.article.images.length ? this.positionSlider++ : 0;
    		var projectsBackgroundTooUp = document.querySelector(".projects-background--tooup");
            this.legend2 = this.article.images[this.positionSlider].name;
			projectsBackgroundTooUp.classList.remove("projects-background--tooup");
			projectsBackgroundTooUp.classList.add("projects-background--downdown");
    		projectsBackgroundTooUp.style.cssText = "background-image: url('"+this.article.images[this.positionSlider].path+"')";
			
    		setTimeout(function() {
	    		var projectsBackgroundUp = document.querySelector(".projects-background--up");
	    		var projectsBackgroundDown = document.querySelector(".projects-background--down");
	    		var projectsBackgroundDownDown = document.querySelector(".projects-background--downdown");
	    		
	    		projectsBackgroundUp.classList.remove("projects-background--up");
	    		projectsBackgroundDown.classList.remove("projects-background--down");
	    		projectsBackgroundDownDown.classList.remove("projects-background--downdown");
	    		
	    		projectsBackgroundUp.classList.add("projects-background--tooup");
	    		projectsBackgroundDown.classList.add("projects-background--up");
	    		projectsBackgroundDownDown.classList.add("projects-background--down");
    		}, 0);
    	}
    },
    mounted: function () {
    	var name = this.$route.params.name;
    	var informationsTagTmp = [];
	    API.getTags()
    	.then(rsl => {
			informationsTagTmp = rsl;
	    	API.getProject(name)
		    	.then(rsl => {
		    	var strTags = rsl.v_strTags.split(',');
	        	for(var i=informationsTagTmp.length;i--;) {
	        		if(strTags.indexOf(informationsTagTmp[i].name) != -1) informationsTagTmp[i].v_tagUse = true;
	        	}
	        	this.article = rsl;
	        	this.informationsTag = informationsTagTmp;
		        this.title = rsl.title
		        this.tags = rsl.v_strTags
		        this.legend = rsl.images[0].name
		        this.shortDescription = rsl.shortDescription
		        this.longDescription = rsl.longDescription
		        
		        var projectsBackground = document.querySelector(".projects-background");
		        var projectsBackgroundDown = document.querySelector(".projects-background--down");
		        projectsBackground.style.cssText = "background-image: url('"+rsl.images[0].path+"')";
                this.legend2 = rsl.images[rsl.images.lenght==1 ? 0 : 1].name;
		        projectsBackgroundDown.style.cssText = "background-image: url('"+rsl.images[rsl.images.lenght==1 ? 0 : 1].path+"')";
		    })
    	})
    }
}
</script>
<style src="../assets/less/project.less"></style>