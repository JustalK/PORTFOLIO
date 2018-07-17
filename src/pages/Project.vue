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
				<div class="projects-windows">
					<div class="projects-header">
						<h2 class="projects-title">{{ this.title }}</h2>
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
    		title: '',
    		shortDescription: '',
    		longDescription: '',
    		tags: [],
    		goProject: false,
    		tags: [],
    		informationsTag: []
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
		    	var strTags = rsl[0].v_strTags.split(',');
	        	for(var i=informationsTagTmp.length;i--;) {
	        		if(strTags.indexOf(informationsTagTmp[i].name) != -1) informationsTagTmp[i].v_tagUse = true;
	        	}
	        	this.informationsTag = informationsTagTmp;
		        this.title = rsl[0].title
		        this.tags = rsl[0].v_strTags
		        this.shortDescription = rsl[0].shortDescription
		        this.longDescription = rsl[0].longDescription
		    })
    	})
    }
}
</script>
<style src="../assets/less/project.less"></style>