<template>
        <Header></Header>
        <div class="contenido">
            <carrusel />
        </div>
</template>
<script>

import Header from '../components/Header.vue'
import Carrusel from '../components/Carrusel.vue'

export default {
    components: {
        Header,
        Carrusel
    }
    
}
</script>

<style scoped>

.contenido {
    height: 100%;
    width: 100%;
    background: grey;
}
   
</style>