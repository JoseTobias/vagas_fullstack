<template>
  <div>
    <no-ssr>
      <h1>Produtos mais acessados</h1>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(card, index) in porodutosPopulares" :key="index">
          <card-produtos :dado="card" />
        </swiper-slide>
        <div slot="button-next" class="swiper-button-next">
          <img src="seta.png">
        </div>
      </swiper>
    </no-ssr>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CardProdutos from './CardProdutos.vue'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    CardProdutos
  },
  data () {
    return {
      swiperOption: {
        freeMode: true,
        slidesPerView: 4,
        spaceBetween: 15,
        autoplay: false,
        speed: 600,
        navigation: {
          nextEl: '.swiper-button-next'
        },
        breakpoints: {
          1400: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 2
          },
          767: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  computed: {
    ...mapState('store', [
      'produtos',
      'porodutosPopulares'
    ]),
    ...mapGetters({
      produtos: 'getProdutos',
      porodutosPopulares: 'getProdutosPopulares'
    })
  }
}
</script>

<style>
.swiper-button {
  position: absolute;
  height: 100%;
  width: 20px;
}

.swiper-button-next {
  background-image: none;
  width: auto;
}
@media (max-width: 1400px) {
  .swiper-container {
    width: 90vw;
  }
}

@media (max-width: 768px) {
  .swiper-button-next {
    display: none;
  }
}
</style>
