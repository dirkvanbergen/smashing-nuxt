<template>
  <div class="flex flex-row flex-wrap">
    <ContentSideMenu class="order-2 md:order-1 mt-4 md:mt-0 w-full mx-4 md:mx-0 md:w-1/3 lg:w-1/4"/>
    <article class="order-1 md:order-2 mx-4 md:mx-0 md:pl-8 md:w-2/3 lg:w-3/4">
      <div v-if="!isLoading && !isNotFound">
        <h1 class="text-2xl text-semibold mb-1">{{currentPage.fields.title}}</h1>
        <p>{{currentPage.fields.content}}</p>
      </div>
      <div v-else-if="isLoading">Loading</div>
      <div v-else>Not Found</div>
    </article>
  </div>
</template>

<script>
import ContentSideMenu from "@/components/ContentSideMenu";
export default {
  components: { ContentSideMenu },
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
    await store.dispatch("page/getPageBySlug", {
      item: params.item,
      slug: params.page
    });

    await store.dispatch("pages/getPageHeaders");
  }
};
</script>

<style scoped>
</style>

