<template>
    <LoginComponent v-on:on-login="handleLogin" />
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
  methods: {
    handleLogin(credentialsCheck) {
      if(credentialsCheck) {
        router.push('card-overview');
      }
    }
  },
  beforeMount: function() {
    localStorage.setItem('Username', "Michael");
    localStorage.setItem('Password', '@Michael123');
  }
}
</script>
