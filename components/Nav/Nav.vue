<template>
  <div class="columns">
    <div class="column">
      <div class="level">
        <p class="level-item">
          <span class="logo">Notes</span>
        </p>
      </div>
    </div>
    <div class="column is-four-fifths">
      <div class="level">
        <p class="level-item">
          <nuxt-link :to="`/`">Home</nuxt-link>
        </p>
        <p class="level-item">
          <nuxt-link :to="`about`">About</nuxt-link>
        </p>

        <p class="level-item">
          <nuxt-link :to="`blogs`">Blogs</nuxt-link>
        </p>

        <p class="level-item">
          <a>Lists</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
export default Vue.extend({
  name: "Nav"
});
</script>

<style  scoped>
.logo {
  font-size: 36pt;
  font-family: "Amatic SC", cursive;
  color: #ff00ff;
  font-weight: 40;
  align-self: center;
  align-items: center;
  align-content: center;
}
</style>
