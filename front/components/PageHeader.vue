<template>
  <header>
    <img src="/group-12.png" alt="Logo do site">
    <div class="conta a-3">
      <img src="user.png" alt="Ícone de usuário">
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
  margin: 20px 0 80px 0px;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
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
</style>
