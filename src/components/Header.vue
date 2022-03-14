<template>
        <div class="cabecera">
            <div class="seccion seccion1">
                <img src="/public/logo.svg" alt="">
            </div>
            <div class="seccion">

            </div>
            <div class="seccion seccion3">
                <router-link class="button" to="login">Home</router-link>
                <router-link class="button" to="login">My lists</router-link>
                <router-link class="button" to="user">santiago</router-link>
            </div>
            
        </div>
</template>
<script>
import Button from './Button.vue'

export default {
    components : {
        Button
    }
}
</script>

<style scoped>

    img {
        width: 120px;
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


      .button{
          font-size: 14px;
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


    .button:hover{
        color:#000000;
        background-color:#FFFFFF;
        cursor: pointer;
    } 
</style>