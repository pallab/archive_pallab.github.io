<template>
  <section class="section">
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <div class="body">
          <div class="columns">
            <div class="column">
              <Menu />
            </div>
            <div class="column is-four-fifths">
              <Post />
              <Post />
              <!-- <Highlight /> -->
            </div>
          </div>
          <!-- <div>
              <Footer />
          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Post from "~/components/Post/Post.vue";
import Menu from "~/components/Menu/Menu.vue";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  components: {
    Post,
    Menu,
    Nav,
    Footer
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.body {
  margin-left: 10rem;
  margin-right: 10rem;
  margin-top: 40px;
}
</style>
