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
            const respuesta = await fetch('https://api-santy.herokuapp.com/api/aplogin',{
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept': 'appication/json'
                },
                body: JSON.stringify({"email":email ,"password":password})
            })
            const data = await respuesta.json();
            console.log(data);
            if (data.access_token) {
                this.email = email;
                this.access_token = data.access_token;
                this.isAuthenticate = true;
            }
        }
    }
})

