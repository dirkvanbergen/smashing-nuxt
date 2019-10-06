<template>
  <div class="container flex flex-wrap flex-row">
    <ul v-if="news" class="px-6 lg:px-0 mb-4 w-full lg:w-3/4">
      <li v-for="(post, index) in news" :key="index" class="pb-4">        
        <NewsArticle :post="post" />
      </li> 
    </ul>
  </div>
</template>
<script>
const NEWS_LIMIT = 1000;
import NewsArticle from "@/components/NewsArticle";
export default {
  components: {NewsArticle},
  computed: {
    news() {
      return this.$store.state.news.news.filter((e, i) => i < NEWS_LIMIT);
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

