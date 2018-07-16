<template>
	<div class="projects projects--active">
		<div class="projects-left">
			<	
		</div>
		<ul class="projects-list">
			<li v-for="(p, index) in projects" class="projects-project projects-project--active" :data-tags="p.tags">
				<a href="#" class="projects-windows" @click.stop="project($event)">
					<div class="projects-header">
						<h2 class="projects-title">{{ p.title }}</h2>
					</div>
				</a>
			</li>
		</ul>
		<div class="projects-right">
			>	
		</div>
	</div>
</template>
<script>
export default {
	props: {
		'goProject': { default: false },
		'projects': { default: () => [] }
	},
    methods: {
    	project: function(e) {
    		e.target.parentNode.classList.add("projects-project--selected");
    		var tags = e.target.parentNode.dataset.tags;
    		this.$parent.tags=tags;
    		this.$parent.goProject=true;
    	}
    },
    watch: {
    	goProject: function() {
    		var projects = this.$el;
			var projectsProject = document.querySelectorAll('.projects-project');	
			var id = 0;
			console.log(projectsProject);
    		for(var i=projectsProject.length;i--;) {
    			if(projectsProject[i].classList.contains("projects-project--selected")) {
    				id=i;
    			} else { 
    				projectsProject[i].classList.add("projects-project--remove")
    			}
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
    updated: function() {
		var projects = document.querySelector(".projects");
		var projectsProject = document.querySelectorAll(".projects-project");
		projects.classList.remove("projects--active");
		for(var i=projectsProject.length;i--;) {
			projectsProject[i].classList.remove("projects-project--active");
		}
    }
}
</script>