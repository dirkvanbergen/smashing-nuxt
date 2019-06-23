<template>
  <article>
    <h1>{{post.fields.title}}</h1>
    <p>{{post.fields.content}}</p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    post() {
      return this.$store.state.news.news.find(
        post => post.fields.slug === this.slug
      );
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("news/getNews", params.slug);

    await store.dispatch("teams/getTeams");
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>

<style scoped>
</style>

