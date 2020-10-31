<template>
	<div
		id="PROJECTS"
		class="projects">
		<ul>
			<li
				v-for="p in projects"
				:key="p.id">
				<a
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
	}
};
</script>
<style src="../assets/less/sliders.less"></style>
