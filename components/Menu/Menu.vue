<template>
  <aside class="menu">
    <p class="menu-label">Articles</p>
    <ul class="menu-list">
      <li>
        <a>Article 1</a>
      </li>
      <li>
        <a>Article 2</a>
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
export default Vue.extend({
    name: 'Menu',
});
</script>

<style lang="stylus" scoped></style>