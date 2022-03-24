<template>
  <div>
    <Header :botonLogin="false"></Header>
    <div class="container mt-3">
      <div class="card">
        <div class="card-body">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" placeholder="***********"/>
            </div>
            <button @click="login" class="btn btn-primary">login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";

export default {
    components: {
        Header,
    },

    data() {
        return {
            email: '',
            password: ''
        }
    },

    created() {
        this.$auth.$subscribe((mutation, state) => {
            if (state.isAuthenticated) {
                this.$router.push('/home');
            }
        })

        if (this.$auth.isAuthenticated) {
          this.$router.push('/home');
      } 
    },

  methods : {
      login() {
          this.$auth.login(this.email,this.password)
      }
  }
}
</script>

<style scoped>
.container {
    width: 600px;
}
</style>