<template>
	<div
		id="PUBS"
		:class="{invisible: invisible}">
		<span>Wanna talk about something ? Feel free to contact me !</span>
		<span>{{ email }}</span>
	</div>
</template>
<script>
import api from '../services/api';

export default {
	props: {
		invisible: {
			type: Boolean,
			required: true
		}
	},
	data: () => {
		return {
			email: ''
		};
	},
	async mounted() {
		await this.get_my_identity();
	},
	methods: {
		async get_my_identity() {
			const my_identity = await api.get_my_identity();
			this.update_email(my_identity.email);
		},
		update_email(email) {
			this.email = email;
		}
	}
};
</script>
<style src="../assets/less/pubs.less"></style>
