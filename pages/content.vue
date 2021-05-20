<template>
  <div class="row">
    <ContentSideMenu class="col-md-3"/>
    <article class="col-md-9">
      <div v-if="!isLoading && !isNotFound">
        <h1 class="">{{currentPage.fields.title}}</h1>
        <p class="md-content" v-html="documentToHtmlString(currentPage.fields.text)"></p>
      </div>
      <div v-else-if="isLoading">...</div>
      <div v-else>Not Found</div>

      <CommitteeOverview v-if="currentPage.fields.slug === 'commissies'"/>
      <TeamsOverview v-if="currentPage.fields.slug === 'teams'" :teams="teams" />
      <TeamsOverview v-if="currentPage.fields.slug === 'jeugd-teams'" :teams="teams" />
    </article>
  </div>
</template>

<script>
import ContentSideMenu from "@/components/ContentSideMenu";
import TeamsOverview from "@/components/TeamsOverview";
import CommitteeOverview from "@/components/CommitteeOverview";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import render from "@/modules/render-options";
export default {
  components: { ContentSideMenu, TeamsOverview, CommitteeOverview },
  methods: {
    documentToHtmlString(text) {
      return documentToHtmlString(text, render.options);
    }
  },
  computed: {
    isJeugdOverview(){
      return this.currentPage.fields.slug === 'jeugd-teams';
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
    teams() {
      return this.$store.state.teams.teams.filter(t => t.fields.isJeugdTeam === this.isJeugdOverview || (!t.fields.isJeugdTeam && !this.isJeugdOverview));
    }
  },
  async fetch({ store, params }) {
    if (params.page) {
      await store.dispatch("page/getPageBySlug", {
        item: params.item,
        slug: params.page
      });     
    } else {
      await store.dispatch("page/getFirstPageFromParent", {
        item: params.item
      })
    }

    await store.dispatch("teams/getTeams");
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>

<style lang="scss" scoped>
</style>

