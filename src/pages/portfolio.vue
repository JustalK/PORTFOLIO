<template>
	<div
		id="PORTFOLIO">
		<components_back @back="back" />
		<my-informations
			:active-tags="activeTags"
			:go-project="goProject"
			:description="description"
			:tags="tags"
			:title="title"
			:informations-tag="informationsTag"
			@filter="filter" />
		<span class="filter_sentance">Use the filter to list the projects by technology or skill.</span>
		<my-sliders
			:go-project="goProject"
			:tags-selected-id="tagsSelectedId"
			:projects="projects" />
		<transition
			name="fade"
			mode="out-in">
			<my-pubs v-show="!goProject" />
		</transition>
	</div>
</template>
<script>
import Informations from '../components/Informations';
import Sliders from '../components/Sliders';
import Pubs from '../components/Pubs';
import back from '../components/main/back';
import api from '../services/api';
import utils from '../helper/utils.js';

export default {
	components: {
		'my-informations': Informations,
		'my-sliders': Sliders,
		'my-pubs': Pubs,
		components_back: back
	},
	data: () => {
		return {
			title: null,
			tags: [],
			projects: [],
			goProject: false,
			informationsTag: [],
			tagsSelectedId: [],
			activeTags: true,
			description: null
		};
	},
	mounted: function () {
		utils.add_class_to_element_delay('#PORTFOLIO', 'mounted', 200);
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
			console.log(page);
			this.description = page.description;
			this.title = page.title;
		},
		back: function() {
			utils.add_class_to_element('#PORTFOLIO', 'unmounted');
			setTimeout(() => {
				this.$router.push({ name: 'home' });
			},1000);
		},
		filter: function(e) {
			for(var i=e.length,rsl=[]; i--;) {
				rsl.push('tags='+e[i]);
			}
			this.tagsSelectedId = e;
			api.get_projects_by_pagePage(0,'?'+rsl.join('&'))
				.then(rsl => {
					this.projects = rsl;
				});
		}
	}
};
</script>
<style src="../assets/less/portfolio.less"></style>
