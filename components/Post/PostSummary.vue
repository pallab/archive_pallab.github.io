<template>
    <div class="content">
      <h3 class="is-medium"> {{ fullName }}</h3>
      <p > {{ post.summary }}</p>
      <span class="is-small"> {{ post.date }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Post {
  id: number;
  title: string;
  body: string;
  summary: string;
  date : string;
}

export default Vue.extend({
  name: "PostSummary",

  props: {
    post: {
      type: Object,
      required: true
    } as PropOptions<Post>
  },

  data() {
    return {
      message: "This is a message"
    };
  },

  computed: {
    fullName(): string {
      return `${this.post.title}`;
    }
  }
});
</script>

<style lang="stylus" scoped></style>