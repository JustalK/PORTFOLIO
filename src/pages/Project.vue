<template>
	<div
		id="PROJECT"
		class="content"
	>
		<a
			href="#"
			class="back"
			@click.stop="projects"
		>
			<div
				v-for="index in 4"
				:key="index"
				:class="['back-blocks back-blocks_' + (index*1-1)]"
			/>
		</a>
		<span class="back_text">back</span>
		<my-informations
			:title="title"
			:active-tags="activeTags"
			:go-project="goProject"
			:tags="tags"
			:description="shortDescription"
			:informations-tag="informationsTag"
		/>
		<span class="filter_sentance">Click on the image below for switching to the next one.</span>
		<div class="projects projects--extend">
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
			<div class="projects-project projects-project--extend">
				<div
					class="projects-windows projects-windows_fix"
					@click="slideUp"
				>
					<div class="projects-windows_fix_cover" />
					<div class="projects-background projects-background--up">
						<div class="projects-header">
							<h2 class="projects-title" />
						</div>
					</div>
					<div class="projects-background projects-background--down">
						<div class="projects-header">
							<h2 class="projects-title" />
						</div>
					</div>
					<div class="projects-background projects-background--tooup">
						<div class="projects-header">
							<h2 class="projects-title" />
						</div>
					</div>
				</div>
			</div>
			<div
				class="projects-right"
				@click.stop="next()"
			>
				<div class="projects-right_effects">
					<span class="projects-lines_info">next</span>
					<div class="projects-lines projects-lines_1" />
					<div class="projects-lines projects-lines_2" />
					<div class="projects-lines projects-lines_3" />
				</div>
			</div>
		</div>
		<transition name="fade">
			<div
				id="additional"
				class="additional"
				v-html="this.longDescription"
			>
				{{ this.longDescription }}
			</div>
		</transition>
	</div>
</template>
<script>
import Informations from '../components/Informations';
import API from '../services/Api';

export default {
	components: {
		'my-informations': Informations
	},
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
			informationsTag: [],
			positionSlider: 1,
			activeTags: false
		};
	},
	watch: {
		article: function() {
			this.title = this.article.title;
			this.tags = this.article.v_strTags;
			this.shortDescription = this.article.shortDescription;
			this.longDescription = this.article.longDescription;

			var projectsBackground = document.querySelector('.projects-background');
			var projectsBackgroundDown = document.querySelector('.projects-background--down');
			var projectsBackgroundTitle = document.querySelector('.projects-background--up h2');
			var projectsBackgroundDownTitle = document.querySelector('.projects-background--down h2');
			projectsBackground.style.cssText = 'background-image: url(\''+this.article.images[0].path+'\')';
			projectsBackgroundTitle.innerText = this.article.images[0].name;
			projectsBackgroundDownTitle.innerText = this.article.images[this.article.images.length==1 ? 0 : 1].name;
			projectsBackgroundDown.style.cssText = 'background-image: url(\''+this.article.images[this.article.images.length==1 ? 0 : 1].path+'\')';
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
						for(var i=informationsTagTmp.length; i--;) {
							if(strTags.indexOf(informationsTagTmp[i].name) != -1) informationsTagTmp[i].v_tagUse = true;
						}
						this.informationsTag = informationsTagTmp;
						this.article = rsl;
					});
			});
	},
	methods: {
		projects: function() {
			this.goProject = true;
			var projects = document.querySelector('.projects'),
				projectsProject = document.querySelector('.projects-project');
			projects.classList.add('projects--active');
			projectsProject.classList.add('projects-project--active');
			setTimeout(() => {
				this.$router.push({ name: 'portfolio' });
			},1000);
		},
		slideUp: function() {
			this.positionSlider = this.positionSlider+1<this.article.images.length ? this.positionSlider+1 : 0;
			var projectsBackgroundTooUp = document.querySelector('.projects-background--tooup');
			var projectsBackgroundTooUpTitle = document.querySelector('.projects-background--tooup h2');
			projectsBackgroundTooUpTitle.innerText = this.article.images[this.positionSlider].name;
			projectsBackgroundTooUp.classList.remove('projects-background--tooup');
			projectsBackgroundTooUp.classList.add('projects-background--downdown');
			projectsBackgroundTooUp.style.cssText = 'background-image: url(\''+this.article.images[this.positionSlider].path+'\')';

			setTimeout(function() {
				var projectsBackgroundUp = document.querySelector('.projects-background--up');
				var projectsBackgroundDown = document.querySelector('.projects-background--down');
				var projectsBackgroundDownDown = document.querySelector('.projects-background--downdown');

				projectsBackgroundUp.classList.remove('projects-background--up');
				projectsBackgroundDown.classList.remove('projects-background--down');
				projectsBackgroundDownDown.classList.remove('projects-background--downdown');

				projectsBackgroundUp.classList.add('projects-background--tooup');
				projectsBackgroundDown.classList.add('projects-background--up');
				projectsBackgroundDownDown.classList.add('projects-background--down');
			}, 0);
		},
		next: function() {
			API.getNextProject(this.article.order)
				.then(rsl => {
					this.goProject = true;
					var projectsProject = document.querySelector('.projects-project');
					projectsProject.classList.add('projects-project--active');
					setTimeout(() => {
						this.article = rsl;
						projectsProject.classList.remove('projects-project--active');
						this.$router.push({ name: 'project', params: { name: rsl.slug } });
						this.goProject = false;
					},1000);
				});
		},
		prev: function() {
			API.getPrevProject(this.article.order)
				.then(rsl => {
					this.goProject = true;
					var projectsProject = document.querySelector('.projects-project');
					projectsProject.classList.add('projects-project--active');
					setTimeout(() => {
						this.article = rsl;
						projectsProject.classList.remove('projects-project--active');
						this.$router.push({ name: 'project', params: { name: rsl.slug } });
						this.goProject = false;
					},1000);
				});
		}
	}
};
</script>
<style src="../assets/less/project.less"></style>
