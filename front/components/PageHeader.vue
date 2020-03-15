<template>
  <header class="container">
    <img src="/group-12.png" alt="Logo do site">
    <div class="conta a-3">
      <img src="user.png" alt="Icone de usuário">
      <p>
        Entrar
      </p>
      <p class="barra">
        |
      </p>
      <p>
        Criar conta
      </p>
    </div>
  </header>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

.conta {
  margin-left: auto;
  display: flex;
}

.conta p {
  margin: 0 15px;
}

.conta p:last-child {
  margin: 0 0 0 15px;
}

.conta .barra {
  margin: 0;
}

header {
  margin: 20px 0px;
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

  .container img {
    margin: auto;
  }

  .conta {
    margin-left: 0;
  }

  .conta p {
    display: none;
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 540px;
  }
}
</style>
