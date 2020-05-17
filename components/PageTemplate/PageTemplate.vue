<template>
  <div class="container is-fullhd">
    <Nav v-bind:style="{ marginTop: '20px' }" />
    <div class="columns">
      <div class="column">
        <div class="level">
          <p class="level-item">
            <Menu />
          </p>
        </div>
      </div>
      <div class="column is-four-fifths">
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Menu from "~/components/Menu/Menu.vue";
import Nav from "~/components/Nav/Nav.vue";

export default Vue.extend({
  components: {
    Menu,
    Nav
  },
});
</script>