<template>
  <div class="container flex flex-wrap flex-row">
    <ul v-if="news" class="px-2">
      <li v-for="(post, index) in news" :key="index" class="pb-4">
        <h2
          class="text-xl text-bold mb-1 border-smashing border-b text-smashing"
        >{{post.fields.title}}</h2>
        <p>
          <span class="text-smashing pr-1">{{post.sys.createdAt | formatDate}}</span>
          {{post.fields.content}}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
const NEWS_LIMIT = 1000;
export default {
  computed: {
    news() {
      return this.$store.state.news.news.filter((e, i) => i < NEWS_LIMIT);
    }
  },
  filters: {
    formatDate: str => {
      var options = { year: "numeric", month: "long", day: "numeric" };
      var date = new Date(str);
      return date.toLocaleDateString("nl-NL", options);
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("news/getNews", {limit: NEWS_LIMIT});
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>
<style>
</style>

