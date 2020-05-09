<template>
<!-- <!doctype html> -->
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Notes</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet">
  </head>
  <body>
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
                <Highlight />
                <Highlight />
                <!-- <Highlight /> -->
              </div>
            </div>
            <!-- <div>
              <Footer />
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
</template>

<script lang="ts">
import Vue from "vue";
import Highlight from "./Highlight.vue";
import Menu from "./Menu.vue";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  components: {
    Highlight,
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
