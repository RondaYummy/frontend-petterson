<template>
  <section class="all_profile">
    <v-tabs
      vertical
      background-color="transparent"
      slider-color="orange"
      slider-size="4"
    >
      <div class="tab_menu border_menu">
        <v-tab active-class="active_menu" class="drop_s">
          <v-icon class="mr-2"> mdi-account </v-icon>
          Профіль
        </v-tab>
        <v-tab active-class="active_menu" class="drop_s">
          <v-icon class="mr-2"> mdi-account-group </v-icon>
          Друзі
        </v-tab>
        <v-tab active-class="active_menu" class="drop_s">
          <v-icon class="mr-2"> mdi-account-multiple-plus </v-icon>
          Заявки в друзі
        </v-tab>
      </div>

      <v-tab-item>
        <v-card flat class="bt">
          <v-card-text>
            <h1 class="tittle_block">{{ firstName }} {{ lastName }}</h1>
          </v-card-text>
          <section class="section_write_post">
            <v-textarea
              v-model="post_text"
              filled
              label="Write a post here..."
              color="orange orange-darken-4"
              auto-grow
              clearable
              rows="2"
              prepend-icon="mdi-comment"
              class="post_area"
            />

            <v-btn rounded text x-large class="button_grd mt-n4">
              Надіслати
            </v-btn>
          </section>

          <post-list />

          <span class="createdAt">На сайті з {{ createdAt }}</span>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat class="bt">
          <v-card-text>
            <h1 class="tittle_block">friends list</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat class="bt">
          <v-card-text>
            <h1 class="tittle_block">friend request</h1>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </section>
</template>

<script>
import postList from './post_list.vue';

export default {
  components: { postList },
  data: () => ({
    firstName: 'Andrii',
    lastName: 'Halevych',
    post_text: '',
    createdAt: '10.01.2020',
  }),
};
</script>

<style lang="scss" scoped>
.all_profile {
  width: 90%;
  margin: 0 auto;
  .tab_menu {
    background: #57216a;
    border-radius: 30px;
    color: #ffffff;
    padding: 15px;
  }
  .bt {
    background: transparent !important;
    border-radius: 15px;
  }
  .tittle_block {
    color: white;
    font-size: 45px;
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
.section_write_post {
  width: 750px;
  margin: 0 auto;
  background: rgba($color: #ffffff, $alpha: 0.8);
  border-radius: 15px;
  padding: 12px 12px 12px 9px;
  color: white;
  .post_area {
    border-top-right-radius: 15px;
  }
}
.createdAt {
  color: #8b5d9a;
  font-size: 16px;
}
.drop_s {
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8));
  font-weight: bold;
}
.active_menu {
  color: #ff6a00;
  filter: saturate(300%);
}
</style>
