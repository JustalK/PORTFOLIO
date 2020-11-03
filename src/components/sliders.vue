<template>
	<div
		id="PROJECTS"
		class="projects">
		<div
			class="previous"
			@click.stop="change_page('previous')">
			<span>previous</span>
		</div>
		<ul>
			<li
				v-for="p in projects"
				:key="p.id"
				:class="{filtered: are_projects_loading}">
				<a
					:style="set_background_project(p)"
					@click.stop="project($event)">
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
			<div />
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
	emits: ['change_page'],
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
		}
	}
};
</script>
<style src="../assets/less/sliders.less"></style>
