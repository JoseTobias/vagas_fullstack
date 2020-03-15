<template>
  <div>
    <h2>{{ title }}</h2>
    <template v-for="(item, index) in texts">
      <nuxt-link :to="'/' + item" :key="index">
        {{ item }}
      </nuxt-link>
    </template>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 15px;
}

a {
  display: block;
  color: inherit;
  margin-bottom: 10px;
}

a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  a:last-child {
    margin-bottom: 20px;
  }
}
</style>

<script>
export default {
  props: {
    title: String,
    texts: Array
  }
}
</script>
