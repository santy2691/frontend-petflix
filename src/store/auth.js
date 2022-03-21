import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
    state: () => {
        return {
            email: null,
            access_token: null,
            isAuthenticate : false

        }
    },
    
    actions: {
        async login(email, password)  {
            const response = await fetch('hhtps://http://api-santy.herokuapp.com/api/login',{
                method: "POST",
                'content-type' : 'application/json',
                body: JSON.stringify({email,password})
            })
            const data = await response.json();
            if (data.access_token) {
                this.email = email;
                this.access_token = data.access_token;
                this.isAuthenticate = true;
            }
        }
    }
})

