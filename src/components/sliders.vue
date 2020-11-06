<template>
	<div
		id="PROJECTS"
		class="projects">
		<div
			class="previous"
			@click.stop="change_page('previous')">
			<span>previous</span>
			<em />
		</div>
		<ul>
			<li
				v-for="p in projects"
				:key="p.id"
				:data-id="p.id"
				:class="{filtered: are_projects_loading}">
				<a
					:style="set_background_project(p)"
					@click.stop="project(p.id)">
					<i class="fake_button" />
					<h2>{{ p.title }}</h2>
					<div>
						<span>{{ p.short_description }}</span>
					</div>
				</a>
			</li>
		</ul>
		<div
			class="next"
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
		}
	},
	emits: ['change_page', 'project'],
	methods: {
		set_background_project(project) {
			const images = project.images;
			if (utils.is_array_empty(images)) {
				return {};
			}

			return {
				'background-image': 'url(\'' + project.images[0].path + '\')'
			};
		},
		change_page(direction) {
			this.$emit('change_page', direction);
		},
		project(id) {
			utils.add_class_to_element_delay('#PROJECTS li[data-id="' + id + '"]', 'project-selected', 0);
			utils.add_class_to_elements_increase('#PROJECTS li:not([data-id="' + id + '"])', 'project-unmounted', 0, 250);
			utils.add_class_to_element_delay('#PROJECTS li[data-id="' + id + '"]', 'project-mounted', 1000);
			this.$emit('project', id);
		}
	}
};
</script>
<style src="../assets/less/sliders.less"></style>
