<template>
<main>
  <h1>Contact us</h1>

  <div class="contact">
  <form class="contact-form" v-on:submit="handleSubmit($event)">

    <div class="contact-form__field">
      <label for="fname">First name</label>
      <input  class="contact-form__first-name" 
              name="fname" 
              type="text" 
              v-on:input="handleFname($event)" 
              placeholder="John"
      />
    </div>
    
    <div class="contact-form__error" v-if="fnameError">
      <p>This field needs to be filled out</p>
    </div>

    <div class="contact-form__field">
      <label for="lname">Last name</label>
      <input  class="contact-form__last-name" 
              name="lname" 
              type="text" 
              v-on:input="handleLname($event)" 
              placeholder="Doe"
      />
    </div>
    <div class="contact-form__error" v-if="lnameError">
      <p>This field needs to be filled out</p>
    </div>

    <div class="contact-form__field">
      <label for="email">Email</label>
      <input  class="contact-form__email" 
              name="email" 
              type="email" 
              v-on:input="handleEmail($event)" 
              placeholder="john.doe@example.com"
      />
    </div>
    <div class="contact-form__error" v-if="emailError">
      <p>This is not a valid e-mail address</p>
    </div>

    <div class="contact-form__field">
      <label for="phone">Phone number</label>
      <input  class="contact-form__phone" 
              name="phone" 
              type="text" 
              v-on:input="handlePhone($event)" 
              placeholder="xxx-xxx-xxxx"
      />
    </div>
    <div class="contact-form__error" v-if="phoneError">
      <p>This is not a valid number format</p>
    </div>

    <div class="contact-form__field">
      <textarea 
        placeholder="Your message here ...">
      </textarea>
    </div>
    <input class="contact-form__submit" type="submit" name="submit" value="Send" />
  </form>
  </div>
  </main>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {
      fname: String,
      lname: String, 
      email: String,
      phone: String,
      fnameError: false,
      lnameError: false,
      emailError: false,
      phoneError: false,
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
    },
    handleFname(event) {
      if(event.target.value === '') {
        this.fnameError = true;
      } else {
        this.fnameError = false;
      }
    },
    handleLname(event) {
      if(event.target.value === '') {
        this.lnameError = true;
      } else {
        this.lnameError = false;
      }
    },
    handleEmail(event) {
      const emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        
      this.emailError = !emailValidation.test(event.target.value);
    },
    handlePhone(event) {
      const phoneValidation = /^\d{3}[-]\d{3}[-]\d{4}|\d{3}[.]\d{3}[.]\d{4}|\d{3}[\s]\d{3}[\s]\d{4}$/;

      this.phoneError = !phoneValidation.test(event.target.value);
    }
  }
}
</script>
