<template>
  <footer>
    <primary />
    <secondary />
  </footer>
</template>

<style>
footer {
  margin-top: auto;
}
</style>

<script>
import Primary from './FooterPrimary.vue'
import Secondary from './FooterSecondary.vue'
export default {
  components: {
    Primary,
    Secondary
  }
}
</script>
