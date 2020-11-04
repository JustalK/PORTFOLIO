<template>
	<div
		id="PORTFOLIO">
		<div>
			<components_back @back="back" />
			<components_informations
				:description="description"
				:tags="tags"
				:title="title"
				:help="help"
				@filter="filter" />
			<components_sliders
				:projects="projects"
				:are_projects_loading="are_projects_loading"
				@change_page="change_page"
				@project="project" />
			<components_pubs />
		</div>
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
			tags_selected: [],
			projects: [],
			description: '',
			slide: 0,
			are_projects_loading: false,
			help: 'Use the filter to list the projects by technology or skill.'
		};
	},
	async mounted() {
		utils.add_class_to_element_delay('#PORTFOLIO', 'mounted', 200);
		utils.add_class_to_elements_increase('.text', 'active', 200, 200);
		this.get_page(this.$route.name);
		const tags = await this.get_all_tags();
		this.update_tags(tags);
		this.get_all_projects_with_tags(tags[0]._id);
	},
	methods: {
		async get_all_tags() {
			return api.get_tags();
		},
		async get_all_projects_with_tags(tags) {
			this.update_slide(0);
			const projects = await api.get_projects_by_page(this.slide, tags);
			this.update_projects(projects);
		},
		async get_page(name) {
			const page = await api.get_pages(name);
			this.update_page(page[0]);
		},
		update_tags(tags) {
			this.tags = tags;
		},
		update_tags_selected(tags_selected) {
			this.tags_selected = tags_selected;
		},
		update_slide(slide) {
			this.slide = slide;
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
		async filter(tags_selected) {
			this.projects_are_loading();
			this.update_tags_selected(tags_selected);
			setTimeout(async () => {
				await this.get_all_projects_with_tags(this.tags_selected);
			}, 1000);
			setTimeout(async () => {
				this.projects_are_not_loading();
			}, 1250);
		},
		projects_are_loading() {
			this.are_projects_loading = true;
		},
		projects_are_not_loading() {
			this.are_projects_loading = false;
		},
		change_page(direction) {
			const next_slide = direction === 'previous' ? this.slide - 1 : this.slide + 1;
			this.update_slide(next_slide);
			this.projects_are_loading();
			setTimeout(async () => {
				const projects = await api.get_projects_by_page(this.slide, this.tags_selected);
				this.update_projects(projects);
			}, 1000);
			setTimeout(async () => {
				this.projects_are_not_loading();
			}, 1250);
		},
		project(id) {
			utils.add_class_to_elements_increase('.text', 'unmounted', 0, 200);
			console.log(id);
		}
	}
};
</script>
<style src="../assets/less/portfolio.less"></style>
