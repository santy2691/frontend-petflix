<template>
    <button class="button">{{value}}</button>
</template>
<script>
export default {
    props : ['value']
    
}
</script>

<style scoped>

    .button{
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