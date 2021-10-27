<template>
  <v-card class="bg-h">
    <v-card-title class="bg-t">
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        class="bg-t"
      />
    </v-card-title>
    <v-data-table
      class="bg-t"
      :headers="headers"
      :items="users"
      :search="search"
      :loading="loading"
      loading-text="Loading... Please wait"
      no-data-text="У цього користувача друзів немає."
      no-results-text="Такого користувача серед друзів не знайдено"
      @click:row="transitionToUser"
    >
      <template v-slot:item.delete="{ item }">
        <v-btn
          outlined
          rounded
          color="error"
          @click="deleteUser(item.fullname)"
        >
          <v-icon> mdi-account-remove </v-icon> Delete
        </v-btn>
      </template>

      <template v-slot:item.gender="{ item }">
        <v-img
          src="../assets/female.png"
          v-if="item.gender.toLowerCase() === 'female'"
          max-height="25px"
          max-width="25px"
          class="ml-2"
        />
        <v-img
          src="../assets/male.png"
          v-if="item.gender.toLowerCase() === 'male'"
          max-height="25px"
          max-width="25px"
          class="ml-2"
        />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      loading: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'fullname',
        },
        { text: 'E-mail', value: 'email' },
        { text: 'Gender', value: 'gender' },

        { text: 'Registration', value: 'createdAt' },
        {
          text: 'Actions',
          value: 'delete',
          sortable: false,
          filterable: false,
        },
      ],
      users: [
        {
          fullname: 'KitKat',
          email: 'basrers@ukr.net',
          gender: 'Female',
          carbs: 65,
          protein: 7,
          createdAt: '10.01.2021',
        },
        {
          fullname: 'KitKat',
          email: 'basrers@ukr.net',
          gender: 'Male',
          carbs: 65,
          protein: 7,
          createdAt: '10.01.2021',
        },
      ],
    };
  },
  methods: {
    getUserFriends() {
      this.loading = true;
    },
    transitionToUser(user) {
      console.log(user);
    },
    deleteUser(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
.bg-h {
  background: rgba(245, 245, 245, 0.9);
}
.bg-t {
  background: transparent;
}
</style>