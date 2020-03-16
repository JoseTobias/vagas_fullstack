<template>
  <div class="container">
    <page-title />
    <container-cards />
    <Video />
    <marcas />
    <about-app />
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import ContainerCards from '~/components/ContainerCards.vue'
import Video from '~/components/Video.vue'
import Marcas from '~/components/Marcas.vue'
import AboutApp from '~/components/AboutApp.vue'

export default {
  components: {
    PageTitle,
    ContainerCards,
    Video,
    AboutApp,
    Marcas
  }
}

</script>
<style>

</style>
