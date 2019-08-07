<template>
  <div class="flex flex-row flex-wrap items-start">
    <TeamsSideMenu class="order-2 md:order-1 mt-4 md:mt-0 w-full mx-4 md:mx-0 md:w-1/4 lg:w-1/6"/>
    <div class="order-1 md:order-2 mx-4 md:mx-0 md:pl-8 md:w-2/3 lg:w-3/4">
      <h1 class="text-2xl text-semibold mb-1">{{currentTeam.fields.title}}</h1>
      <h3 v-if="currentTeam.fields.level">{{currentTeam.fields.level}}</h3>
      <ul v-if="currentTeam.fields.players && currentTeam.fields.players.length > 0">
        <li v-for="(player, index) in currentTeam.fields.players" :key="index">{{player}}</li>
      </ul>
      <div v-if="currentTeam.fields.trainer">Trainer: {{currentTeam.fields.trainer}}</div>
      <div v-if="currentTeam.fields.coach">Coach: {{currentTeam.fields.coach}}</div>
      <div v-if="currentTeam.fields.trainingstijden">
        <div>Trainingstijden:</div>
        <div v-for="(t, index) in currentTeam.fields.trainingstijden" :key="index" class="ml-4">{{t}}</div>
      </div>
      <p class="extra-text mt-2 md-content" v-if="currentTeam.fields.extraText" v-html="$md.render(currentTeam.fields.extraText)"></p>
    </div>
  </div>
</template>

<script>
import TeamsSideMenu from "@/components/TeamsSideMenu";
export default {
  components: { TeamsSideMenu },
  computed: {
    currentTeam() {
      return this.$store.state.team.currentTeam;
    },
    isLoading() {
      return this.$store.state.team.isLoading;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("team/getTeamBySlug", params.slug);

    await store.dispatch("teams/getTeams");
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>

<style>
.extra-text a {
  text-decoration: underline;
}
</style>

