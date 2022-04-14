<template>
        <div class="cabecera">
            <div class="seccion seccion1">
                <img @click="irAHome" src="/public/logo.svg" alt="">
            </div>
            <div class="seccion">
            </div>
            <div class="seccion seccion3">
                <router-link class="boton" v-if="apareceBotonLogin" to="/login">Login</router-link>
                <button @click="logout" class="boton" v-if="aparecerBotonLogout">logout</button>
            </div>
            
        </div>
</template>
<script>

import Button from './Button.vue'

export default {
    props: ['botonLogin'],
    components : {
        Button
    },

    computed: {
        apareceBotonLogin() {
            return !this.$auth.isAuthenticated && !(this.$route.path === "/login");
        },
        aparecerBotonLogout() {
            return this.$auth.isAuthenticated;
        }
    },

    methods: {
        logout() {
            this.$auth.logout()
            this.$router.push('/')
        },

        irAHome() {
             this.$router.push('/home');
        }
    }
}
</script>

<style scoped>

    img {
        width: 120px;
        cursor: pointer;
    }

   .cabecera {
        background: rgb(48, 47, 51);
        min-width: 100%;
        height: 80px;
        display: flex;
       
   }

   .seccion {
       width: 33%;
       display: flex;
       justify-content: end;
       align-items: center;
   }
    

    .seccion1 {
        display: flex;
        justify-content: left;
        margin-bottom: 10px;
        margin-left: 10px;
    }

    .seccion3 {
        justify-content: end;
        margin-right: 20px;
    }

    .boton{
        height: 40px;
        background: none ;
        display:inline-block;
        padding:0.35em 1.2em;
        border:0.1em solid #FFFFFF;
        margin:0 0.3em 0.3em 0;
        border-radius: 8px;
        box-sizing: border-box;
        text-decoration:none;
        font-family:'Roboto',sans-serif;
        font-weight:300;
        color:#FFFFFF;
        text-align:center;
        transition: all 0.2s;

    }


    .boton:hover{
        color:#000000;
        background-color:#FFFFFF;
        cursor: pointer;
    } 
</style>