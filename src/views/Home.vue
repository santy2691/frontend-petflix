<template>
  <div>
    <Header></Header>
    <div class="container mt-5">
      <Carrusel :peliculas="peliculaPorGenero('action')" genero="action"></Carrusel>
    </div>
    <div class="container mt-5">
      <Carrusel :peliculas="peliculaPorGenero('comedy')" genero="comedy"></Carrusel>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Carrusel from "../components/Carrusel.vue";
import { useMovieStore } from "../store/movie";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Header,
    Carrusel,
  },
  setup() {
    const store = useMovieStore();
    return {
      store,
    };
  },

  data() {
    return {
      movies: [],
    };
  },

  created() {
    this.cargarPelis();
  },

  methods: {
    async cargarPelis() {
      const respuesta = await fetch(
        "https://api-santy.herokuapp.com/api/peliculas",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.$auth.access_token,
          },
        }
      );
      const data = (await respuesta.json()).data;
      console.log(data);
      this.movies = data;
    },

    prueba() {
      let prueba = this.movies.filter((pelicula) => {
        let array = pelicula.genero.filter((genero) => genero.name == "action");
        return array.length == 1;
      });
    },
  
  
      peliculaPorGenero(g) {
      let peliculasPorGenero = this.movies.filter(function(pelicula) {
        let array = pelicula.genero.filter(function(genero) {
          return genero.name == g
        });
        return array.length == 1;
      });
      return peliculasPorGenero;
    },
  },

  computed: {
  },
};
</script>