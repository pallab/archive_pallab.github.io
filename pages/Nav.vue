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
          <strong>All</strong>
        </p>
        <p class="level-item">
          <a>Published</a>
        </p>
        <p class="level-item">
          <a>Drafts</a>
        </p>
        <p class="level-item">
          <a>Deleted</a>
        </p>
        <p class="level-item">
          <a class="button is-success">New</a>
        </p>
      </div>
    </div>
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
  font-family: "Amatic SC", cursive;
  color: #ff00ff;
  font-weight: 40;
  align-self: center;
  align-items: center;
  align-content: center;
}
</style>
