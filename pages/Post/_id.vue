<template>
  <div class="content post">
    <h1 class="post-item">{{ post.title }}</h1>
    <h6 class="post-item">{{ post.date }}</h6>
    <p class="post-item">{{ post.body }}</p>
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

  computed: {
    post() {
      const id = parseInt(this.$route.params.id);
      return postsJson.find(post => post.id === id);
    }
  }
});
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.post-item {
  max-width: 1200px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
}
</style>