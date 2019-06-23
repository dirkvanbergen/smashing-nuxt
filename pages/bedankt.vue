<template>
  <div>
    <h1>Bedankt!</h1>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>


<style scoped>
div {
  color: red;
}
</style>

