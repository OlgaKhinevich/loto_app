<template>
  <div class="component-container">
      <div class="wrapper w-3/12 h-9/12 shadow-wrap-sh">
          <h3>{{auth_mode}}</h3>
          <div>
            <p class="label">login</p>
            <input type="text" placeholder="login" v-model="login">
            <p class="label">password</p>
            <input type="password" placeholder="password" v-model="password">
            <p class="label" v-if="auth_mode == 'Sign up'">repeat password</p>
            <input type="password" v-model="re_password" placeholder="repeat password" v-if="auth_mode == 'Sign up'">
          </div>
          <button class="active-btn" @click="signin" v-if="auth_mode == 'Sign in'">sign in</button>
          <button class="active-btn" @click="signup" v-if="auth_mode == 'Sign up'">sign up</button>
          <p class="note-text" v-if="auth_mode == 'Sign in'">Don't have an account?
            <a href="#" class="text-end-gr-clr font-bold" @click="change_mode('Sign up')"> Create</a>
          </p>
          <p class="note-text" v-if="auth_mode == 'Sign up'">Already have an account? 
              <a href="#" class="text-end-gr-clr font-bold" @click="change_mode('Sign in')">Sign in</a>
          </p>
      </div>
  </div>
</template>

<script>
import AlertError from '../assets/lib/alert_error';
import json_fetch from '../assets/lib/json_fetch';
import {HOSTNAME} from '../assets/constants.js';

export default {
  data() {
      return {
        auth_mode: 'Sign in',
        login: '',
        password: '',
        re_password: ''
      }
  },
  methods: {
    change_mode(mode) {
      this.auth_mode = mode;
    },
    async signin() {
      try {
        const {login, password} = this;
        if(!login || !password) throw new AlertError("Empty field!");
        const response = await json_fetch(`${HOSTNAME}/api/signin`, {login, password});
        if(!response.ok) throw new Error(response.statusText);        
        this.$router.push('/profile');
      } catch(err) {
        console.log(err);
      }
    },
    async signup() {
      try {
        const {login, password, re_password} = this;
        if(!login || !password || !re_password) throw new AlertError("Empty field!");
        if(password !== re_password) throw new AlertError("Passwords don't match");
        const response = await json_fetch(`${HOSTNAME}/api/signup`, {login, password});
        if(!response.ok) throw new Error(response.statusText);
        this.$router.push('/profile');
      } catch(err) {
        console.log(err);
      }

    }
  }
}
</script>
<style>

</style>
