<template>	
	<div class="informations">
		<h1 v-if="!goProject" key="data" class="informations-title">{{title}}</h1>
		<div class="informations-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus mi lectus, vitae lacinia metus imperdiet ut. Suspendisse placerat dui et aliquam rutrum.</div>
		<div class="informations-tags">
			<div class="informations-tag">HTML</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
			<div class="informations-tag">CSS</div>
		</div>
	</div>
</template>
<script>
export default {
  props: [
    'title'
  ]
}
</script>