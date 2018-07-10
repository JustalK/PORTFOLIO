<template>
	<div id="PORTFOLIO" class="content">
		<transition name="fade">
			<div class="informations">
				<h1 class="informations-title">Simple Test</h1>
				<div class="informations-description">Simple Test</div>
			</div>
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
    </div>
</template>
<script>
export default {
    data: () => {
    	return {
			goProject: false
		}
    },
    methods: {
    	project: function(id) {
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