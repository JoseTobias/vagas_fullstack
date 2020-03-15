<template>
  <div class="container">
    <page-title />
    <container-cards />
    <Video />
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import ContainerCards from '~/components/ContainerCards.vue'
import Video from '~/components/Video.vue'

export default {
  components: {
    PageTitle,
    ContainerCards,
    Video
  }
}

</script>
<style>

</style>
