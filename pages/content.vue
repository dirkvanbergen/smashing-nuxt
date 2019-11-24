<template>
  <div class="flex flex-row flex-wrap items-start">
    <ContentSideMenu class="order-2 md:order-1 mt-4 md:mt-0 w-full mx-4 md:mx-0 md:w-1/3 lg:w-1/4"/>
    <article class="order-1 md:order-2 mx-4 md:mx-0 md:pl-8 md:w-2/3 lg:w-3/4">
      <div v-if="!isLoading && !isNotFound">
        <h1 class="text-2xl text-semibold mb-1">{{currentPage.fields.title}}</h1>
        <Reglement v-if="currentPage.fields.slug === 'huishoudelijk-reglement'" />
        <Statuten v-if="currentPage.fields.slug === 'statuten'" />
        <p class="md-content" v-html="documentToHtmlString(currentPage.fields.text)"></p>
      </div>
      <div v-else-if="isLoading">...</div>
      <div v-else>Not Found</div>

      <CommitteeOverview v-if="currentPage.fields.slug === 'commissies'"/>
      <TeamsOverview v-if="currentPage.fields.slug === 'teams'" :teams="teams" />
      <TeamsOverview v-if="currentPage.fields.slug === 'jeugd-teams'" :teams="teams" />
      <TrainingSchedule v-if="currentPage.fields.slug === 'trainingsschema'" />
      <Inschrijfformulier v-if="currentPage.fields.slug === 'inschrijfformulier'" />
    </article>
  </div>
</template>

<script>
import ContentSideMenu from "@/components/ContentSideMenu";
import TeamsOverview from "@/components/TeamsOverview";
import CommitteeOverview from "@/components/CommitteeOverview";
import TrainingSchedule from "@/components/TrainingSchedule";
import Statuten from "@/components/Statuten";
import Reglement from "@/components/Reglement";
import Inschrijfformulier from "@/components/Inschrijfformulier";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default {
  components: { ContentSideMenu, TeamsOverview, CommitteeOverview, TrainingSchedule, Statuten, Reglement, Inschrijfformulier },
  methods: {
    documentToHtmlString(text) {
      return documentToHtmlString(text);
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

<style scoped>
</style>

