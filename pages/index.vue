<template>
  <section class="container flex flex-wrap flex-row">
    <img
      src="@/static/images/smashing-foto-1.jpg"
      class="-mt-8 md:px-2 w-full h-32 md:h-48 lg:h-64 object-cover object-center mb-4"
    >
    <ul v-if="news" class="px-2">
      <li v-for="(post, index) in news" :key="index" class="pb-4">
        <!-- <nuxt-link :to="{name: 'nieuws-slug', params: {slug: post.fields.slug}}">{{post.fields.title}}</nuxt-link> -->
        <h2
          class="text-xl text-bold mb-1 border-smashing border-b text-smashing"
        >{{post.fields.title}}</h2>
        <span class="text-smashing pr-1">{{post.sys.createdAt | formatDate}}</span>
        <p v-html="$md.render(post.fields.content)">
        </p>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  computed: {
    news() {
      return this.$store.state.news.news;
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
    await store.dispatch("news/getNews");
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>
<style>
</style>

