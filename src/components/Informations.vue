<template>
	<div class="informations">
		<div class="informations-title_size">
			<div class="informations-title_transition informations-title_transition--init" />
			<h1
				key="data"
				class="informations-title"
			>
				{{ title }}
			</h1>
		</div>
		<div class="informations-description_size">
			<div class="informations-description_transition informations-description_transition--init" />
			<div class="informations-description">
				{{ this.description }}
			</div>
		</div>
		<ul class="informations-tags">
			<li
				v-for="tag in informationsTag"
				:key="tag.id"
				class="informations-tag"
				:class="{'informations-tag--inside': (tag.v_tagUse),'informations-tag--not_inside': (!tag.v_tagUse)}"
				:data-id="tag._id"
				@click.stop="filter($event)"
			>
				{{ tag.name }}
			</li>
		</ul>
	</div>
</template>
<script>

export default {
	props: {
		'title': { default: 'Default' },
		'description': { default: 'Default' },
		'goProject': { default: false },
		'tags': { default: () => [] },
		'informationsTag': { default: () => [] },
		'activeTags': { default: false }
	},
	data: () => {
		return {
			tagsSelected: []
		};
	},
	watch: {
		tags: function() {
			var tags = document.querySelectorAll('.informations-tag');
			for(var i=tags.length; i--;) {
				if(this.tags.indexOf(tags[i].innerHTML) !== -1) {
					tags[i].classList.add('informations-tag--inside');
					tags[i].classList.remove('informations-tag--not_inside');
				} else {
					tags[i].classList.add('informations-tag--not_inside');
					tags[i].classList.remove('informations-tag--inside');
				}
			}
		},
		goProject: function() {
			var informationsDescriptionTransition = document.querySelector('.informations-description_transition'),
				informationsTitleSize = document.querySelector('.informations-title_transition');
			if(this.goProject) {
				informationsDescriptionTransition.classList.add('informations-description_transition--active');
				informationsTitleSize.classList.add('informations-title_transition--active');
			} else {
				informationsDescriptionTransition.classList.remove('informations-description_transition--init');
				informationsTitleSize.classList.remove('informations-title_transition--init');
				informationsDescriptionTransition.classList.remove('informations-description_transition--active');
				informationsTitleSize.classList.remove('informations-title_transition--active');
			}
		}
	},
	mounted: function() {
		var informationsDescriptionTransition = document.querySelector('.informations-description_transition'),
			informationsTitleSize = document.querySelector('.informations-title_transition');
		informationsDescriptionTransition.classList.remove('informations-description_transition--init');
		informationsTitleSize.classList.remove('informations-title_transition--init');
	},
	methods: {
		filter: function(e) {
			if(this.activeTags) {
				let index = this.tagsSelected.indexOf(e.target.innerHTML);
				if(index===-1) {
					this.tagsSelected.push(e.target.innerHTML);
				} else {
					this.tagsSelected.splice(index,1);
				}
				var tags = document.querySelectorAll('.informations-tag');
				for(var i=tags.length,rsl=[]; i--;) {
					if(this.tagsSelected.indexOf(tags[i].innerHTML) !== -1) {
						tags[i].classList.add('informations-tag--inside');
						tags[i].classList.remove('informations-tag--not_inside');
						rsl.push(tags[i].dataset.id);
					} else {
						tags[i].classList.add('informations-tag--not_inside');
						tags[i].classList.remove('informations-tag--inside');
					}
				}
				this.$emit('filter',rsl);
			}
		}
	}
};
</script>
