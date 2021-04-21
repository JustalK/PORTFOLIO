<template>
	<div
		id="PORTFOLIO"
		ref="portfolio"
		:class="{mounted: mounted, unmounted: unmounted_parent, locked: locked}">
		<div>
			<components_links
				:invisible="invisible" />
			<components_back
				:invisible="invisible"
				@back="back" />
			<components_menu
				:invisible="invisible"
				@back="back"
				@change_by_menu="change_by_menu" />
			<components_informations
				:description="description"
				:tags="tags"
				:tags_selected="tags_selected"
				:title="title"
				:invisible="invisible"
				:invisible_text="invisible"
				:unmounted="unmounted"
				:help="help"
				@filter="filter" />
			<components_sliders
				:projects="projects"
				:invisible="invisible"
				:are_projects_loading="are_projects_loading"
				@change_page="change_page"
				@project="project" />
			<components_pubs :invisible="invisible" />
		</div>
	</div>
</template>
<script>
import informations from '../components/informations';
import pubs from '../components/pubs';
import sliders from '../components/sliders';
import back from '../components/main/back';
import links from '../components/main/links';
import menu from '../components/main/menu';
import api from '../services/api';
import helper_meta from '../helper/meta.js';
import helper_navigation from '../helper/navigation.js';

export default {
	components: {
		components_informations: informations,
		components_menu: menu,
		components_sliders: sliders,
		components_pubs: pubs,
		components_back: back,
		components_links: links
	},
	metaInfo() {
		return helper_meta.get_meta(this.$route.name, this.meta_title, this.meta_description);
	},
	data: () => {
		return {
			meta_title: '',
			meta_description: '',
			title: '',
			invisible: true,
			unmounted_parent: false,
			unmounted: false,
			mounted: false,
			locked: false,
			tags: [],
			tags_selected: [],
			projects: [],
			description: '',
			slide: 0,
			are_projects_loading: false,
			timeout_update_projects: null,
			timeout_update_projects_loading: null,
			help: 'Use the filter to list the projects by technology or skill.'
		};
	},
	async created() {
		const tags = await this.get_all_tags();
		const page = await this.get_page(this.$route.name);
		if (page.length > 0) {
			this.meta_title = page[0].meta_title;
			this.meta_description = page[0].meta_description;
		}

		if (tags !== null && tags.length > 0) {
			const projects = await this.get_all_projects_with_tags(tags[0]._id);
			this.update_tags(tags);
			this.update_tags_selected([tags[0]._id]);
			this.update_projects(projects);
		}

		if (page !== null) {
			this.update_page(page[0]);
		}
		setTimeout(() => {
			this.invisible = false;
		}, 1);
	},
	mounted() {
		this.mounted = true;
	},
	methods: {
		async get_all_tags() {
			return api.get_tags();
		},
		async get_page(name) {
			return api.get_pages(name);
		},
		async get_all_projects_with_tags(tags) {
			return api.get_projects_by_page(this.slide, tags);
		},
		async get_projects_by_id(id) {
			return api.get_project_by_id(id);
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
		change_by_menu(slug) {
			this.change_page_by_slug(slug);
		},
		back() {
			this.change_page_by_slug('home');
		},
		change_page_by_slug(slug) {
			this.locked = true;
			this.unmounted_parent = true;
			helper_navigation.change_page(this, slug);
		},
		async filter(tags_selected) {
			clearTimeout(this.timeout_update_projects);
			clearTimeout(this.timeout_update_projects_loading);
			this.are_projects_loading = true;
			this.update_tags_selected(tags_selected);
			await this.$nextTick();
			this.update_slide(0);
			const projects = await this.get_all_projects_with_tags(this.tags_selected);
			this.timeout_update_projects = setTimeout(() => {
				this.update_projects(projects);
			}, 1000);
			this.timeout_update_projects_loading = setTimeout(() => {
				this.are_projects_loading = false;
			}, 1050);
		},
		async change_page(direction) {
			clearTimeout(this.timeout_update_projects);
			clearTimeout(this.timeout_update_projects_loading);
			this.are_projects_loading = true;
			const next_slide = direction === 'previous' ? this.slide - 1 : this.slide + 1;
			this.update_slide(next_slide);
			await this.$nextTick();
			const projects = await api.get_projects_by_page(this.slide, this.tags_selected);
			this.timeout_update_projects = setTimeout(() => {
				this.update_projects(projects);
			}, 1000);
			this.timeout_update_projects_loading = setTimeout(() => {
				this.are_projects_loading = false;
			}, 1050);
		},
		async project(id) {
			this.locked = true;
			this.unmounted = true;
			const project = await this.get_projects_by_id(id);
			this.update_tags_selected(project.tags);
			setTimeout(() => {
				this.$router.push({ name: 'project', params: {slug: project.slug, project: project, tags: this.tags}});
			}, 2000);
		}
	}
};
</script>
<style src="../assets/less/portfolio.less"></style>
