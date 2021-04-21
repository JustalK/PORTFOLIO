<template>
	<div
		id="RESUME"
		ref="resume"
		:class="{unmounted: unmounted_parent, locked: locked}">
		<div>
			<components_links
				:invisible="invisible" />
			<components_menu
				:invisible="invisible"
				@back="back"
				@change_by_menu="change_by_menu" />
			<components_back
				:invisible="invisible"
				@back="back" />
			<h1>
				<components_text
					:text="title"
					:unmounted="unmounted"
					:invisible="invisible_text" />
			</h1>
			<components_text
				:text="description"
				:unmounted="unmounted"
				:invisible="invisible_text" />
			<iframe
				ref="iframe"
				:class="{invisible: invisible}"
				src="../libs/web/viewer.html?file=resume.pdf" />
			<components_pubs
				:invisible="invisible" />
		</div>
	</div>
</template>
<script>
import pubs from '../components/pubs';
import menu from '../components/main/menu';
import back from '../components/main/back';
import text from '../components/main/text';
import links from '../components/main/links';
import api from '../services/api';
import helper_navigation from '../helper/navigation.js';

export default {
	components: {
		components_text: text,
		components_pubs: pubs,
		components_back: back,
		components_menu: menu,
		components_links: links
	},
	data: () => {
		return {
			title: '',
			description: '',
			invisible: true,
			invisible_text: true,
			unmounted: false
		};
	},
	async created() {
		const page = await this.get_page(this.$route.name);

		if (page !== null) {
			this.update_page(page[0]);
		}

		await this.$nextTick();
		setTimeout(() => {
			this.invisible = false;
			this.invisible_text = false;
		}, 1);
	},
	methods: {
		change_by_menu(slug) {
			this.change_page_by_slug(slug);
		},
		back() {
			this.change_page_by_slug('home');
		},
		change_page_by_slug(slug) {
			this.unmounted_parent = true;
			this.locked = true;
			helper_navigation.change_page(this, slug);
		},
		async get_page(name) {
			return api.get_pages(name);
		},
		update_page(page) {
			this.title = page.title;
			this.description = page.description;
		}
	}
};
</script>
<style src="../assets/less/resume.less"></style>
