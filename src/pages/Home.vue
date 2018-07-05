<template>
  <div id="app">
    <my-header></my-header>
    <router-link v-bind:to="'/all'">Test</router-link>
    <img :src="image" />
  <router-view>
  </router-view>
  </div>
</template>
<script>
import image from '../assets/imgs/campingcar.png'

export default {
    data: function () {
        return {
            image: image.preSrc
        }
    }
}
</script>
<style src="../assets/less/main.less"></style>