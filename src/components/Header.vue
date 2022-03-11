<template>
        <div class="cabecera">
            <div class="seccion seccion1">
                <img src="/public/logo.svg" alt="">
            </div>
            <div class="seccion">

            </div>
            <div class="seccion seccion3">
                <Button value="login"></Button>
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
</style>