<template>
	<div id="PORTFOLIO" class="content">
		<my-informations :goProject="goProject" :tags="tags" :title="title"></my-informations>
    	<my-sliders :goProject="goProject" :projects="projects"></my-sliders>
    	<transition name="fade" mode="out-in">
    		<my-pubs v-show="!goProject"></my-pubs>
    	</transition>
    </div>
</template>
<script>
import Informations from '../components/Informations'
import Sliders from '../components/Sliders'
import Pubs from '../components/Pubs'
import API from '../services/Api'

export default {
    data: () => {
    	return {
    		title: 'Title',
    		tags: [],
			goProject: false,
			projects: []
		}
    },
	mounted: function () {
		API.getProjects()
	    	.then(rsl => {
	    		console.log(rsl);
	    		for(var i=rsl.length,tmpTags,tmpStringTags;i--;) {
	    			tmpTags = rsl[i].tags;
	    			tmpStringTags=[];
	    			for(var j=0;j<tmpTags.length;j++) tmpStringTags.push(tmpTags[j].name);
	    			rsl[i].tags = tmpStringTags.join(',');
	    		}
	        	this.projects = rsl;
	    })
	},
    components: {
    	'my-informations': Informations,
    	'my-sliders': Sliders,
    	'my-pubs': Pubs
    }
}
</script>
<style src="../assets/less/portfolio.less"></style>