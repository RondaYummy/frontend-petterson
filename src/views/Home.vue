<template>
  <v-app>
    <section class="app_bar">
      <router-link to="/" class="logo_link">
        <section class="d-flex pt-4">
          <v-app-bar-nav-icon>
            <img src="@/assets/logo.png" class="logo" />
          </v-app-bar-nav-icon>
          <v-toolbar-title class="ml-8 logo_text">NIKKI - BLOG</v-toolbar-title>
        </section>
      </router-link>

      <search-form />

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
          2021 — {{ new Date().getFullYear() }} |
          <strong>
            Andrii Halevych © Junior Frontend / Full - stack DEVELOPER (Vue,
            Node )
          </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import homePage from '../components/auth_main.vue';
import searchForm from '../components/searchForm.vue';

export default {
  name: 'Home',
  components: { homePage, searchForm },
};
</script>

<style lang="scss" scoped>
</style>