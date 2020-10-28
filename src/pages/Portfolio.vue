<template>
	<div
		id="PORTFOLIO"
		class="content"
	>
		<div class="content-cover content-cover_1" />
		<div class="content-cover content-cover_2" />

		<a
			href="#"
			class="back"
			@click.stop="back"
		>
			<div
				v-for="index in 4"
				:key="index"
				:class="['back-blocks back-blocks_' + (index*1-1)]"
			/>
		</a>
		<span class="back_text">back</span>
		<my-informations
			@filter="filter"
			:active-tags="activeTags"
			:go-project="goProject"
			:description="description"
			:tags="tags"
			:title="title"
			:informations-tag="informationsTag"
		/>
		<span class="filter_sentance">Use the filter to list the projects by technology or skill.</span>
		<my-sliders
			:go-project="goProject"
			:tags-selected-id="tagsSelectedId"
			:projects="projects"
		/>
		<transition
			name="fade"
			mode="out-in"
		>
			<my-pubs v-show="!goProject" />
		</transition>
	</div>
</template>
<script>
import Informations from '../components/Informations'
import Sliders from '../components/Sliders'
import Pubs from '../components/Pubs'
import API from '../services/Api'

export default {
	data: () => {
		return {
			title: 'Works',
			tags: [],
			goProject: false,
			informationsTag: [],
			projects: [],
			tagsSelectedId: [],
			activeTags: true,
			description: 'From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects.'
		}
	},
	methods: {
		back: function() {
			var cover = document.querySelectorAll('.content-cover');
			for(var i=cover.length; i--;) {
				cover[i].classList.add('content-cover--active');
			}
			setTimeout(() => {
				this.$router.push({ name: 'Home' })
			},1000);
		},
		filter: function(e) {
			for(var i=e.length,rsl=[]; i--;) {
				rsl.push('tags='+e[i]);
			}
			this.tagsSelectedId = e;
			API.getProjectsPage(0,'?'+rsl.join('&'))
				.then(rsl => {
					this.projects = rsl;
				})
		}
	},
	mounted: function () {
		API.getProjectsPage()
			.then(rsl => {
				console.log(rsl);
				this.projects = rsl;
			})
		API.getTags()
			.then(rsl => {
				this.informationsTag = rsl;
			});
	},
	components: {
		'my-informations': Informations,
		'my-sliders': Sliders,
		'my-pubs': Pubs
	}
}
</script>
<style src="../assets/less/portfolio.less"></style>
