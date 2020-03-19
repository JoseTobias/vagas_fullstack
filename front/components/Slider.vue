<template>
  <div class="container-slider">
    <no-ssr>
      <div class="topo-slider">
        <h1>Produtos mais acessados</h1>
        <nuxt-link to="/produtos" class="a-83">
          Ver todos
        </nuxt-link>
      </div>
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
import { mapGetters } from 'vuex'
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
    ...mapGetters({
      porodutosPopulares: 'getProdutosPopulares'
    })
  }
}
</script>

<style>
.container-slider {
  margin-top: 80px;
}
.swiper-button {
  position: absolute;
  height: 100%;
  width: 20px;
}

.card a:hover {
  background-color: #f8f8f8;
}

.swiper-button-next {
  background-image: none !important;
  width: auto !important;
  width: auto !important;
}
@media (max-width: 1400px) {
  .swiper-container {
    width: 90vw;
  }
}

.topo-slider {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.topo-slider a {
  margin-left: auto;
}

@media (max-width: 768px) {
  .swiper-button-next {
    display: none;
  }
}
</style>
