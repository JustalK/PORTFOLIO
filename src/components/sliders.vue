<template>
	<div
		id="PROJECTS"
		class="projects">
		<ul>
			<li
				v-for="p in projects"
				:key="p.id">
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
	</div>
</template>
<script>
import utils from '../helper/utils.js';

export default {
	props: {
		projects: {
			type: Array,
			required: true
		}
	},
	methods: {
		set_background_project(project) {
			const images = project.images;
			if (utils.is_array_empty(images)) {
				return {};
			}

			return {
				'background-image': 'url(\'' + project.images[0].path + '\')'
			};
		}
	}
};
</script>
<style src="../assets/less/sliders.less"></style>
