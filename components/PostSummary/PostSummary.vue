<template>
  <nuxt-link :to="`post/${post.id}`">

    <div @mouseover="isHovering = true" 
      @mouseout="isHovering = false" 
      :class="{card: isHovering}"
      > 
      <div class="content content-mergin">
          <h3 class="is-medium"> {{ fullName }}</h3>
          <!-- <p > {{ post.summary || post.body.split(' ').slice(0, 50).join(' ') }}...</p> -->
          <p > {{ post.summary }}...</p>
          <span class="is-small"> {{ post.date }}</span>
      </div>
  </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Post {
  id: number;
  title: string;
  summary: string;
  date : string;
}

export default Vue.extend({
  name: "PostSummary",

  props: {
    post: {
      type: Object,
      required: true
    } as PropOptions<Post>
  },

  data() {
    return {
      isHovering: false
    };
  },

  computed: {
    fullName(): string {
      return `${this.post.title}`;
    }
  }

});
</script>

<style scoped>
.content-mergin{
  margin-bottom: 12px;
  padding: 8px;
}
</style>