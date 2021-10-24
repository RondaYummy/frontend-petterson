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
import homePage from '../components/auth_main.vue';

export default {
  name: 'Home',
  components: { homePage },
};
</script>

<style lang="scss">
#card-bg {
  width: 100%;
  background: #381a42;
}

#app {
  background: #2d1436;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  color: white;
  font-size: 14px;
  line-height: 150%;
}

.app_bar {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  background: #381a42;
  color: white;
  padding-right: 5rem;
  padding-left: 5rem;
  .link_auth_block {
    text-decoration: none;
    font-size: 17px;
    color: #ffffff;
    margin: 15px;
    line-height: 65px;
  }

  .auth_block_btn {
    color: white;
    border-radius: 50px;
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, #ee0979, #ff6a00);
    border-image-slice: 1;
  }
}

.logo {
  width: 60px;
  height: 35px;
}
.bg-image {
  margin-top: 3rem;
  background-image: url('../assets/Vector.png'), url('../assets/right.png');
  background-size: contain;
  background-position: left, right;
}
</style>