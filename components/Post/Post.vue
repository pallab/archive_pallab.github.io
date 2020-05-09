<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title"> {{ fullName }}</p>
    </header>
    <div class="card-content">
      <p class="title"> {{ body }} </p>
      <p class="subtitle"> {{summary }}</p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          View on
          <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
        </span>
      </p>
      <p class="card-footer-item">
        <span>
          Share on
          <a href="#">Facebook</a>
        </span>
      </p>
    </footer>
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
  name: "Post",

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
      return `${this.post.id} ${this.post.date} ${this.post.title}`;
    }
  }
});
</script>

<style lang="stylus" scoped></style>