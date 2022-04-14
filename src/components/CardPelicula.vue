<template>
  <div>
    <div @click="verPelicula"  class="card" style="width: 14rem; height: 400px;">
      <img :src="getUrlFile" class="card-img-top" :alt="pelicula.title" />
      <div class="card-body">
        <h5 class="card-title">{{pelicula.title}}</h5>
        <p class="card-text">
          actores:
        </p>
        <p v-for="actor in pelicula.actores" :key="actor.id + actor.name">
          {{actor.name}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props : ['pelicula'],

    computed:  {
      getUrlFile() {
    
        return "https://api-santy.herokuapp.com/" + this.pelicula.urlFile;
      }
    },
  methods: {
    verPelicula() {
       this.$router.push('/movie/' + this.pelicula.id);
    }
  }
}
</script>

<style>

.card:hover {
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}
</style>
