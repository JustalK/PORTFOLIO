<template>
	<div :class="{informations: true, is_animated: is_animated}">
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
		<components_tags
			:tags="tags"
			:invisible="invisible"
			:desactivate="desactivate"
			:tags_selected="tags_selected"
			@new_tags_selected="new_tags_selected" />
		<components_text
			:text="help"
			:unmounted="unmounted"
			:invisible="invisible_text" />
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
		tags_selected: {
			type: Array,
			required: true
		},
		tags: {
			type: Array,
			required: true
		},
		help: {
			type: String,
			required: true
		},
		invisible: {
			type: Boolean,
			required: true
		},
		desactivate: {
			type: Boolean,
			default: false
		},
		invisible_text: {
			type: Boolean,
			required: true
		},
		unmounted: {
			type: Boolean,
			required: true
		},
		is_animated: {
			type: Boolean
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
