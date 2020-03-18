<template>
  <div class="marcas">
    <div class="left">
      <div class="text">
        <h1>Título</h1>
        <p>Marcação para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página</p>
      </div>
      <div class="text">
        <h1>Título</h1>
        <p>Marcação para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página</p>
      </div>
      <div class="text">
        <h1>Título</h1>
        <p>Marcação para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página</p>
      </div>
    </div>
    <div class="rigth">
      <template v-for="i in objeto">
        <div v-if="i%5 === 0" :key="i" :class="filtro[i/5] + ' quadro'">
          <img src="logo-placeholder-2-x.png" alt="Logo">
        </div>
        <div v-else :key="i" class="quadro">
          <img src="logo-placeholder-2-x.png" alt="Logo">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filtro: ['filtro-azul', 'filtro-vermelho', 'filtro-roxo', 'filtro-amarelo']
    }
  },
  computed: {
    objeto () {
      return Array.from(Array(16).keys())
    }
  }
}
</script>

<style scoped>
.marcas {
  display: flex;
  margin-top: 80px;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;
  margin-right: 60px;
}

.rigth {
  display: grid;
  grid-template-columns: max-content max-content max-content max-content;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.quadro {
  padding: 10px;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
  border-radius: 10px;
}

.filtro-azul {
  background-color: #00a1ff;
}

.filtro-vermelho {
  background-color: #ff3a44;
}

.filtro-roxo {
  background-color: #9746d5;
}

.filtro-amarelo {
  background-color: #fedb00;
}

@media (max-width: 767px) {
  .marcas {
    flex-direction: column-reverse;
  }
  .left {
    margin: 0;
    max-width: inherit;
  }
  .rigth {
    margin: 30px auto auto auto;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .text:first-child {
    margin-top: 40px;
  }

  .text p {
    text-align: center;
  }
  h1 {
    margin-bottom: 20px;
  }
}

@media (max-width: 420px) {
  .rigth {
    grid-template-columns: auto auto auto auto;
  }
}
</style>
