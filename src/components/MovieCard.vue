<template>
    <div class="card" style="width: 18rem;">
        <img :src="src" class="card-img-top" :alt="title">
        <div class="card-body">

        </div>
    </div>
</template>

<script>
export default {
    props: ['src','title']
}
</script>

<style>
    img {
        width: 800px;
    }
</style>