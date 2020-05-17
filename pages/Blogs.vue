<template>
  <PageTemplate>
    <PostSummary v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
  </PageTemplate>
</template>

<script lang="ts">
import Vue from "vue";
import PostSummary from "~/components/PostSummary/PostSummary.vue";
import postsJson from "~/assets/data/articles.json";
import PageTemplate from "~/components/PageTemplate/PageTemplate.vue";

export default Vue.extend({
  components: {
    PageTemplate, PostSummary
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
