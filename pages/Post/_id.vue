<template>
  <PageTemplate>
    <PostTemplate>
      <template #title>{{ post.title }}</template>
      <template #date>{{ post.date }}</template>
      <component :is="component" :key="post.id" />
    </PostTemplate>
  </PageTemplate>
</template>

 
<script>
import Vue, { PropOptions } from "vue";
import postsJson from "~/assets/data/articles.json";
import PostTemplate from "~/components/PostTemplate/PostTemplate.vue";
import PageTemplate from "~/components/PageTemplate/PageTemplate.vue";

export default Vue.extend({
  name: "Post",

  components: {
    PageTemplate, PostTemplate
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
      return () => import(`~/content/${this.$route.params.id}`);
    }
  },

  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.component = () => import("~/content/1.vue");
      });
  }
});
</script>
