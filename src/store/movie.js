import { defineStore} from 'pinia'
import {authStore} from './auth'

export const useMovieStore = defineStore('movies', {
    state: () => {
        return {
            movies: []
        }
    },
    
    actions: {
        async getPeliculasPorGenero() {
            const store = authStore();
            const respuesta = await fetch('https://api-santy.herokuapp.com/api/peliculas',{
                method: "GET",
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + store.access_token,
                }
            });

            this.movies = (await (respuesta.json())).data;
            
        }
    },
})

