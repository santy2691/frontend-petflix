<template>
  <div>
    <Header></Header>
    <div class="container mt-3">
        <Carrusel></Carrusel>
    </div>
    <button class="btn btn-primary" @click="peliculasGenero('action')">prueba</button>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Carrusel from "../components/Carrusel.vue";

import "vue3-carousel/dist/carousel.css";


export default {
  components: {
    Header,
    Carrusel,
  },

data() {
    return {

    }
},
  methods: {
      async peliculasGenero(genero) {
          const respuesta = await fetch('https://api-santy.herokuapp.com/api/peliculas/genero/' + genero,{
                method: "GET",
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.$auth.getToken
                }
          });
          const data = await respuesta.json();
          console.log(data);
      }
  },
};
</script>