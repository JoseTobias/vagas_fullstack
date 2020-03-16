<template>
  <div class="title-container">
    <div class="left">
      <img src="/group-11.png" alt="Imagem de dois celulares">
    </div>
    <div class="right">
      <h1>Título</h1>
      <p>Informação curta e direta sobre o app divilgado na página com foco nas funcionalidades</p>
      <div class="imgs">
        <nuxt-link to="/Baixar no app store">
          <img src="/download-on-the-app-store-badge-ptbr-rgb-blk-092917.png" alt="Imagem do App Store">
        </nuxt-link>
        <nuxt-link to="/Baixar no google play">
          <img src="/google-play.png" alt="Imagem do Google Story">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-container {
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}

.left {
    margin-right: 60px;
}

.imgs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

h1 {
  margin-bottom: 20px;
}

a:hover {
  opacity: 0.88;
}

p {
  margin-bottom: 40px;
}

@media (max-width: 992px) {
  .title-container {
    flex-direction: column;
  }
  .right {
    margin-right: 0px;
  }
  .imgs {
    justify-content: center;
  }
  .imgs a:first-child {
    margin-right: 40px;
  }
}

@media (max-width: 418px) {
  .imgs {
      flex-direction: column;
  }
  .imgs a:first-child {
    margin-right: 0px;
  }
}
</style>
