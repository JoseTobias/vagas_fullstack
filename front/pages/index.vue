<template>
  <div class="container">
    <page-title />
    <container-cards />
    <Video />
    <marcas />
    <about-app />
    <slider />
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import ContainerCards from '~/components/ContainerCards.vue'
import Video from '~/components/Video.vue'
import Marcas from '~/components/Marcas.vue'
import AboutApp from '~/components/AboutApp.vue'
import Slider from '~/components/Slider.vue'

export default {
  components: {
    PageTitle,
    ContainerCards,
    Video,
    Slider,
    AboutApp,
    Marcas
  }
}

</script>
<style>

</style>
