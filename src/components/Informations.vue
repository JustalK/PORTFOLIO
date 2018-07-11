<template>	
	<div class="informations">
		<div class="informations-title_size">
			<div class="informations-title_transition"></div>
			<h1 key="data" class="informations-title">{{title}}</h1>
		</div>
		<div class="informations-description_size">
			<div class="informations-description_transition"></div>
			<div class="informations-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus mi lectus, vitae lacinia metus imperdiet ut. Suspendisse placerat dui et aliquam rutrum.</div>
		</div>
		<div class="informations-tags">
			<div class="informations-tag">HTML</div>
			<div class="informations-tag">PHP</div>
			<div class="informations-tag">WORDPRESS</div>
			<div class="informations-tag">NODE.JS</div>
			<div class="informations-tag">THREE.JS</div>
			<div class="informations-tag">EXPRESS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">MONGODB</div>
			<div class="informations-tag">MYSQL</div>
			<div class="informations-tag">PRESTASHOP</div>
			<div class="informations-tag">ANGULAR</div>
			<div class="informations-tag">C++</div>
			<div class="informations-tag">ANDROID</div>
			<div class="informations-tag">REACT</div>
			<div class="informations-tag">C#</div>
			<div class="informations-tag">.NET</div>
			<div class="informations-tag">PYTHON</div>
			<div class="informations-tag">CORDOVA</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		'title': { default: 'Default' },
		'goProject': { default: false }
	}
}
</script>