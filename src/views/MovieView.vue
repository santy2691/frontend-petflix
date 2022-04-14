<template>
    <div>
        <Header></Header>
        <p>{{pelicula.title}}</p>
        <div class="player-container d-flex justify-content-center mt-5">
            <video src="http://api-santy.herokuapp.com/video/Spider-Man.mp4" controls></video>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    components: {
        Header
    },
    data() {
        return {
            pelicula: {}
        }
    },

    created() {
        this.buscarPeli()

    },


    methods: {
        async buscarPeli() {
            const respuesta = await fetch(
                `https://api-santy.herokuapp.com/api/pelicula/${this.$route.params.id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + this.$auth.access_token,
                    },
                }
            );
            this.pelicula = (await respuesta.json()).data;
        }
    }
}
</script>

<style>
video {
    max-width: 100%;
}
</style>