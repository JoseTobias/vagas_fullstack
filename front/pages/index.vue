<template>
  <div class="container">
    <page-header />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  }
}
</script>

<style>
.container {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 540px;
  }
}
</style>
