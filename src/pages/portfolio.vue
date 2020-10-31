<template>
	<div
		id="PORTFOLIO">
		<components_back @back="back" />
		<components_informations
			:description="description"
			:tags="tags"
			:title="title"
			@filter="filter" />
		<span class="filter_sentance">Use the filter to list the projects by technology or skill.</span>
		<components_sliders :projects="projects" />
		<components_pubs />
	</div>
</template>
<script>
import informations from '../components/informations';
import pubs from '../components/pubs';
import sliders from '../components/sliders';
import back from '../components/main/back';
import api from '../services/api';
import utils from '../helper/utils.js';

export default {
	components: {
		components_informations: informations,
		components_sliders: sliders,
		components_pubs: pubs,
		components_back: back
	},
	data: () => {
		return {
			title: '',
			tags: [],
			projects: [],
			description: ''
		};
	},
	mounted: function () {
		utils.add_class_to_element_delay('#PORTFOLIO', 'mounted', 200);
		utils.add_class_to_elements_increase('.text', 'active', 200, 200);
		this.get_page(this.$route.name);
		this.get_all_tags();
		this.get_all_projects();
	},
	methods: {
		async get_all_tags() {
			const tags = await api.get_tags();
			this.update_tags(tags);
		},
		async get_all_projects() {
			const projects = await api.get_projects();
			this.update_projects(projects);
		},
		async get_page(name) {
			const page = await api.get_pages(name);
			this.update_page(page[0]);
		},
		update_tags(tags) {
			this.tags = tags;
		},
		update_projects(projects) {
			this.projects = projects;
		},
		update_page(page) {
			this.description = page.description;
			this.title = page.title;
		},
		back() {
			utils.search_add_class_to_element('#PORTFOLIO', 'unmounted');
			setTimeout(() => {
				this.$router.push({ name: 'home' });
			},1000);
		},
		async filter(id_tags_selected) {
			const projects = await api.get_projects_by_page(0, id_tags_selected);
			this.update_projects(projects);
		}
	}
};
</script>
<style src="../assets/less/portfolio.less"></style>
