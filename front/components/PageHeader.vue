<template>
  <div>
    <header class="container">
      <nuxt-link to="/">
        <img src="/group-12.png" alt="Logo do site" title="Ir para a página inicial">
      </nuxt-link>
      <div class="conta a-3">
        <img src="user.png" alt="Ícone de usuário">
        <nuxt-link to="/Entrar">
          Entrar
        </nuxt-link>
        <p class="barra">
          |
        </p>
        <nuxt-link to="/Criar Conta">
          Criar conta
        </nuxt-link>
      </div>
    </header>
  </div>
</template>

<style scoped>
.conta {
  margin-left: auto;
  display: flex;
}

.conta a {
  margin: 0 15px;
  color: inherit;
}

.conta a:hover {
  opacity: 0.8;
}

.conta a:last-child {
  margin: 0 0 0 15px;
}

.conta .barra {
  margin: 0;
}

header {
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .container a {
    margin: auto;
  }

  .conta {
    margin-left: 0;
  }

  .conta a, .conta p {
    display: none;
  }
}
</style>
