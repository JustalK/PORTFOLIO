<template>
	<div id="PORTFOLIO" class="content">
		<my-informations :goProject="goProject" :tags="tags" :title="title"></my-informations>
		<div class="projects projects--active">
			<div v-for="(p, index) in projects" class="projects-project projects-project--active" data-tags="HTML,CSS">
				<a href="#" class="projects-windows" @click.stop="project(index)">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</a>
			</div>
    	</div>
    	<transition name="fade" mode="out-in">
    		<my-pubs v-show="!goProject"></my-pubs>
    	</transition>
    </div>
</template>
<script>
import Informations from '../components/Informations'
import Sliders from '../components/Sliders'
import Pubs from '../components/Pubs'

export default {
    data: () => {
    	return {
    		title: 'Title',
    		tags: [],
			goProject: false,
			projects: ["0","1","2","3"]
		}
    },
    components: {
    	'my-informations': Informations,
    	'my-sliders': Sliders,
    	'my-pubs': Pubs
    },
    methods: {
    	project: function(id) {
    		this.goProject = true;
    		var projects = document.querySelector(".projects");
    		var projectsProject = document.querySelectorAll(".projects-project");
    		var tags = projectsProject[id].dataset.tags;
    		this.tags = tags.split(',');
    		for(var i=projectsProject.length;i--;) {
    			i!=id && projectsProject[i].classList.add("projects-project--remove")
    		}
    		setTimeout(() => {
	    		projects.classList.add("projects--extend")
	    		projectsProject[id].classList.add("projects-project--extend")
	    		setTimeout(() => {
	    			this.$router.push('project')
	    		},500);
    		}, 500);
    	}
    },
    mounted: function() {
		var projects = document.querySelector(".projects");
		var projectsProject = document.querySelectorAll(".projects-project");
		projects.classList.remove("projects--active");
		for(var i=projectsProject.length;i--;) {
			projectsProject[i].classList.remove("projects-project--active");
		}
    }
}
</script>
<style src="../assets/less/portfolio.less"></style>