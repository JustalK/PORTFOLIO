<template>
	<div
		id="PRIVACY"
		ref="privacy">
		<components_github
			:invisible="invisible" />
		<div>
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
			<components_pubs
				:invisible="invisible" />
		</div>
	</div>
</template>
<script>
import pubs from '../components/pubs';
import github from '../components/main/github';
import back from '../components/main/back';
import text from '../components/main/text';
import api from '../services/api';
import utils from '../helper/utils.js';

export default {
	components: {
		components_text: text,
		components_pubs: pubs,
		components_back: back,
		components_github: github
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
		back() {
			utils.add_class_to_element(this.$refs.privacy, 'unmounted');
			setTimeout(() => {
				this.$router.push({name: 'privacy'});
			},1000);
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
<style src="../assets/less/privacy.less"></style>
