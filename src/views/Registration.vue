<template>
  <v-app>
    <section class="app_bar">
      <section class="d-flex pt-4">
        <v-app-bar-nav-icon>
          <img src="@/assets/logo.png" class="logo"
        /></v-app-bar-nav-icon>
        <v-toolbar-title class="ml-8">NIKKI - BLOG</v-toolbar-title>
      </section>

      <div>
        <router-link to="/" class="link_auth_block">
          Уже є аккаунт??
          <v-btn class="auth_block_btn" outlined>Вхід</v-btn>
        </router-link>
      </div>
    </section>

    <v-main app class="bg-image">
      <v-container fluid>
        <registration-page />
        <router-view />
      </v-container>
    </v-main>

    <v-footer app padless absolute>
      <v-card flat tile class="white--text text-center" id="card-bg">
        <v-divider />

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Halevych</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import registrationPage from '../components/registration.vue';
export default {
  name: 'Reg',
  components: { registrationPage },
};
</script>

<style lang="scss" scoped>
</style>