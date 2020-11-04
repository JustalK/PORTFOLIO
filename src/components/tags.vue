<template>
	<ul class="tags">
		<li
			v-for="(tag, index) in tags"
			:key="tag.id"
			class="tags-tag"
			:class="{'tags-tag--active': index == 0}"
			:data-id="tag._id"
			@click.stop="filter($event)">
			{{ tag.name }}
		</li>
	</ul>
</template>
<script>
import utils from '../helper/utils.js';

export default {
	props: {
		tags: {
			type: Array,
			required: true
		}
	},
	emits: ['new_tags_selected'],
	methods: {
		filter: function(event) {
			utils.toggle_class_to_element(event.target,'tags-tag--active');
			const tags = [...document.querySelectorAll('.tags-tag')];
			const tags_active = tags.filter(tag => tag.classList.contains('tags-tag--active'));
			const id_tags_active = tags_active.map(tag => tag.dataset.id);
			this.$emit('new_tags_selected', id_tags_active);
		}
	}
};
</script>
<style src="../assets/less/tags.less"></style>
