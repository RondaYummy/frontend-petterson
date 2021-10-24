<template>
  <section>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="people"
      :search-input.sync="search"
      :item-text="people"
      item-value="_id"
      suffix="Search"
      cache-items
      class="mx-4 white--text"
      clearable
      eager
      deletable-chips
      hide-details
      @change="onClick"
    >
      <template v-slot:label>
        <span class="white--text">e.g. Andrii H...</span>
      </template>
      <template #selection="{ attr, on, item, selected }">
        <v-chip
          v-bind="attr"
          :input-value="selected"
          color="blue-grey"
          class="white--text"
          v-on="on"
        >
          <v-icon v-if="item.gender === 'Male'"> mdi-human-male </v-icon>
          <v-icon v-else-if="item.gender === 'Female'">
            mdi-human-female
          </v-icon>
          <v-list-item-title v-text="item.firstName" />
          <v-list-item-subtitle v-text="item.lastName" />
        </v-chip>
      </template>
      <template #item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="text-h5 font-weight-light white--text"
        >
          {{ item.lastName[0] }}{{ item.firstName[0] }}
        </v-list-item-avatar>
        <v-list-item-action>
          <v-icon v-if="item.gender === 'Male'">mdi-human-male</v-icon>
          <v-icon v-else-if="item.gender === 'Female'">mdi-human-female</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.firstName" />
          <v-list-item-subtitle v-text="item.lastName" />
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title v-text="item.email" />
          <v-list-item-subtitle v-text="item.phone" />
        </v-list-item-content>
      </template>
      <template #no-data>
        <v-list-item>
          <v-list-item-title>
            Search for your favorite
            <strong>friends</strong>
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-autocomplete>
  </section>
</template>

<script>
import debounce from 'lodash/debounce';
import api from '../../api';

export default {
  data() {
    return {
      loading: false,
      people: [],
      search: null,
      select: null,
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    onClick() {
      if (this.select !== null) {
        this.$router.push(`/user/${this.select}`);
      }
    },
    querySelections: debounce(function (name) {
      this.loading = true;

      api
        .search(name)
        .then(({ data }) => {
          this.people = data.users;
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => {
          this.loading = false;
        });
    }, 500),
  },
};
</script>
