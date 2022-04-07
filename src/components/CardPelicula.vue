<template>
  <div>
    <div  class="card" style="width: 18rem">
      <img :src="getUrlFile" class="card-img-top" :alt="title" />
      <div class="card-body">
        <h5 class="card-title">{{pelicula.title}}</h5>
        <p class="card-text">
          actores:
        </p>
        <p v-for="(actor, index) in pelicula.actores" :key="index">
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

}
</script>

<style>
  
</style>
