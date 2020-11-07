<template>
	<div
		id="PROJECT">
		<components_github
			:invisible="invisible" />
		<div>
			<components_back
				:invisible="invisible"
				@back="back" />
			<components_informations
				:description="description"
				:tags="tags"
				:tags_selected="tags_selected"
				:title="title"
				:invisible="invisible"
				:invisible_text="invisible_text"
				:help="help" />
			<components_slides
				:invisible_slide="invisible_slide"
				:title="title"
				@change_slide="change_slide" />
			<components_pubs
				:invisible="invisible" />
		</div>
	</div>
</template>
<script>
import informations from '../components/informations';
import github from '../components/main/github';
import slides from '../components/slides';
import pubs from '../components/pubs';
import back from '../components/main/back';
import api from '../services/api';
import utils from '../helper/utils.js';

export default {
	components: {
		components_informations: informations,
		components_pubs: pubs,
		components_back: back,
		components_slides: slides,
		components_github: github
	},
	data: () => {
		return {
			title: '',
			tags: [],
			tags_selected: [],
			projects: [],
			invisible: false,
			invisible_text: true,
			invisible_slide: true,
			description: '',
			slide: 0,
			are_projects_loading: false,
			help: 'Click on the image under for changing slide.'
		};
	},
	async mounted() {
		utils.add_class_to_element_delay('#PROJECT', 'mounted', 200);
		utils.add_class_to_elements_increase('.text', 'mounted', 200, 200);
		const slug = this.$route.params.slug;
		const project = await this.get_project_by_slug(slug);
		this.update_page(project);
		const tags = await this.get_all_tags();
		if (tags !== null && tags.length > 0) {
			this.update_tags(tags);
			this.update_tags_selected(project.tags);
		}
		setTimeout(() => {
			this.invisible_text = false;
			this.invisible_slide = false;
		}, 200);
	},
	methods: {
		async get_all_tags() {
			return api.get_tags();
		},
		async get_project_by_slug(slug) {
			return api.get_project_by_slug(slug);
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
		update_page(page) {
			this.description = page.long_description;
			this.title = page.title;
		},
		back() {
			utils.search_add_class_to_element('#PROJECT', 'unmounted');
			utils.search_add_class_to_element('#PROJECT', 'invisible');
			setTimeout(() => {
				this.$router.push({ name: 'portfolio' });
			},2000);
		},
		async project(id) {
			utils.add_class_to_elements_increase('.text', 'unmounted', 0, 200);
			const project = await this.get_projects_by_id(id);
			this.update_tags_selected(project.tags);
		},
		change_slide() {
			this.invisible_slide = true;
			setTimeout(async () => {
				this.invisible_slide = false;
			}, 1000);
		}
	}
};
</script>
<style src="../assets/less/project.less"></style>
