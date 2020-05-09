<template>
  <div>
    <nav class="level">
      <p class="level-item has-text-centered">
        <span class="logo">Notes</span>
      </p>
    </nav>
    <!-- <nav class="level">
      <p class="level-item has-text-centered">
        <a class="link is-info">Home</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info">Menu</a>
      </p>
    </nav> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Nav"
});
</script>

<style  scoped>
.logo {
  font-size: 36pt;
  font-family: "Amatic SC";
  color: #ff00ff;
  font-weight: 40;
}
</style>
