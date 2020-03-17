<template>
  <div>
    <h1>Produtos mais acessados</h1>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><card-produtos /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import CardProdutos from './CardProdutos.vue'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    CardProdutos
  },
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        freeMode: true,
        slidesPerView: 4,
        spaceBetween: 15,
        speed: 600,
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
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  mounted () {
    console.log('simulate async data')
    if (this.swiperSlides.length < 10) {
      this.swiperSlides.push(this.swiperSlides.length + 1)
    }
  }
}
</script>

<style>
@media (max-width: 1400px) {
  .swiper-container {
    width: 90vw;
  }
}
</style>
