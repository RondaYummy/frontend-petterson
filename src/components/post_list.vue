<template>
  <div class="post_list_block">
    <v-card class="card_main">
      <v-card-title class="d-flex justify-space-between">
        <div>
          <v-avatar
            color="teal"
            size="50"
            @click="$router.push(`/`)"
            class="avatar_link"
          >
            {{ initials }}
          </v-avatar>
          <span class="user_name"> {{ firstName }} {{ lastName }}</span>
          <v-btn color="orange" icon small @click="editPost">
            <v-icon small> mdi-pencil </v-icon>
          </v-btn>

          <v-btn color="red" icon small @click="deletePost">
            <v-icon small> mdi-delete </v-icon>
          </v-btn>
        </div>
        <span class="card_subtittle">
          <v-icon small>mdi-human-male</v-icon>
          <v-icon small v-if="false">mdi-human-female</v-icon>
          {{ email }}
        </span>
      </v-card-title>
      <v-card-text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        voluptate eaque iste, quasi sapiente libero id! Repellat, quod! Vitae
        eos ad debitis quas atque ullam nisi quidem cupiditate doloribus nulla!
      </v-card-text>
    </v-card>
    <v-expansion-panels class="comments_list">
      <v-expansion-panel>
        <v-expansion-panel-header>
          Читати коментарі ( {{ countComments }} )
        </v-expansion-panel-header>
        <comment-list />
        <commentField />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import commentList from './comment_list.vue';
import commentField from './comment_field.vue';
export default {
  components: {
    commentList,
    commentField,
  },
  data: () => ({
    firstName: 'Andrii',
    lastName: 'Halevych',
    email: 'email@ukr.net',
    countComments: 5,
  }),
  computed: {
    initials() {
      return this.firstName[0] + this.lastName[0];
    },
  },
  methods: {
    editPost() {
      console.log('edit');
    },
    deletePost() {
      console.log('delete');
    },
  },
};
</script>

<style lang="scss" scoped>
.comments_list {
  opacity: 0.8;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.post_list_block {
  width: 750px;
  margin: 10px auto;
  border-radius: 15px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background: rgba($color: #ffffff, $alpha: 0.8);
  .card_main {
    background: rgba($color: #ffffff, $alpha: 0.9);
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    padding: 5px;
    .avatar_link {
      cursor: pointer;
    }
    .avatar_link:hover {
      box-shadow: 0px 0px 2px 2px slategray;
    }
    .user_name {
      font-style: to-upper-case($string: '');
    }
    .card_subtittle {
      font-size: 14px;
      color: lightslategray;
    }
  }
}
</style>