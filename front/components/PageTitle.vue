<template>
  <div class="title-container">
    <div class="left">
      <h1>Título da página</h1>
      <p>Informação curta e direta sobre o app divilgado na página com foco nas funcionalidades</p>
      <div class="imgs">
        <a href="https://www.apple.com/br/ios/app-store/" target="_blank">
          <img src="/download-on-the-app-store-badge-ptbr-rgb-blk-092917.png" alt="Imagem do App Store">
        </a>
        <a href="https://play.google.com/store/?utm_source=latam_Med&utm_medium=hasem&utm_content=Feb0217&utm_campaign=Evergreen&pcampaignid=MKT-DR-latam-br-1002290-Med-hasem-py-Evergreen-Feb0217-Text-Institucional&gclid=Cj0KCQjwjcfzBRCHARIsAO-1_Oq6FBqN2ROcKz-aLBQolHKTQlFIBXp7eQF1BYYD4IFh1sj_YFOzDxkaAmboEALw_wcB&gclsrc=aw.ds" target="_blank">
          <img src="/google-play.png" alt="Imagem do Google Story">
        </a>
      </div>
    </div>
    <div class="right">
      <img src="/group-9.png" alt="Imagem de dois celulares">
    </div>
  </div>
</template>

<style scoped>
.title-container {
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
  .left {
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

@media (max-width: 388px) {
  .imgs img:first-child {
    margin-bottom: 15px;
  }
}
</style>
