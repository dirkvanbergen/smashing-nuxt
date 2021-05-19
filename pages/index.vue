<template>
  <div class="container flex flex-wrap flex-row">
    <img
      src="@/static/images/smashing-foto-1.jpg"
      class="-mt-8 w-full h-32 md:h-48 lg:h-64 object-cover object-center mb-4"
    >
    <ul v-if="news" class="px-6 lg:px-0 mb-4 w-full lg:w-3/4">
      <li v-for="(post, index) in news" :key="index" class="pb-4">
        <NewsArticle :post="post" />
      </li>
      <li><nuxt-link class="text-xl text-bold mb-1 border-smashing border-b text-smashing" :to="{name: 'archief'}">Ouder nieuws ...</nuxt-link></li>
    </ul>
    <div class="sponsor-panel w-full lg:w-1/4 px-6 lg:px-4">
      <a
        href="https://smashingdiemen.teaco.nl/"
        target="_blank"
        class="webshop-button inline-block w-full mb-4 align-center text-lg px-4 py-2 leading-none shadow rounded hover:shadow-xl text-smashing hover:text-white hover:bg-smashing mt-4 lg:mt-0"
        @click.native="menuClick"
      ><img src="@/static/images/teaco.png" />Smashing '72 Webshop</a>
      <br />
      <iframe src="https://bannerbuilder.sponsorkliks.com/skinfo.php?&background-color=FFFFFF&text-color=304B61&header-background-color=304B61&header-text-color=FFFFFF&odd-row=FFFFFF&even-row=09494a&odd-row-text=09494a&even-row-text=ffffff&type=financial&club_id=11880&width=300&height=250" frameborder="0" width="300" height="250"></iframe>
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
  async fetch({ store, params }) {
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

