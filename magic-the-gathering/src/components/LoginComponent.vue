<template>
    <div class="login">
    <h1>Login to see your cards</h1>
    <form v-on:submit="handleCredentials($event)">
      <div class="login__field-wrapper">
            <label for="username">Username </label><input name="username" class="login__field" type="text" ref="usernameInput"/>
      </div>
      <div class="login__field-wrapper">
        <label for="password">Password </label><input name="password" class="login__field" type="text" ref="passwordInput"/>
      </div>
      <input class="login__submit" type="submit" />
      <div class="login__error" v-if="errorCheck">{{ errorMsg }}</div>
    </form>
    </div>
</template>

<script>
export default {
  name: "LoginComponent",
  props: {
    
  },
  data() {
    return { 
        username: '',
        password: '',
        errorCheck: false,
        errorMsg: "Username or password is not valid."

    }
  },
  methods: {
    handleCredentials(event) {
      event.preventDefault();

      let correctPassword = localStorage.getItem('Password');
      let correctUsername = localStorage.getItem('Username');

      this.password = this.$refs.passwordInput.value;
      this.username = this.$refs.usernameInput.value;

      if(this.password === correctPassword && this.username === correctUsername) {
        this.errorCheck = false;
        this.$emit('on-login', !this.errorCheck)
      } else {
        this.errorCheck = true;
      }
    }
  }
}
</script>