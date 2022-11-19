<template>
  <b-container fluid>
    <b-row class="justify-content-center vh-100" align-v="center">
      <b-col cols="3" class="my-auto">

        <b-card class="wrapper p-3">
          <h3 class="text-center">{{auth_mode}}</h3>
          <b-form class="d-flex flex-column" @submit.stop.prevent="auth_user">

            <b-form-group class="mb-0">
              <label for="login" class="mb-1">login</label> 
              <b-form-input 
                type="text"
                placeholder="login"
                :state="validateState('login')"
                v-model="$v.form.login.$model"
              ></b-form-input>
              <b-form-invalid-feedback>This is a required field</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group class="mt-2 mb-0">
              <label for="password" class="mb-1">password</label>
              <b-form-input 
                type="password"
                placeholder="password"
                :state="validateState('password')"
                v-model="$v.form.password.$model"
              ></b-form-input>
              <b-form-invalid-feedback>This is a required field and must be at least 6 characters</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group class="mt-2 mb-0" v-if="auth_mode == 'Sign up'">
              <label for="re_password" class="mb-1">repeat password</label>
              <b-form-input 
                type="password"
                placeholder="repeat password"
                :state="validateState('re_password')"
                v-model="$v.form.re_password.$model">
              </b-form-input>
              <b-form-invalid-feedback>This is a required field and must be at least 6 characters.</b-form-invalid-feedback>
              <b-form-invalid-feedback v-if="!$v.form.re_password.sameAsPassword">
                Passwords don't match
              </b-form-invalid-feedback>
            </b-form-group>

            <b-button 
              class="active-btn mt-3 mx-auto"
              @click="auth_account">
              {{ auth_mode }}
            </b-button>

            <p class="note-text mt-4 mb-0" v-if="auth_mode == 'Sign in'">
              <span>Don't have an account?</span>
              <a href="#" class="note-link" @click="auth_mode='Sign up'"> Create</a>
            </p>
            <p class="note-text mt-4 mb-0" v-if="auth_mode == 'Sign up'">
              <span>Already have an account?</span> 
              <a href="#" class="note-link" @click="auth_mode='Sign in'"> Sign in</a>
            </p>
          </b-form>
        </b-card>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
      return {
        auth_mode: 'Sign in',
        form: {
          login: '',
          password: '',
          re_password: ''
        }
      }
  },
  validations: {
    form: {
      login: {
        required
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(100)
      },
      re_password: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    ...mapActions(["signin", "signup"]),
    auth_account() {
      if (this.auth_mode == 'Sign in') {
        this.$v.form.login.$touch();
        this.$v.form.password.$touch();
        if (this.$v.form.login.$anyError || this.$v.form.password.$anyError) return;
        this.signin_user();
      } else {
        this.$v.form.$touch();
        if (this.$v.form.$anyError) return;
        this.signup_user();
      } 
    },
    async signin_user() {
      try {
        await this.signin({ login: this.form.login, password: this.form.password });      
      } catch(err) {
        console.log(err);
      }
    },
    async signup_user() {
      try {
        await this.signup({ login: this.form.login, password: this.form.password });
      } catch(err) {
        console.log(err);
      }
    }
  }
}
</script>

<style>
</style>
