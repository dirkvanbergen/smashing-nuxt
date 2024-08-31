<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-sm-12" v-if="news">
        <NewsArticle v-for="(post, index) in news" :key="index"  :post="post" />
      <nuxt-link class="" :to="{name: 'archief'}">Ouder nieuws ...</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
const NEWS_LIMIT = 3;
import NewsArticle from "@/components/NewsArticle";
export default {
  components: {NewsArticle},
  computed: {
    news() {
      return this.$store.state.news.news.filter((e, i) => i < NEWS_LIMIT);
    }
  },
  async fetch({ store }) {
    await store.dispatch("news/getNews", {limit: NEWS_LIMIT});
  },
};
</script>
<style scoped lang="scss">
.webshop-button {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all .2s ease;
  img {
    display: block;
    margin-bottom: 10px;
  }
}
</style>

