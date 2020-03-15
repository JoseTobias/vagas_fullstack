<template>
  <div class="container-cards a-0">
    <template v-for="(i, index) in CardsData">
      <card :key="index" :title="i.title" :description="i.description" :icon="i.icon" />
    </template>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  data () {
    return {
      CardsData: [{
        title: 'Título',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit consequatur suscipit',
        icon: '/group-33.png'
      },
      {
        title: 'Título',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit consequatur suscipit',
        icon: '/alarm-clock-2.png'
      },
      {
        title: 'Título',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit consequatur suscipit',
        icon: 'ic-notifications-none.png'
      }]
    }
  }
}
</script>

<style>
.container-cards {
  display: flex;
  margin: auto;
  width: fit-content;
  margin-top: 80px;
}

.card:not(:last-child) {
  margin-right: 20px;
}

@media (max-width: 991px) {
  .container-cards {
    flex-direction: column;
    align-items: center;
  }
  .card:not(:last-child) {
    margin-right: 0px;
  }
  .card {
    margin-bottom: 20px;
  }
}
</style>
