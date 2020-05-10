<template>
  <div class="content post">
    <h1 class="post-item">{{ post.title }}</h1>
    <h6 class="post-item">{{ post.date }}</h6>
    <div class="post-item">
      <span v-html="postBody"></span>
    </div>
  </div>
</template>

<script>
import Vue, { PropOptions } from "vue";
import postsJson from "~/assets/data/articles.json";
import axios from "@nuxtjs/axios";

export default Vue.extend({
  name: "Post",

  data() {
    return {
    };
  },

  async asyncData ({ $axios , params}) {
    let data = await $axios.$get(`/posts/${params.id}.html`);
    return { postBody: data }
  },

  computed: {
    post() {
      const id = parseInt(this.$route.params.id);
      return postsJson.find(post => post.id === id);
    }
  },
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