<template>
	<div class="projects projects--active">
		<div
			class="projects-left"
			@click.stop="prev()"
		>
			<div class="projects-left_effects">
				<span class="projects-lines_info">prev</span>
				<div class="projects-lines projects-lines_1" />
				<div class="projects-lines projects-lines_2" />
				<div class="projects-lines projects-lines_3" />
			</div>
		</div>
		<ul class="projects-list">
			<li
				v-for="p in projectsSelecteds"
				:key="p.id"
				class="projects-project projects-project--active projects-project--change"
				:data-name="p.slug"
				:data-tags="p.v_strTags"
			>
				<a
					href="#"
					class="projects-windows"
					@click.stop="project($event)"
				>
					<div class="projects-header">
						<h2 class="projects-title">{{ p.title }}</h2>
					</div>
					<div class="projects-windowsbg" />
					<div class="projects-informations">
						<div class="projects-informations_description">{{ p.shortDescription }}</div>
					</div>
				</a>
			</li>
		</ul>
		<div
			class="projects-right"
			@click.stop="next()"
		>
			<div class="projects-left_effects">
				<span class="projects-lines_info">next</span>
				<div class="projects-lines projects-lines_1" />
				<div class="projects-lines projects-lines_2" />
				<div class="projects-lines projects-lines_3" />
			</div>
		</div>
	</div>
</template>
<script>
import API from '../services/Api'

export default {
	props: {
		'goProject': { default: false },
		'projects': { default: () => [] },
		'tagsSelectedId': { default: () => [] }
	},
	data: () => {
		return {
			skip: 0,
			lock: false,
			projectsSelecteds: { default: () => [] }
		}
	},
	methods: {
		project: function(e) {
			var projectsInformations = document.querySelectorAll('.projects-informations');
			for(var i=projectsInformations.length; i--;) {
				projectsInformations[i].classList.add('projects-informations--remove');
			}
			e.target.parentNode.classList.add('projects-project--selected');
			var tags = e.target.parentNode.dataset.tags;
			this.$parent.tags=tags;
			for(i=this.$parent.informationsTag.length; i--;) {
				if(tags.split(',').indexOf(this.$parent.informationsTag[i].name) !== -1) this.$parent.informationsTag[i].v_tagUse = true;
			}
			this.$parent.goProject=true;
		},
		next: function() {
			if(!this.lock) {
				this.lock=true;
				var projectsProject = document.querySelectorAll('.projects-project');
				for(var i=projectsProject.length; i--;) {
					projectsProject[i].classList.add('projects-project--change');
				}
				this.skip++;
				let rsl = [];
				for(i=this.tagsSelectedId.length; i--;) {
					rsl.push('tags='+this.tagsSelectedId[i])
				}
				setTimeout(() => {
					API.getProjectsPage(this.skip,'?'+rsl.join('&'))
						.then(rsl => {
							this.projectsSelecteds = rsl;
						})
				},500)
			}
		},
		prev: function() {
			if(!this.lock) {
				this.lock=true;
				var projectsProject = document.querySelectorAll('.projects-project');
				for(var i=projectsProject.length; i--;) {
					projectsProject[i].classList.add('projects-project--change');
				}
				this.skip--;
				let rsl = [];
				for(i=this.tagsSelectedId.length; i--;) {
					rsl.push('tags='+this.tagsSelectedId[i])
				}
				setTimeout(() => {
					API.getProjectsPage(Math.max(this.skip),'?'+rsl.join('&'))
						.then(rsl => {
							this.projectsSelecteds = rsl;
						})
				},500)
			}
		}
	},
	watch: {
		goProject: function() {
			var projects = this.$el;
			var projectsProject = document.querySelectorAll('.projects-project');
			var id = 0;
			for(var i=projectsProject.length; i--;) {
				if(projectsProject[i].classList.contains('projects-project--selected')) {
					id=i;
				} else {
					projectsProject[i].classList.add('projects-project--remove')
				}
			}
			setTimeout(() => {
				projects.classList.add('projects--extend')
				projectsProject[id].classList.add('projects-project--extend')
				var paramName = projectsProject[id].dataset.name;
				setTimeout(() => {
					this.$router.push({ name: 'project', params: { name: paramName } })
				},500);
			}, 500);
		},
		projects: function() {
			this.projectsSelecteds= this.projects;
		},
		tagsSelectedId: function() {
			this.skip = 0;
		},
		projectsSelecteds: function() {
			setTimeout(() => {
				var projectsProject = document.querySelectorAll('.projects-project');
				for(var i=projectsProject.length; i--;) {
					projectsProject[i].classList.remove('projects-project--change');
				}
				this.lock=false;
			},100);
		}
	},
	updated: function() {
		var projects = document.querySelector('.projects');
		var projectsProject = document.querySelectorAll('.projects-project');
		var projectsWindows = document.querySelectorAll('.projects-windowsbg');
		projects.classList.remove('projects--active');
		for(var i=projectsProject.length; i--;) {
			projectsProject[i].classList.remove('projects-project--active');
		}
		var backgroundHQ = [];
		let countI=projectsWindows.length;
		for(i=0; i<countI; i++) {
			backgroundHQ.push(new Image());
			backgroundHQ[i].src = this.projectsSelecteds[i].images[0].path;
			backgroundHQ[i].addEventListener('load',function() {
				projectsWindows[this].style.backgroundImage = 'url('+backgroundHQ[this].src+')';
				projectsWindows[this].classList.add('projects-windowsbg--active');
			}.bind(i));
		}
	}
}
</script>
