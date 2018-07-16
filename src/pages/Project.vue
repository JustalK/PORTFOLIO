<template>
	<div id="PROJECT" class="content">
		<a href="#" class="back" @click.stop="projects">
			<div v-for="index in 4" :key="index" :class="['back-blocks back-blocks_' + (index*1-1)]"></div>
		</a>
		<my-informations :title="title" :goProject="goProject"></my-informations>
		<div class="projects projects--extend">
			<div class="projects-left">
				
			</div>
			<div class="projects-project projects-project--extend">
				<div class="projects-windows">
					<div class="projects-header">
						<h2 class="projects-title">Simple Test</h2>
					</div>
				</div>
			</div>
			<div class="projects-right">
					
			</div>
		</div>
		<transition name="fade">
			<div class="additional">
				<h3>azdadaz dazd azd azd </h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elementum nunc, ac lobortis risus. Nullam tincidunt mi arcu, eget bibendum velit viverra eu. Cras ac quam nibh. Duis mauris nisl, luctus vitae arcu at, efficitur luctus libero. Pellentesque fermentum arcu diam, eu elementum turpis venenatis vitae. Donec sem ipsum, lacinia vel vestibulum vel, mattis in felis. Fusce ac metus purus. Fusce placerat mattis tempus. Morbi dictum tortor magna, ac cursus velit iaculis at. Donec viverra massa augue, eu mattis nunc rutrum non. Ut sed nunc vitae velit hendrerit suscipit sed sed erat. Vestibulum consectetur porta libero et consectetur.
	
					Pellentesque vitae felis eu enim feugiat tristique in sit amet dui. Donec dapibus cursus ullamcorper. Curabitur nisi tellus, porta non arcu nec, aliquet rutrum ligula. Proin non varius justo. Sed diam arcu, tempus quis molestie vitae, congue eget nisl. Vestibulum viverra leo varius semper sodales. Pellentesque mauris purus, lobortis sed vestibulum vitae, posuere at nisl. Sed blandit rhoncus nulla eu malesuada. Maecenas ut eros quis est mollis suscipit. Nullam lacinia, leo commodo dapibus molestie, lacus nibh maximus nisi, nec ornare quam ipsum sit amet eros. Donec vestibulum ut orci vitae sagittis. Fusce commodo lacus odio. Donec vitae mauris hendrerit, mattis nibh nec, cursus mauris. Vestibulum sollicitudin posuere elementum. Quisque aliquam massa vel tortor suscipit, nec consequat tortor luctus. Vivamus nec aliquam erat.
				</p>
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
    		goProject: false
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
    			this.$router.push('portfolio')
	    	},1000);
    	}
    },
    created: function () {
    	var name = this.$route.params.name;
    	API.getProject(name)
	    	.then(rsl => {
	        this.title = rsl[0].title
	    })
    }
}
</script>
<style src="../assets/less/project.less"></style>