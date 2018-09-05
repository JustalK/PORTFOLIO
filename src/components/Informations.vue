<template>	
	<div class="informations">
		<div class="informations-title_size">
			<div class="informations-title_transition informations-title_transition--init"></div>
			<h1 key="data" class="informations-title">{{title}}</h1>
		</div>
		<div class="informations-description_size">
			<div class="informations-description_transition informations-description_transition--init"></div>
			<div class="informations-description">{{ this.description }}</div>
		</div>
		<ul class="informations-tags">
			<li v-for="tag in informationsTag" class="informations-tag" :class="{'informations-tag--inside': (tag.v_tagUse),'informations-tag--not_inside': (!tag.v_tagUse)}">{{ tag.name }}</li>
		</ul>
	</div>
</template>
<script>
import API from '../services/Api'

export default {
	props: {
		'title': { default: 'Default' },
		'description': { default: 'Default' },
		'goProject': { default: false },
		'tags': { default: () => [] },
		'informationsTag': { default: () => [] }
	},
    watch: {
    	tags: function() {
    		var tags = document.querySelectorAll('.informations-tag');
    		for(var i=tags.length;i--;) {
    			if(this.tags.indexOf(tags[i].innerHTML) !== -1) {
    				tags[i].classList.add('informations-tag--inside');
    			} else {
    				tags[i].classList.add('informations-tag--not_inside');    				
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
    }
}
</script>