<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >

                <movie-card v-for="movie in movies"
            :src="movie.src" 
            :title="movie.title" 
            :key="movie.key" />  
  </swiper>

</template>

<script>

import MovieCard from './MovieCard.vue';

import {Swiper,SwiperSlide} from 'swiper/vue'
import 'swiper/css';

export default {
components: {MovieCard, Swiper, SwiperSlide},

    data() {
        return {
            movies: [
                {
                    "key" : "1",
                    "src" :"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/02/batman-2622991.jpg?itok=AhP1P_dE",
                    "title" : "The batman"
                },
                {
                    "key" : "2",
                    "src" :"https://tn.com.ar/resizer/6ntQy1oRvAWpbXc-yCDBmGQsrq8=/1023x0/smart/filters:quality(60)/cloudfront-us-east-1.images.arcpublishing.com/artear/VLSOZV3YIZD67KQG7COXI2EJYE.jpg",
                    "title" : "The batman"
                }
            ],
         
        }
    }
}
</script>