<template>
	<div id="PORTFOLIO" class="content">
		<my-informations v-on:filter="filter" :goProject="goProject" :tags="tags" :title="title" :informationsTag="informationsTag"></my-informations>
    	<my-sliders :goProject="goProject" :tagsSelectedId="tagsSelectedId" :projects="projects"></my-sliders>
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
			informationsTag: [],
			projects: [],
			tagsSelectedId: []
		}
    },
    methods: {
        filter: function(e) {
            for(var i=e.length,rsl=[];i--;) {
                rsl.push('tags='+e[i])
            }
            this.tagsSelectedId = e;
            API.getProjectsPage(0,'?'+rsl.join('&'))
                .then(rsl => {
                    this.projects = rsl;
            })
        }
    },
	mounted: function () {
		API.getProjectsPage()
	    	.then(rsl => {
	        	this.projects = rsl;
	    })
	    API.getTags()
    	.then(rsl => {
    		this.informationsTag = rsl;
    	});
	},
    components: {
    	'my-informations': Informations,
    	'my-sliders': Sliders,
    	'my-pubs': Pubs
    }
}
</script>
<style src="../assets/less/portfolio.less"></style>