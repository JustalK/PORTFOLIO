<template>
	<div
		id="PROJECTS"
		class="projects">
		<div
			:class="{previous: true, invisible: invisible}"
			@click.stop="change_page('previous')">
			<span>previous</span>
			<em />
		</div>
		<ul ref="projects_list">
			<li
				v-for="p in projects"
				ref="projects"
				:key="p.id"
				:data-id="p.id"
				:class="{filtered: are_projects_loading, invisible: invisible}">
				<a
					@click.stop="project($event, p.id)">
					<i class="fake_button" />
					<h2>{{ p.title }}</h2>
					<div
						ref="low"
						class="low"
						:style="set_lqip_background_project(p)" />
					<div class="panel">
						<div>
							<span>{{ p.short_description }}</span>
						</div>
					</div>
				</a>
				<div class="borders_top_right" />
				<div class="borders_bottom_left" />
			</li>
		</ul>
		<div
			:class="{next: true, invisible: invisible}"
			@click.stop="change_page('next')">
			<span>next</span>
			<em />
		</div>
	</div>
</template>
<script>
import utils from '../helper/utils.js';

export default {
	props: {
		projects: {
			type: Array,
			required: true
		},
		are_projects_loading: {
			type: Boolean,
			required: true
		},
		invisible: {
			type: Boolean,
			required: true
		}
	},
	emits: ['change_page', 'project'],
	watch: {
		async projects(projects_array) {
			await this.$nextTick();

			// This Timeout is for loading the low quality before the hq
			setTimeout(() => {
				projects_array.map((project, index) => {
					this.set_hq_background_project(project, index);
				});
			}, 1);
		}
	},
	async mounted() {
		document.addEventListener('mousemove', this.mousemove, false);
	},
	methods: {
		set_lqip_background_project(project) {
			const images = project.images;
			if (utils.is_array_empty(images)) {
				return {};
			}

			return {
				'background-image': 'url(\'' + project.images[0].path_low + '\')'
			};
		},
		set_hq_background_project(project, index) {
			const tmp = new Image();
			if (project.images !== undefined && project.images.length > 0) {
				tmp.src = project.images[0].path;
				this.$refs.projects_list.childNodes[index].childNodes[0].style.backgroundImage='url(\'' + project.images[0].path + '\')';
				tmp.addEventListener('load',() => {
					this.$refs.low[index].classList.add('loaded');
				});
			}
		},
		change_page(direction) {
			this.$emit('change_page', direction);
		},
		project(event, id) {
			utils.add_class_to_element(event.target.parentElement, 'project-selected');
			const projects_li = this.$refs.projects;
			const projects_li_unselected = projects_li.filter(project_li => project_li.dataset.id !== event.target.parentElement.dataset.id);
			utils.add_class_to_elements_increase(projects_li_unselected, 'project-unmounted', 0, 250);
			utils.add_class_to_element_delay(event.target.parentElement, 'project-mounted', 1000);
			this.$emit('project', id);
		}
	}
};
</script>
<style src="../assets/less/sliders.less"></style>
