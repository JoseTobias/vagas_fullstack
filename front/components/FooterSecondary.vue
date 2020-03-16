<template>
  <div class="secondary a-0">
    <div class="container">
      <div class="footer-top">
        <template v-for="(i, index) in footerData">
          <category :key="index" :title="i.title" :texts="i.texts" />
        </template>
        <div class="container-redes">
          <h2>Redes Sociais</h2>
          <div class="redes-socias">
            <a href="https://facebook.com" target="_blank">
              <img src="/path.png" alt="Ícone facebook">
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src="/path_2.png" alt="Ícone twitter">
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src="/combined-shape.png" alt="Ícone instagram">
            </a>
            <a href="https://https://youtube.com" target="_blank">
              <img src="/shape.png" alt="Ícone youtube">
            </a>
          </div>
        </div>
      </div>
      <div>
        Lojas: Adidas, Americanas, Apple, Azul, Baby Store, Beleza na Web, Camisaria Colombo, Carrefour, Casas Bahia, Centauro, Cipela, Cissa Magaziine, Dafiti, Decathlon, Dell, efácil, Época, Cosméticos, Extra, Fast Shop Fnac, Girafa, Insinuante, Kabun, Kanui, Lenovo, Livraria Saraiva, Magazie Luiza, Marisa, MegaMamute, Mobly, Netshoes, Nike, Ponto Frio.
        <nuxt-link to="/Contato">
          <b>Se sua marca não está listada entre em contato com a nossa equipe</b>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Category from './CategoryFooter.vue'
export default {
  components: {
    Category
  },
  data () {
    return {
      footerData: [{
        title: 'Sobre',
        texts: [
          'Quem somos',
          'Imprensa',
          'Trabalhe conosco',
          'Política de Privacidade'
        ]
      },
      {
        title: 'Destaques',
        texts: [
          'Black Friday',
          'Black Night',
          'Dia dos Pais',
          'Dia dos Namorados'
        ]
      },
      {
        title: 'Contato',
        texts: [
          'Fale Conosco',
          'Midia Kit | Parceria',
          'Dúvidas Frequentes'
        ]
      }]
    }
  }
}
</script>

<style scoped>
.secondary {
  background-color: #415400;
  padding: 20px 0;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.container-redes {
  display: flex;
  flex-direction: column;
}

.redes-socias {
  display: flex;
  align-items: center;
  margin: auto;
}

.redes-socias img {
  margin-right: 20px;
}

.redes-socias a:hover {
  opacity: 0.8;
}

a {
  color: inherit;
}

a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-top {
    flex-direction: column;
    margin-bottom: 30px;
  }
  h2 {
    margin-bottom: 15px;
  }
  .redes-socias {
    margin: 0;
  }
}

@media (max-width: 767px) {
  .secondary {
    padding-left: 10px;
  }
}
</style>
