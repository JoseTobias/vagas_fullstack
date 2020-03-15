<template>
  <div>
    <h2>{{ title }}</h2>
    <template v-for="(item, index) in texts">
      <p :key="index">
        {{ item }}
      </p>
    </template>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 15px;
}

p {
  margin-bottom: 10px;
}

@media (max-width: 767px) {
  p:last-child {
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
