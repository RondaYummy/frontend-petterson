<template>
  <section class="d-flex justify-center flex-column">
    <div class="main_info">
      <h1 class="text">Знайоства без перешкод</h1>
      <p class="text2">
        Для сучасного світу згуртованість команди професіоналів однозначно
        фіксує необхідність системи навання кадрів, відповідающих потребам.
      </p>
    </div>
    <v-form class="main_section">
      <v-text-field
        filled
        rounded
        dense
        :rules="rules.emailRules"
        :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
        clearable
        class="input_style"
        background-color="#42204e"
      />
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="rules.passwordRules"
        :type="show1 ? 'text' : 'password'"
        filled
        rounded
        dense
        clearable
        background-color="#42204e"
        class="input_style"
        @click:append="show1 = !show1"
      />
      <v-btn rounded text x-large class="button_main">Увійти</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      password: '',
      rules: {
        emailRules: [
          (v) => !!v || 'Потрібний E-mail',
          (v) => /.+@.+\..+/.test(v) || 'E-mail пошта повинна бути дійсною',
        ],
        passwordRules: [
          (v) => !!v || 'Потрібний пароль',
          (v) =>
            (v && v.length <= 26) ||
            'Пароль повинен мати не більше 26 символів.',
          (v) =>
            (v && v.length >= 8) || 'Пароль повинен мати не менше 8 символів.',
        ],
      },
    };
  },
};
</script>

<style>
.button_main {
  background: linear-gradient(90deg, #ee0979 0%, #ff6a00 100%);
  box-shadow: 0px 20px 30px rgba(179, 34, 31, 0.2);
  border-radius: 500px;
}

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