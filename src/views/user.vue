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

      <div class="d-flex">
        <router-link to="/user" class="link_pfrofile">
          <v-container fluid style="height: 300px" class="mt-n1">
            <v-menu min-width="200px" rounded offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on">
                  <v-avatar color="teal" size="40">
                    <span class="white--text text-h6">{{ user.initials }}</span>
                  </v-avatar>
                </v-btn>
              </template>
            </v-menu>
            <span class="ml-1 fullname">{{ user.fullName }}</span>
          </v-container>
        </router-link>
      </div>
    </section>

    <v-main app class="bg-image">
      <v-container fluid>
        <user-profile />
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
import searchForm from '../components/searchForm.vue';
import userProfile from '../components/userProfile.vue';

export default {
  name: 'User',
  components: { searchForm, userProfile },
  data: () => ({
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
  }),
};
</script>

<style lang="scss" scoped>
.fullname {
  font-size: 16px;
}
.link_pfrofile {
  text-decoration: none;
  color: white;
}
.link_pfrofile:hover .fullname,
.fullname:hover {
  text-decoration: underline;
}
</style>