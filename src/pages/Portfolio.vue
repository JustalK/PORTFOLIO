<template>
	<div id="PORTFOLIO" class="content">
		<div class="informations">
			<div class="informations-title_size">
				<transition name="fade" appear>
					<h1 v-if="!goProject" key="data" class="informations-title">Simple projects lists</h1>
				</transition>
			</div>
			<div class="informations-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus mi lectus, vitae lacinia metus imperdiet ut. Suspendisse placerat dui et aliquam rutrum.</div>
			<div class="informations-tags">
				<div class="informations-tag">HTML</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
				<div class="informations-tag">CSS</div>
			</div>
		</div>
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
export default {
    data: () => {
    	return {
			goProject: false
		}
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