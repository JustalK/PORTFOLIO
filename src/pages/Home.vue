<template>
    <img :src="image" />
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