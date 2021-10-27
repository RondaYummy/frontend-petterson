<template>
  <section class="main_info">
    <h1>Створи новий аккаунт</h1>

    <section class="form_reg">
      <v-text-field
        v-model="firstName"
        :error-messages="firstNameErrors"
        :counter="10"
        prepend-inner-icon="mdi-account"
        required
        filled
        rounded
        dense
        color="white"
        placeholder="First name"
        background-color="#42204e"
        class="ff"
        @input="$v.firstName.$touch()"
        @blur="$v.firstName.$touch()"
      >
        <template #counter="{ props: { value, max } }">
          <span> {{ value }} / {{ max }}</span>
        </template>
      </v-text-field>

      <v-text-field
        v-model="lastName"
        :error-messages="lastNameErrors"
        :counter="16"
        prepend-inner-icon="mdi-account"
        placeholder="Last name"
        filled
        rounded
        dense
        required
        color="white"
        background-color="#42204e"
        @input="$v.lastName.$touch()"
        @blur="$v.lastName.$touch()"
      >
        <template #counter="{ props: { value, max } }">
          <span> {{ value }} / {{ max }}</span>
        </template>
      </v-text-field>
      <v-radio-group
        v-model="radioGroup"
        row
        required
        :error-messages="selectErrors"
        @change="$v.radioGroup.$touch()"
        @blur="$v.radioGroup.$touch()"
      >
        <label class="mr-7">
          <v-radio value="male" v-show="false" />
          <div
            class="radio_button"
            :class="[radioGroup === 'male' ? 'active_male' : '']"
          >
            <v-img max-height="50" max-width="50" src="../assets/male.png" />
          </div>
        </label>

        <label>
          <v-radio value="female" v-show="false" />
          <div
            class="radio_button"
            :class="[radioGroup === 'female' ? 'active_female' : '']"
          >
            <v-img max-height="50" max-width="50" src="../assets/female.png" />
          </div>
        </label>
      </v-radio-group>

      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        placeholder="E-mail"
        hint="This is the email you will use to login to your account"
        required
        filled
        rounded
        dense
        :prepend-inner-icon="
          !emailErrors.length ? 'mdi-email-check' : 'mdi-email'
        "
        :append-icon="emailErrors.length ? 'mdi-alert' : ''"
        background-color="#42204e"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      />

      <v-text-field
        v-model="password"
        :type="show1 ? 'text' : 'password'"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :error-messages="passwordErrors"
        :counter="26"
        placeholder="Password"
        required
        filled
        rounded
        dense
        color="white"
        prepend-inner-icon="mdi-form-textbox-password"
        background-color="#42204e"
        @click:append="show1 = !show1"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      >
        <template #counter="{ props: { value, max } }">
          <span> {{ value }} / {{ max }}</span>
        </template>
      </v-text-field>

      <v-text-field
        v-model="confirmPassword"
        :type="show2 ? 'text' : 'password'"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :error-messages="confirmPasswordErrors"
        placeholder="Confirm password"
        required
        clearable
        filled
        rounded
        dense
        prepend-inner-icon="mdi-form-textbox-password"
        color="white"
        background-color="#42204e"
        @click:append="show2 = !show2"
        @input="$v.confirmPassword.$touch()"
        @blur="$v.confirmPassword.$touch()"
      >
        <template #counter="{ props: { value, max } }">
          <span> {{ value }} / {{ max }}</span>
        </template>
      </v-text-field>
    </section>
    <v-btn rounded text x-large class="button_grd" @click="registration">
      Зареєструватись
    </v-btn>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  required,
  maxLength,
  email,
  minLength,
  sameAs,
} from 'vuelidate/lib/validators';
export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    radioGroup: { required },
    password: { required, maxLength: maxLength(26), minLength: minLength(8) },
    confirmPassword: {
      required,
      maxLength: maxLength(26),
      minLength: minLength(8),
      sameAsPassword: sameAs('password'),
    },
    firstName: { required, maxLength: maxLength(16), minLength: minLength(3) },
    lastName: { required, maxLength: maxLength(16), minLength: minLength(3) },
  },
  data() {
    return {
      countPeople: '"тут буде кількість зареєстрованих"',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      firstName: '',
      lastName: '',
      radioGroup: '',
      show1: false,
      show2: false,
    };
  },

  computed: {
    progress() {
      return Math.min(100, this.password.length * 3.9);
    },
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
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.maxLength &&
        errors.push('Password must be at most 26 characters long');
      !this.$v.confirmPassword.minLength &&
        errors.push('The password must be at least 8 characters long');
      !this.$v.confirmPassword.required && errors.push('Password is required.');
      if (!this.$v.confirmPassword.sameAsPassword) {
        errors.push('Passwords must be identical.');
      }
      return errors;
    },

    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.maxLength &&
        errors.push('First name must be at most 10 characters long');
      !this.$v.firstName.minLength &&
        errors.push('The First name must be at least 3 characters long');
      !this.$v.firstName.required && errors.push('First name is required.');
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.maxLength &&
        errors.push('Last name must be at most 16 characters long');
      !this.$v.lastName.minLength &&
        errors.push('The Last name must be at least 3 characters long');
      !this.$v.lastName.required && errors.push('Last name is required.');
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.radioGroup.$dirty) return errors;
      !this.$v.radioGroup.required && errors.push('Gender is required');
      return errors;
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'));
    },
  },
  methods: {
    registration() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log('Registration...');
        this.email,
          this.password,
          this.confirmPassword,
          this.errorMessage,
          this.firstName,
          this.lastName,
          (this.radioGroup = '');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main_info {
  width: 840px;
  margin: 0 auto;
  .form_reg {
    width: 400px;
    margin: 3rem auto;
  }
}
.radio_button {
  width: 185px;
  height: 70px !important;
  box-shadow: 0px 20px 30px rgba(179, 34, 31, 0.1);
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(66, 32, 78);
}
.active_male {
  background: linear-gradient(90deg, #0575e6 0%, #021b79 100%);
}
.active_female {
  background: linear-gradient(90deg, #e47ccd 0%, #fd0079 100%);
}
</style>
