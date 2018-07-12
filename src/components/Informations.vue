<template>	
	<div class="informations">
		<div class="informations-title_size">
			<div class="informations-title_transition informations-title_transition--init"></div>
			<h1 key="data" class="informations-title">{{title}}</h1>
		</div>
		<div class="informations-description_size">
			<div class="informations-description_transition informations-description_transition--init"></div>
			<div class="informations-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus mi lectus, vitae lacinia metus imperdiet ut. Suspendisse placerat dui et aliquam rutrum.</div>
		</div>
		<div class="informations-tags">
			<div v-for="tag in informationsTag" class="informations-tag">{{tag}}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		'title': { default: 'Default' },
		'goProject': { default: false },
		'tags': { default: () => [] }
	},
	data: function() {
		return {
			'informationsTag': ['HTML','PHP','CSS','WORDPRESS','NODE.JS','EXPRESS','MONGODB','MYSQL','PRESTASHOP','ANGULAR','C++','ANDROID','REACT','C#']
		}
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
    		informationsDescriptionTransition.classList.add('informations-description_transition--active');
    		informationsTitleSize.classList.add('informations-title_transition--active');
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