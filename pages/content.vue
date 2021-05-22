<template>
  <div class="row">
    <ContentSideMenu class="col-md-3"/>
    <article class="col-md-9">
      <div v-if="pageType == 'content'">
        <h1 class="">{{currentPage.fields.title}}</h1>
        <p class="md-content" v-html="documentToHtmlString(currentPage.fields.text)"></p>
        <CommitteeOverview v-if="currentPage != null && currentPage.fields.slug === 'commissies'" />
      </div>
      <Team v-if="pageType == 'team'" />
    </article>
  </div>
</template>

<script>
import ContentSideMenu from "@/components/ContentSideMenu";
import Team from "@/components/Team";
import CommitteeOverview from "@/components/CommitteeOverview";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import render from "@/modules/render-options";
export default {
  components: { ContentSideMenu, CommitteeOverview, Team },
  methods: {
    documentToHtmlString(text) {
      return documentToHtmlString(text, render.options);
    }
  },
  computed: {
    pageType() {
      return this.$store.state.page.pageType;
    },
    currentPage() {
      return this.$store.state.page.currentPage;
    },
    isLoading() {
      return this.$store.state.page.isLoading;
    },
    isNotFound() {
      return this.$store.state.page.isNotFound;
    },
  },
  async fetch({ store, params }) {
    if (params.page) {
      await store.dispatch("page/getPageBySlug", {
        item: params.item,
        slug: params.page
      });
    } 

    await store.dispatch("pages/getPageHeaders");
  }
};
</script>

<style lang="scss" scoped>
</style>

