<template>
  <section class="all_profile">
    <v-tabs
      vertical
      background-color="transparent"
      slider-color="orange"
      slider-size="4"
    >
      <div class="tab_menu border_menu">
        <v-tab>
          <v-icon class="mr-2"> mdi-account </v-icon>
          Профіль
        </v-tab>
        <v-tab>
          <v-icon class="mr-2"> mdi-account-group </v-icon>
          Друзі
        </v-tab>
        <v-tab>
          <v-icon class="mr-2"> mdi-account-multiple-plus </v-icon>
          Заявки в друзі
        </v-tab>
      </div>

      <v-tab-item>
        <v-card flat class="tt">
          <v-card-text>
            <h1 class="tittle_block">{{ firstName }} {{ lastName }}</h1>
          </v-card-text>
          <v-btn rounded text x-large class="button_main"> Надіслати </v-btn>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat class="tt">
          <v-card-text>
            <h1 class="tittle_block">friends list</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat class="tt">
          <v-card-text>
            <h1 class="tittle_block">friend request</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </section>
</template>

<script>
export default {
  data: () => ({
    firstName: 'Andrii',
    lastName: 'Halevych',
  }),
};
</script>

<style lang="scss" scoped>
.all_profile {
  width: 90%;
  margin: 0 auto;
  .tab_menu {
    background: #441c53;
    border-radius: 30px;
    color: #ffffff;
    padding: 15px;
  }
  .tt {
    background: transparent !important;
    border-radius: 15px;
  }
  .tittle_block {
    color: white;
  }
}
.border_menu {
  margin: 0 auto;
  border: 8px solid transparent;
  border-image: linear-gradient(
    to left bottom,
    #ff6a00 0%,
    transparent 40%,
    transparent 60%,
    #ee0979 80%
  );
  border-image-slice: 1;
}
.v-tabs::v-deep .v-tabs-items {
  background: transparent;
}
</style>
