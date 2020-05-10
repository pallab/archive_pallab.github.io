<template>
  <aside class="menu">
    <p class="menu-label">Articles</p>
    <ul class="menu-list">
      <li v-for="post in posts" v-bind:key="post.id">
        <a> {{ post.title }}</a>
      </li>
    </ul>
    <p class="menu-label">Collections</p>
    <ul class="menu-list">
      <li>
        <a>Articles</a>
      </li>
      <li>
        <a>Videos</a>
      </li>
      <li>
        <a>Images</a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";
import postsJson from "~/assets/data/articles.json";

export default Vue.extend({
    name: 'Menu',
    data() {
    return {
      posts : postsJson
    };
  },
});
</script>

<style lang="stylus" scoped></style>