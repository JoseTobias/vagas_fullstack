<template>
  <div class="container-video">
    <h1>Vídeo promocional do app</h1>
    <p>O vídeo mostra todas as funcionalidades e você vai conferir como funciona e ver como é facil e simles de usar o app, flando do uso e seus benefícios.</p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/WFiHiIAo7RU"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <!-- </iframe> -->
  </div>
</template>

<style scoped>
.container-video {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

h1 {
    margin-bottom: 15px;
}

p {
  text-align: center;
  margin-bottom: 20px;
}

@media (max-width: 590px) {
  iframe {
    max-width: fit-content;
  }
}
</style>
