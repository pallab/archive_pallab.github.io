<template>
  <div class="container is-fullhd content post">
    <h1 class="post-item">
      <slot name="title">Name of Post</slot>
    </h1>
    <h6 class="post-item">
      <slot name="date">Date Posted</slot>
    </h6>
    <div class="post-item">
      <slot>Post Body</slot>
    </div>
  </div>
</template>


<style scoped>
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.post-item {
  text-align: center;
  /* padding-left: 30px;
  padding-right: 30px; */
}

.post > h1 {
  color: turquoise;
}

.post > h6 {
  color: yellowgreen;
}

.post > div {
  margin-top: 50px;
}
</style>