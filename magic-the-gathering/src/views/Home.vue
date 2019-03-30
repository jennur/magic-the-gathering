<template>
  <div class="home">
    <LoginComponent v-on:on-login="handleLogin" v-if="!isSession" />
    <div class="home__overview" v-if="isSession">
      <h1>Welcome, {{ username }}</h1>
      <router-link class="home__link" to="card-overview">Go to card overview ></router-link>
      <span class="button" v-on:click="logOut($event)">
        <a href="/">Log out</a>
      </span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue'
import router from '@/router';

export default {
  name: 'home',
  components: {
    LoginComponent
  },
  data() {
    return {
      isSession: false,
      username: String
    };
  },
  methods: {
    handleLogin(credentialsCheck) {
      if(credentialsCheck) {
        sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
        router.push('card-overview');
      }
    },
    logOut(event){
      event.preventDefault();
      console.log('Logged out')
      sessionStorage.removeItem('AuthToken');
      this.isSession = false;
    }
  },
  beforeMount: function() {
    localStorage.setItem('Username', "Michael");
    localStorage.setItem('Password', '@Michael123');
    if(sessionStorage.getItem('AuthToken')) {
      this.isSession = true;
      this.username = localStorage.getItem('Username');
    }
  }
}
</script>
