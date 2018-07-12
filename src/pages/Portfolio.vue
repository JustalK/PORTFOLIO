<template>
	<div id="PORTFOLIO" class="content">
		<my-informations :goProject="goProject" :tags="tags" :title="title"></my-informations>
		<div class="projects">
			<div class="projects-project" data-tags="HTML,CSS">
				<a href="#" class="projects-windows" @click.stop="project(0)">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</a>
			</div>
			<div class="projects-project" data-tags="HTML,CSS">
				<a href="#" class="projects-windows" @click.stop="project(1)">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</a>
			</div>
			<div class="projects-project" data-tags="HTML,CSS">
				<a href="#" class="projects-windows" @click.stop="project(2)">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</a>
			</div>
			<div class="projects-project" data-tags="HTML,CSS">
				<a href="#" class="projects-windows" @click.stop="project(3)">
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
import Pubs from '../components/Pubs'

export default {
    data: () => {
    	return {
    		title: 'Title',
    		tags: [],
			goProject: false
		}
    },
    components: {
    	'my-informations': Informations,
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
    }
}
</script>
<style src="../assets/less/portfolio.less"></style>