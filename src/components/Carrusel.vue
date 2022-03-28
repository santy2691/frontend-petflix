<template>
  <div class="container mt-3">
    <div class="title mb-3">
      <h3>peliculas</h3>
    </div>
    <div>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">
            <div class="card" style="width: 18rem">
              <img
                src="/public/dog-5213090_1920.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
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
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {

props: ['peliculas'],

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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