<template>
  <div>
    <page-header />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageFooter
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
