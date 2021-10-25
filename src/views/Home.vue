<template>
  <v-app>
    <section class="app_bar">
      <section class="d-flex pt-4">
        <v-app-bar-nav-icon>
          <img src="@/assets/logo.png" class="logo" />
        </v-app-bar-nav-icon>
        <v-toolbar-title class="ml-8">NIKKI - BLOG</v-toolbar-title>
      </section>

      <div>
        <router-link to="/registration" class="link_auth_block">
          Вперше тут?
          <v-btn class="auth_block_btn" outlined>Реєстрація</v-btn>
        </router-link>
      </div>
    </section>

    <v-main app class="bg-image">
      <v-container fluid>
        <home-page />
        <router-view />
      </v-container>
    </v-main>

    <v-footer app padless absolute class="footer-main">
      <v-card flat tile class="white--text text-center footer-card">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Halevych</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import homePage from '../components/auth_main.vue';

export default {
  name: 'Home',
  components: { homePage },
};
</script>

<style lang="scss" scoped>
</style>