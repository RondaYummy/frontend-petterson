<template>
  <v-app>
    <section class="app_bar">
      <section class="d-flex pt-4">
        <v-app-bar-nav-icon>
          <img src="@/assets/logo.png" class="logo" />
        </v-app-bar-nav-icon>
        <v-toolbar-title class="ml-8">NIKKI - BLOG</v-toolbar-title>
      </section>
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
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar color="brown">
                      <span class="white--text text-h5">{{
                        user.initials
                      }}</span>
                    </v-avatar>

                    <p class="text-caption mt-1">
                      {{ user.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text> Edit Account </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text> Disconnect </v-btn>
                  </div>
                </v-list-item-content>
              </v-card>
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