<template>
  <section>
    <v-textarea
      v-model="comment_text"
      filled
      label="Write comment here..."
      color="orange orange-darken-4"
      single-line
      auto-grow
      rows="2"
      full-width
      append-icon="mdi-send"
      class="field_com"
      @click:append="sendComment"
    />
  </section>
</template>

<script>
export default {
  data: () => ({
    comment_text: '',
  }),
  methods: {
    sendComment() {
      console.log('Sended comment...');
      this.comment_text = '';
    },
  },
};
</script>

<style scoped>
.field_com {
  margin-bottom: -30px;
}
</style>