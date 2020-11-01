<template>
	<div
		id="PROJECTS"
		class="projects">
		<ul>
			<li
				v-for="p in projects"
				:key="p.id">
				<a
					:style="bg(p)"
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
export default {
	props: {
		projects: {
			type: Array,
			required: true
		}
	},
	methods: {
		bg(project) {
			const images = project.images;
			if (images === null || images.length === 0) {
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
