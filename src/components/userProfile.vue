<template>
  <section>
    <v-tabs
      vertical
      background-color="transparent"
      slider-color="red"
      slider-size="3"
      icons-and-text
    >
      <div class="tab_menu">
        <v-tab>
          <v-icon>mdi-account</v-icon>
          <v-icon large color="green darken-2"> mdi-domain </v-icon>
          Профіль
        </v-tab>
        <v-tab>
          <v-icon> mdi-lock </v-icon>
          Друзі
        </v-tab>
        <v-tab>
          <v-icon large color="success" dark> mdi-access-point </v-icon>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
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
.v-tabs::v-deep .v-tabs-items {
  background: transparent;
}
</style>
