<template>
  <div class="card">
    <nuxt-link :to="'/Card ' + title">
      <img :src="icon" :alt="title">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card a {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-shadow: inset 0 0 1rem rgba(0,0,0,.1);
  color: inherit;
}

a:hover {
  background-color: #f8f8f8;
}

p {
  text-align: center;
}
</style>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String
  }
}
</script>
