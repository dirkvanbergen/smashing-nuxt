<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-sm-12" v-if="news">
        <NewsArticle v-for="(post, index) in news" :key="index"  :post="post" />
      <nuxt-link class="" :to="{name: 'archief'}">Ouder nieuws ...</nuxt-link>
      </div>
      <div class="col-md-4 col-sm-12">
      <a
        href="https://smashingdiemen.teaco.nl/"
        target="_blank"
        class="webshop-button"
        @click.native="menuClick"
      ><img src="@/static/images/teaco.png" />Smashing '72 Webshop</a>
      <br />
      <iframe src="https://bannerbuilder.sponsorkliks.com/skinfo.php?&background-color=FFFFFF&text-color=304B61&header-background-color=304B61&header-text-color=FFFFFF&odd-row=FFFFFF&even-row=09494a&odd-row-text=09494a&even-row-text=ffffff&type=financial&club_id=11880&width=300&height=250" frameborder="0" width="300" height="250"></iframe>
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
    await store.dispatch("pages/getPageHeaders");
  }
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

