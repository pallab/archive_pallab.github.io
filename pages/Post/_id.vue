<template>
  <PostTemplate>
    <template #title>{{ post.title }}</template>
    <template #date>{{ post.date }}</template>
    <component :is="component" :key="post.id" />
  </PostTemplate>
</template>

 
<script>
import Vue, { PropOptions } from "vue";
import postsJson from "~/assets/data/articles.json";
import PostTemplate from "~/components/PostTemplate/PostTemplate.vue";

export default Vue.extend({
  name: "Post",

  components: {
    PostTemplate
  },

  data() {
    return {
      component: null
    };
  },

  computed: {
    post() {
      const id = parseInt(this.$route.params.id);
      return postsJson.find(post => post.id === id);
    },
    loader() {
      return () => import(`~/content/Post${this.$route.params.id}`);
    }
  },

  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.component = () => import("~/content/Post1.vue");
      });
  }
});
</script>
