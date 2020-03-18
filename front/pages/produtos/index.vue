<template>
  <div class="container">
    <div class="container-todos">
      <no-ssr>
        <template v-for="(card, index) in produtos">
          <card-produtos :key="index" :dado="card" />
        </template>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardProdutos from '~/components/CardProdutos.vue'
export default {
  components: {
    CardProdutos
  },
  computed: {
    ...mapGetters({
      produtos: 'getProdutos'
    })
  }
}
</script>

<style scoped>
.card {
  box-shadow: none;
}
.container-todos {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

@media (max-width: 1400px) {
  .container-todos {
    grid-template-columns: auto auto auto;
  }
}

@media (max-width: 900px) {
  .container-todos {
    grid-template-columns: auto auto;
  }
}

@media (max-width: 767px) {
  .container-todos {
    grid-template-columns: auto;
  }
}
</style>
