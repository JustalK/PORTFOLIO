<template>
	<div class="informations">
		<h1>
			<components_text
				:text="this.title" />
		</h1>
		<components_text
			:text="this.description" />
		<components_tags
			:tags="this.tags"
			@new_tags_selected="new_tags_selected" />
	</div>
</template>
<script>
import text from './main/text';
import tags from './tags';

export default {
	components: {
		components_text: text,
		components_tags: tags
	},
	props: {
		'title': {
			type: String,
			required: true
		},
		'description': {
			type: String,
			required: true
		},
		tags: {
			type: Array,
			required: true
		}
	},
	methods: {
		new_tags_selected: function(id_tags_selected) {
			this.$emit('filter', id_tags_selected);
		}
	}
};
</script>
<style src="../assets/less/informations.less"></style>
