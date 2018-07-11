<template>	
	<div class="informations">
		<transition name="fade" mode="out-in" appear>
			<h1 v-show="!goProject" key="data" class="informations-title">{{title}}</h1>
		</transition>
		<transition name="fade" mode="out-in" appear>
			<div v-show="!goProject" class="informations-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus mi lectus, vitae lacinia metus imperdiet ut. Suspendisse placerat dui et aliquam rutrum.</div>
		</transition>
		<div class="informations-tags">
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('HTML') !=-1">HTML</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('PHP') !=-1">PHP</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('WORDPRESS') !=-1">WORDPRESS</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('NODE.JS') !=-1">NODE.JS</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('THREE.JS') !=-1">THREE.JS</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('EXPRESS') !=-1">EXPRESS</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('CSS') !=-1">CSS</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('MONGODB') !=-1">MONGODB</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('MYSQL') !=-1">MYSQL</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('PRESTASHOP') !=-1">PRESTASHOP</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('ANGULAR') !=-1">ANGULAR</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('C++') !=-1">C++</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('ANDROID') !=-1">ANDROID</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('REACT') !=-1">REACT</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('C#') !=-1">C#</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('.NET') !=-1">.NET</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('PYTHON') !=-1">PYTHON</div>
			<div class="informations-tag" v-show="tags.length == 0 || tags.indexOf('CORDOVA') !=-1">CORDOVA</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		'title': { default: 'Default' },
		'goProject': { default: false },
		'tags': { default: () => ["HTML","CSS"] }
	}
}
</script>