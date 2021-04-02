<template>
	<div>
		<ul
			class="tags">
			<li
				v-for="tag in tags"
				:key="tag.id"
				ref="tags"
				:class="{'tags-tag': true, desactivate: desactivate, invisible: invisible,'tags-tag--active': tags_selected.includes(tag.id)}"
				:data-id="tag._id"
				@mouseover="hover_enter"
				@click.stop="filter($event)">
				<span> {{ tag.name }} </span>
			</li>
		</ul>
		<svg>
			<defs>
				<filter id="wave">
					<feTurbulence
						ref="turbulence"
						type="fractalNoise"
						baseFrequency="1.1 1.1"
						numOctaves="1"
						result="warp" />
					<feDisplacementMap
						xChannelSelector="R"
						yChannelSelector="G"
						scale="80"
						in="SourceGraphic"
						in2="warpOffeset" />
				</filter>
			</defs>
		</svg>
	</div>
</template>
<script>
import utils from '../helper/utils.js';

export default {
	props: {
		tags: {
			type: Array,
			required: true
		},
		tags_selected: {
			type: Array,
			required: true
		},
		invisible: {
			type: Boolean,
			required: true
		},
		desactivate: {
			type: Boolean,
			default: false
		}
	},
	emits: ['new_tags_selected'],
	methods: {
		filter(event) {
			utils.toggle_class_to_element(event.target,'tags-tag--active');
			const tags_li = this.$refs.tags;
			const tags_active = tags_li.filter(tag_li => tag_li.classList.contains('tags-tag--active'));
			const id_tags_active = tags_active.map(tag => tag.dataset.id);
			this.$emit('new_tags_selected', id_tags_active);
		},
		hover_enter() {
			let vertical_frequency = 1.1;
			this.$refs.turbulence.setAttribute('baseFrequency', vertical_frequency + ' ' + vertical_frequency);
			const steps = 30;
			const interval = 10;
			for (let i = 0; i < steps; i++) {
				setTimeout(() => {
					vertical_frequency += 0.05;
					this.$refs.turbulence.setAttribute('baseFrequency', vertical_frequency + ' ' + vertical_frequency);
				}, i * interval);
			}
		}
	}
};
</script>
<style src="../assets/less/tags.less"></style>
