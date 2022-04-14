<template>
  <div class="container mt-3">
    <div class="title mb-3">
      <h3>{{genero}}</h3>
    </div>
    <div>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="pelicula in peliculas" :key="pelicula.id">
          <div class="carousel__item">
            <CardPelicula :pelicula="pelicula"></CardPelicula>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import CardPelicula from '../components/CardPelicula.vue';
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {

props: ['peliculas','genero'],

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    CardPelicula
  },


  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
};
</script>

<style>
  .carousel__item {
    width: 18rem;
    height: 450px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
</style>