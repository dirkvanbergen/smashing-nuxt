<template>
    <div class="">
      <div class="">
        <h1 class="">{{currentTeam.fields.title}}</h1>
        <h3 class="" v-if="currentTeam.fields.level">{{currentTeam.fields.level}}</h3>
        <ul class="" v-if="currentTeam.fields.players && currentTeam.fields.players.length > 0">
          <li v-for="(player, index) in currentTeam.fields.players" :key="index">{{player}}</li>
        </ul>
        <div v-if="currentTeam.fields.trainer && currentTeam.fields.trainer === currentTeam.fields.coach">Trainer &amp; coach: {{currentTeam.fields.trainer}}</div>
        <div v-else-if="currentTeam.fields.trainer">Trainer: {{currentTeam.fields.trainer}}</div>
        <div v-if="currentTeam.fields.coach && currentTeam.fields.trainer !== currentTeam.fields.coach">Coach: {{currentTeam.fields.coach}}</div>
        <div v-if="currentTeam.fields.trainingstijden">
          <div>Trainingstijden:</div>
          <div v-for="(t, index) in currentTeam.fields.trainingstijden" :key="index" class="">{{t}}</div>
        </div>
        <div class="" v-html="documentToHtmlString(currentTeam.fields.extraText)"></div>
      </div>
      <div class="">
        <div class="" :key="index" v-for="(rank, index) in ranking">
          {{rank.team.name}}
        </div>
      </div>
      <div class="teamPhoto" v-if="currentTeam.fields.teamFoto">
        <img :alt="currentTeam.fields.teamFoto.fields.title" :src="currentTeam.fields.teamFoto.fields.file.url" />
      </div>
    </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default {
  methods: {
    documentToHtmlString(doc) {
      return documentToHtmlString(doc);
    }
  },
  computed: {
    currentTeam() {
      return this.$store.state.page.currentPage;
    },
    ranking() {
      return this.$store.state.team.ranking;
    },
    isLoading() {
      return this.$store.state.team.isLoading;
    }
  },
  async fetch({ store }) {

    if (store.state.page.currentPage.fields.pouleCode) {
      await store.dispatch("team/getRanking", store.state.page.currentPage.fields.pouleCode);
    } else {
      await store.dispatch("team/clearRanking");
    }
  }
};
</script>

<style>
.extra-text a {
  text-decoration: underline;
}

.teamPhoto img {
  width: 100%;
}
</style>