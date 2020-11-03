<template>
	<div class="informations">
		<h1>
			<components_text
				:text="title" />
		</h1>
		<components_text
			:text="description" />
		<components_tags
			:tags="tags"
			@new_tags_selected="new_tags_selected" />
		<components_text
			:text="help" />
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
		},
		help: {
			type: String,
			required: true
		}
	},
	emits: ['filter'],
	methods: {
		new_tags_selected: function(id_tags_selected) {
			this.$emit('filter', id_tags_selected);
		}
	}
};
</script>
<style src="../assets/less/informations.less"></style>
