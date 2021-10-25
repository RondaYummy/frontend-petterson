<template>
  <v-expansion-panel-content class="mb-1 mt-1">
    <div class="d-flex align-center">
      <v-avatar color="teal" size="50" @click="$router.push(`/`)">
        {{ initials }}
      </v-avatar>
      <div class="d-flex flex-column info_comment">
        <h4>{{ firstName }} {{ lastName }}</h4>
        <div>
          <span>
            <v-icon small>mdi-human-male</v-icon>
            <v-icon small v-if="false">mdi-human-female</v-icon>
            <span>{{ email }}</span>
          </span>
          <v-btn color="orange" icon small @click="editComment">
            <v-icon small> mdi-pencil </v-icon>
          </v-btn>

          <v-btn color="red" icon small @click="deleteComment">
            <v-icon small> mdi-delete </v-icon>
          </v-btn>
        </div>
      </div>
      <v-divider vertical></v-divider>
      <span class="text_comment">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        voluptate eaque iste, quasi sapiente libero id! Repellat, quod! Vitae
        eos ad debitis quas atque ullam nisi quidem cupiditate doloribus nulla!
      </span>
    </div>
    <v-divider class="mt-2" />
  </v-expansion-panel-content>
</template>

<script>
export default {
  data: () => ({
    panel: [],
    firstName: 'Andrii',
    lastName: 'Halevych',
    email: 'email@ukr.net',
  }),
  computed: {
    initials() {
      return this.firstName[0] + this.lastName[0];
    },
  },
  methods: {
    deleteComment() {
      console.log('Deleting comment...');
    },
    editComment() {
      console.log('Editing comment...');
    },
  },
};
</script>

<style>
.info_comment {
  min-width: 120px;
  width: 18%;
}
.text_comment {
  width: 82%;
  padding: 15px;
}
</style>