import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
    state: () => {

        const auth = localStorage.getItem('auth');

        if (auth) {
            return JSON.parse(auth);
        }

        return {
            email: null,
            access_token: null,
            isAuthenticated : false

        }
    },
    
    actions: {
        async login(email, password)  {
            const respuesta = await fetch('https://api-santy.herokuapp.com/api/login',{
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({email ,password})
            })
            const data = await respuesta.json();
            if (data.access_token) {
                this.email = email;
                this.access_token = data.access_token;
                this.isAuthenticated = true;
                localStorage.setItem('auth',JSON.stringify({ isAuthenticated: this.isAuthenticated, access_token: this.access_token, email: this.email }));
            }
        },

        async logout() {
            const respuesta = await fetch('https://api-santy.herokuapp.com/api/logout',{
                method: "GET",
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.access_token
                }
            });
            const data = await respuesta.json();

            if (data.logout) {
                localStorage.removeItem('auth');
                this.email = null;
                this.access_token = null;
                this.isAuthenticated = false;
            }
        }
    },

    getters: {
        loggedIn: (state) => state.isAuthenticated,
        getToken: (state) => state.access_token,
    }
})

