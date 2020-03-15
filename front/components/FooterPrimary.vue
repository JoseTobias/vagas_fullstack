<template>
  <div class="primary a-3">
    <div class="container">
      <div class="chrome">
        <img src="/chrome.png" alt="Ícone do chrome">
        <div>
          <p><b>Instale a extensão no seu Google Chrome</b></p>
          <p>Texto de suporte de título</p>
        </div>
      </div>
      <div class="download">
        <div class="text">
          <p><b>Baixe nosso app</b> e não fique de fora do que acontece no produto</p>
        </div>
        <div class="imgs">
          <img src="/download-on-the-app-store-badge-ptbr-rgb-blk-092917.png" alt="Imagem do App Story">
          <img src="/google-play.png" alt="Imagem do Google Story">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.primary {
  background-color: #a5d207;
  padding: 20px 0;
}

.container {
  display: flex;
}

.chrome {
  display: flex;
  align-items: center;
}

.chrome img {
  margin-right: 10px;
}

.download {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
}

.download .imgs img:first-child {
  margin-right: 15px;
}

.text {
  max-width: 200px;
}

@media (max-width: 992px) {
  .container {
    flex-direction: column;
  }
  .chrome {
    display: none;
  }
  .download {
    margin: auto;
    width: fit-content;
    flex-direction: column;
  }
  .download .imgs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
  .download .imgs img:first-child {
    margin: 0;
  }
  .text {
    max-width: initial;
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .primary {
    padding-left: 10px;
  }
}

@media (max-width: 388px) {
  .download .imgs img:first-child {
    margin-bottom: 15px;
  }
}
</style>
