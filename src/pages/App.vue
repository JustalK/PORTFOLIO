<template>
  <div id="app">
    <my-header></my-header>
    <transition name="fade">
	  <router-view>
	  </router-view>
  	</transition>
  </div>
</template>
<style src="../assets/less/main.less"></style>