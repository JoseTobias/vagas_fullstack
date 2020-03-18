<template>
  <div class="card">
      <a :href="Dado.link" target="_blank">
        <div class="img" :style="'background-image: url( ' + Dado.image + ');'"></div>
        <h2>{{ Dado.title }}</h2>
        <p>Vendido por <a :href="Dado.LojaLink" class="a-85" target="_blank"><b> {{ Dado.LojaNome }}</b></a></p>
        <h1 class="a-86">R$ {{ Dado.price }}</h1>
        <div :class="'badge ' + color">
          <img v-if="Dado.percentage > 0" src="/triangle-copy_2.png">
          <img v-else src="/triangle-copy.png">
          <span> $ {{ Dado.percentage }}</span>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  props: {
    Dado: {}
  },
  computed: {
    color () {
      if (this.Dado.percentage <= 0) {
        return 'bg-green-light'
      } else if (this.Dado.percentage > 5) {
        return 'bg-orange'
      } else if (this.Dado.percentage <= 10) {
        return 'bg-green'
      } else if (this.Dado.percentage > 0) {
        return 'bg-yellow'
      } else if (this.Dado.percentage > 10) {
        return 'bg-red'
      } else {
        return 'bg-red'
      }
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 100%;
  min-height: 502px;
  height: 524px;
  box-sizing: content-box;
}
.card > a {
  min-height: inherit;
  max-height: 502px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: solid 1px #ababab;
  border-radius: 10px;
  color: inherit;
  box-sizing: border-box;
}

.img {
  height: 240px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}

.bg-green {
  background-color: #1B5E20;
}

.bg-green-light {
  background-color: #00C853;
}

.bg-yellow {
  background-color: #FFC107;
}

.bg-orange {
  background-color: #FF9800;
}

.bg-red {
  background-color: #DD2C00;
}

h2 {
  margin-bottom: 30px;
  text-align: center;
}

p {
  margin-bottom: 10px;
}

.badge {
  position: absolute;
  left: 0;
  padding: 10px 15px 10px 10px;
  border-radius: 0px 5px 5px 0px;
  color: #fff;
}
</style>
