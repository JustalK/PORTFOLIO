<template>
	<div id="PORTFOLIO" class="content">
		<transition name="fade" mode="out-in">
			<my-informations v-show="!goProject" :title="title"></my-informations>
		</transition>
		<div class="projects">
			<div class="projects-project">
				<a href="#" class="projects-windows" @click.stop="project(0)">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</a>
			</div>
			<div class="projects-project">
				<a href="#" class="projects-windows" @click.stop="project(1)">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</a>
			</div>
			<div class="projects-project">
				<a href="#" class="projects-windows" @click.stop="project(2)">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</a>
			</div>
			<div class="projects-project">
				<a href="#" class="projects-windows" @click.stop="project(3)">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</a>
			</div>
    	</div>
    	<div class="pubs">
    		<p class="pubs-contact">
    			<b>Wanna talk about something ? Feel free to contact me !</b><br />
    			latsuj@gmail.com<br />
    			linkedinglink<br />
    			contactformlink
    		</p>
    	</div>
    </div>
</template>
<script>
import Informations from '../components/Informations'

export default {
    data: () => {
    	return {
    		title: 'AzeAze',
			goProject: false
		}
    },
    components: {
    	'my-informations': Informations
    },
    methods: {
    	project: function(id) {
    		this.goProject = true;
    		var projects = document.querySelector(".projects");
    		var projectsProject = document.querySelectorAll(".projects-project");
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