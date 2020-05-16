<template>
  <div class="container is-fullhd">
    <Nav v-bind:style="{ marginTop: '20px' }" />
    <div class="columns">
      <div class="column">
        <div class="level">
          <p class="level-item">
            <Menu />
          </p>
        </div>
      </div>
      <div class="column is-four-fifths">
        <PostSummary v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostSummary from "~/components/PostSummary/PostSummary.vue";
import Menu from "~/components/Menu/Menu.vue";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
import postsJson from "~/assets/data/articles.json";

export default Vue.extend({
  components: {
    PostSummary,
    Menu,
    Nav,
    Footer
  },

  data() {
    return {
      posts: postsJson
    };
  }
});
</script>

<style>
.bodyc {
  margin-left: 10rem;
  margin-right: 10rem;
  margin-top: 40px;
}
</style>
