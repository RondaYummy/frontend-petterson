<template>
  <section class="d-flex justify-center flex-column">
    <div class="main_info">
      <h1 class="text as">Спілкування без перешкод</h1>
      <p class="text2">
        Для сучасного світу згуртованість команди професіоналів однозначно
        фіксує необхідність системи для спілкування.
      </p>
    </div>
    <v-form class="main_section">
      <v-text-field
        v-model="email"
        filled
        rounded
        dense
        :append-icon="!emailErrors.length ? 'mdi-email-check' : 'mdi-email'"
        clearable
        class="input_style"
        background-color="#42204e"
        :error-messages="emailErrors"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      />
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        :error-messages="passwordErrors"
        filled
        rounded
        dense
        clearable
        background-color="#42204e"
        class="input_style"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        @click:append="show1 = !show1"
      />
      <v-btn rounded text x-large class="button_grd" @click="authorization">
        Увійти
      </v-btn>
    </v-form>
  </section>
</template>

<script>
import api from '../api';
import { validationMixin } from 'vuelidate';
import {
  required,
  maxLength,
  email,
  minLength,
} from 'vuelidate/lib/validators';

export default {
  validations: {
    email: { required, email },
    password: { required, maxLength: maxLength(26), minLength: minLength(8) },
  },
  mixins: [validationMixin],
  data() {
    return {
      show1: false,
      email: '',
      password: '',
    };
  },
  computed: {
    color() {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)];
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push('Password must be at most 26 characters long');
      !this.$v.password.minLength &&
        errors.push('The password must be at least 8 characters long');
      !this.$v.password.required && errors.push('Password is required.');
      return errors;
    },
  },
  methods: {
    async authorization() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log('Authorization...');
        const user_data = await api.authorization({
          email: this.email,
          password: this.password,
        });
        console.log(user_data);
        this.email = '';
        this.password = '';
      }
    },
  },
};
</script>

<style>
.main_info {
  width: 840px;
  margin: 0 auto;
}
.main_section {
  margin: 50px auto;
  width: 380px;
}
.text {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 150%;
  text-align: center;

  color: #ffffff;
}
.text2 {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
.input_style {
  color: white;
}
</style>