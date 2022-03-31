<template>
  <div>
    <Header></Header>
    <div class="container mt-3">
        <Carrusel></Carrusel>
    </div>
    <button @click="prueba">prueba</button>
    <p v-for="movie in movies" :key="movie.id"></p>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Carrusel from "../components/Carrusel.vue";
import { useMovieStore } from '../store/movie'
import "vue3-carousel/dist/carousel.css";


export default {
  components: {
    Header,
    Carrusel,
  },
   setup(){
    const store = useMovieStore();
    return {
      store
    }
  },

data() {
    return {
      movies: {}
    }
},

 created() {
   this.cargarPelis();
},
  methods: {
        async cargarPelis() {
        await this.store.getPeliculasPorGenero();
         this.movies =  this.store.movies;
         console.log(this.movies);
       }
  },
  prueba() {
    console.log(this.movies);
  }
};
</script>