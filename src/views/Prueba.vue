<template>
  <div>
    <Header></Header>
    <div class="container mt-5">
      <div v-for="movie in movies.action" :key="movie.id">
          <CardPelicula :pelicula="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { useMovieStore } from "../store/movie";
import CardPelicula from "../components/CardPelicula.vue"

export default {
  components: {
    Header,
    CardPelicula
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
      let peliculas = {
        action: [],
        comedia: []
      }

      peliculas.action = data.filter(function (pelicula) {
        let array = pelicula.genero.filter(function (genero) {
          return genero.name == "action"
        });
        return array.length == 1;
      });

      peliculas.comedia = data.filter(function (pelicula) {
        let array = pelicula.genero.filter(function (genero) {
          return genero.name == "comedy"
        });
        return array.length == 1;
      });
      this.movies = peliculas;

    },


    peliculaPorGenero(g) {
      let peliculasPorGenero = this.movies.filter(function (pelicula) {
        let array = pelicula.genero.filter(function (genero) {
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