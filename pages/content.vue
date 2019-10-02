<template>
  <div class="flex flex-row flex-wrap items-start">
    <ContentSideMenu class="order-2 md:order-1 mt-4 md:mt-0 w-full mx-4 md:mx-0 md:w-1/3 lg:w-1/4"/>
    <article class="order-1 md:order-2 mx-4 md:mx-0 md:pl-8 md:w-2/3 lg:w-3/4">
      <div v-if="!isLoading && !isNotFound">
        <h1 class="text-2xl text-semibold mb-1">{{currentPage.fields.title}}</h1>
        <p class="md-content" v-html="$md.render(currentPage.fields.content)"></p>
      </div>
      <div v-else-if="isLoading">...</div>
      <div v-else>Not Found</div>

      <TeamsOverview v-if="currentPage.fields.slug === 'teams'" />
      <JeugdOverview v-if="currentPage.fields.slug === 'jeugd-teams'" />
    </article>
  </div>
</template>

<script>
import ContentSideMenu from "@/components/ContentSideMenu";
import TeamsOverview from "@/components/TeamsOverview";
import JeugdOverview from "@/components/JeugdOverview";
export default {
  components: { ContentSideMenu, TeamsOverview, JeugdOverview },
  computed: {
    currentPage() {
      return this.$store.state.page.currentPage;
    },
    isLoading() {
      return this.$store.state.page.isLoading;
    },
    isNotFound() {
      return this.$store.state.page.isNotFound;
    }
  },
  async fetch({ store, params }) {
    if (params.page) {
      await store.dispatch("page/getPageBySlug", {
        item: params.item,
        slug: params.page
      });
      if (params.page==='teams' || params.page==='jeugd-teams') {        
        await store.dispatch("teams/getTeams");
      }
    } else {
      await store.dispatch("page/getFirstPageFromParent", {
        item: params.item
      })
    }

    await store.dispatch("pages/getPageHeaders");
  }
};
</script>

<style scoped>
</style>

