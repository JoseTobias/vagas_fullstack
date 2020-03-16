<template>
  <div class="container">
    <page-title />
    <container-cards />
    <Video />
    <marcas />
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import ContainerCards from '~/components/ContainerCards.vue'
import Video from '~/components/Video.vue'
import Marcas from '~/components/Marcas.vue'

export default {
  components: {
    PageTitle,
    ContainerCards,
    Video,
    Marcas
  }
}

</script>
<style>

</style>
