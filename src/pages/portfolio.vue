<template>
	<div
		id="PORTFOLIO"
		class="content">
		<a
			href="#"
			class="back"
			@click.stop="back">
			<div
				v-for="index in 4"
				:key="index"
				:class="['back-blocks back-blocks_' + (index*1-1)]" />
		</a>
		<span class="back_text">back</span>
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
import api from '../services/api';
import utils from '../helper/utils.js';

export default {
	components: {
		'my-informations': Informations,
		'my-sliders': Sliders,
		'my-pubs': Pubs
	},
	data: () => {
		return {
			title: 'Works',
			tags: [],
			projects: [],
			goProject: false,
			informationsTag: [],
			tagsSelectedId: [],
			activeTags: true,
			description: 'From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects.'
		};
	},
	mounted: function () {
		utils.add_class_to_element_delay('#PORTFOLIO', 'mounted', 200);
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
		update_tags(tags) {
			this.tags = tags;
		},
		update_projects(projects) {
			this.projects = projects;
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
