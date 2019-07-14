<template>
  <div class="flex flex-row flex-wrap items-start">
    <TeamsSideMenu class="order-2 md:order-1 mt-4 md:mt-0 w-full mx-4 md:mx-0 md:w-1/4 lg:w-1/6"/>
    <div class="order-1 md:order-2 mx-4 md:mx-0 md:pl-8 md:w-2/3 lg:w-3/4 hidden md:block">
      <h1 class="text-2xl text-semibold mb-1">Alle teams van Smashing</h1>
      <div class="flex flex-wrap -mx-6 -mt-4">
        <div class="team-container w-full lg:w-1/3 md:w-1/2 p-4" v-for="(team, index) in teams" :key="index" >
          <nuxt-link :to="{name:'teams-slug', params:{slug: team.fields.slug}}"  class="block p-2 hover:shadow">
            <div class="block mb-1 border-smashing text-smashing font-semibold">{{team.fields.title}}</div>
            <div class="my-1">{{team.fields.level}}</div>
            <div class="my-1">Trainer: {{team.fields.trainer}}</div>
            <div class="my-1">Coach: {{team.fields.coach}}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamsSideMenu from "@/components/TeamsSideMenu";
export default {
  components: { TeamsSideMenu },
  computed: {
    teams() {
      return this.$store.state.teams.teams;
    }
  },

  async fetch({ store, params }) {
    await store.dispatch("teams/getTeams");
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>

