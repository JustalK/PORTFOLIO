<template>
	<div
		id="PROJECT"
		ref="project"
		:class="{is_animated: true, invisible: invisible_parent, unmounted: unmounted_parent, locked: locked}">
		<div>
			<components_links
				:invisible="invisible"
				:is_animated="is_animated" />
			<components_menu
				:invisible="invisible"
				@back="back"
				@change_by_menu="change_by_menu" />
			<components_back
				:is_animated="is_animated"
				:invisible="invisible"
				@back="back" />
			<components_informations
				:description="description"
				:tags="tags"
				:tags_selected="tags_selected"
				:is_animated="is_animated"
				:title="title"
				:unmounted="unmounted"
				:desactivate="desactivate"
				:invisible="invisible"
				:invisible_text="invisible_text"
				:help="help" />
			<components_slides
				:title="title"
				:client="client" 
				:industry="industry"
				:position="position"
				:background_image="background_image"
				:is_animated="is_animated"
				:all_slides="all_slides" />
			<components_pubs
				:invisible="invisible" />
		</div>
	</div>
</template>
<script>
import informations from '../components/informations';
import slides from '../components/slides';
import pubs from '../components/pubs';
import back from '../components/main/back';
import links from '../components/main/links';
import menu from '../components/main/menu';
import api from '../services/api';
import utils from '../helper/utils.js';
import helper_meta from '../helper/meta.js';
import helper_navigation from '../helper/navigation.js';

export default {
	components: {
		components_informations: informations,
		components_menu: menu,
		components_pubs: pubs,
		components_back: back,
		components_slides: slides,
		components_links: links
	},
	metaInfo() {
		return helper_meta.get_meta('portfolio/' + this.$route.params.slug, this.meta_title, this.meta_description);
	},
	data: () => {
		return {
			meta_title: '',
			meta_description: '',
			title: 'Loading...',
			tags: [],
			tags_selected: [],
			invisible_parent: false,
			invisible: false,
			invisible_text: true,
			is_animated: false,
			desactivate: true,
			locked: false,
			unmounted_parent: false,
			unmounted: false,
			description: 'Loading...',
			client: 'Loading...',
			industry: 'Loading...',
			position: 'Loading...',
			background_image: {},
			all_slides: [],
			are_projects_loading: false,
			help: 'Click on the image under for changing slide.'
		};
	},
	async created() {
		const tags = this.$route.params.tags ? this.$route.params.tags : await this.get_all_tags();
		const slug = this.$route.params.slug;
		const project = this.$route.params.project ? this.$route.params.project : await this.get_project_by_slug(slug);
		this.is_animated = this.$route.params.is_animated ? this.$route.params.is_animated : false;

		this.meta_title = project.title;
		this.meta_description = project.short_description;

		this.update_page(project);
		this.background_image = project.background_image;

		if (tags !== null && tags.length > 0) {
			this.update_tags(tags);
			this.update_tags_selected(project.tags);
		}

		await this.$nextTick();
		if (!this.is_animated) {
			setTimeout(() => {
				this.invisible_text = false;
			}, 1);
		} else {
			setTimeout(() => {
				this.is_animated = false;
				setTimeout(() => {
					this.invisible_text = false;
				}, 1000);
			}, 1);
		}
	},
	async mounted() {
		utils.add_class_to_element_delay(this.$refs.project, 'mounted', 200);
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
		update_page(page) {
			this.description = page.long_description;
			this.title = page.title;
			this.client = page.client;
			this.industry = page.industry;
			this.position = page.position;
			this.all_slides = page.slides;
			this.slide = page.slides !== undefined ? page.slides[0] : {};
		},
		change_by_menu(slug) {
			this.change_page(slug);
		},
		back() {
			this.change_page('portfolio');
		},
		change_page(slug) {
			this.unmounted_parent = true;
			this.invisible_parent = true;
			this.locked = true;
			helper_navigation.change_page(this, slug);
		},
		async project(id) {
			this.unmounted = true;
			const project = await this.get_projects_by_id(id);
			this.update_tags_selected(project.tags);
		}
	}
};
</script>
<style src="../assets/less/project.less"></style>
