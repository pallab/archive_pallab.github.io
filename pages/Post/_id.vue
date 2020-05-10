<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ post.title }}</p>
    </header>
    <div class="card-content">
      <p class="title">{{ post.body }}</p>
      <p class="subtitle">{{ post.summary }}</p>
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
import postsJson from "~/assets/data/articles.json";

interface Post {
  id: number;
  title: string;
  body: string;
  summary: string;
  date: string;
}

export default Vue.extend({
  name: "Post",

  // props: {
  //   id: Number
  // },

  data() {
    return {
      id: this.$route.params.id
    };
  },

  computed: {
    post() {
       const id = parseInt(this.$route.params.id);
      return postsJson.find( post => post.id === id );
      // return postsJson.find(function(post, index) {
      //   return post.id === id ? true : false;
      // });
    }
  }
});
</script>

<style lang="stylus" scoped></style>