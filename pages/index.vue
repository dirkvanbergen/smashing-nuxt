<template>
  <section class="container">
    <h2>Nieuws</h2>
    <ul v-if="news">
        <li v-for="(post, index) in news" :key="index">
            <nuxt-link :to="{name: 'nieuws-slug', params: {slug: post.fields.slug}}">{{post.fields.title}}</nuxt-link>
        </li>
    </ul>
  </section>
</template>
<script>
export default {
    computed: {
        news() {
            return this.$store.state.news.news
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('news/getNews');
        await store.dispatch('teams/getTeams');
        await store.dispatch('pages/getPageHeaders');
    }
}
</script>
<style>
</style>

