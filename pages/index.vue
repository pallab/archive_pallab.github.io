<template>
  <section class="section">
    <div>
      <div>
        <div class="bodyc">
          <div class="columns">
            <div class="column">
              <Nav />
              <Menu />
            </div>
            <div class="column is-four-fifths">
              <PostSummary v-for="post in posts" v-bind:key="post.id" v-bind:post="post"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      posts : postsJson
    };
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.bodyc {
  margin-left: 10rem;
  margin-right: 10rem;
  margin-top: 40px;
}
</style>
