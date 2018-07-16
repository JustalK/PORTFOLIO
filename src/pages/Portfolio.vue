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
console.log(API.getProjects);

export default {
    data: () => {
    	return {
    		title: 'Title',
    		tags: [],
			goProject: false,
			projects: ["0","1","2","3"]
		}
    },
	created: function () {
		API.getProjects()
	    	.then(rsl => {
	        	console.log(rsl);
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