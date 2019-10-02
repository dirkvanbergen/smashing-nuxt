<template>
      <div class="flex flex-wrap -mx-6 -mt-4">
        <div class="team-container w-full lg:w-1/3 md:w-1/2 p-4" v-for="(team, index) in teams" :key="index" >
          <nuxt-link :to="{name:'teams-slug', params:{slug: team.fields.slug}}"  class="block p-2 hover:shadow">
            <div class="block mb-1 border-smashing text-smashing font-semibold">{{team.fields.title}}</div>
            <div class="my-1">{{team.fields.level}}</div>
          </nuxt-link>
        </div>
      </div>
</template>

<script>
export default {
  computed: {
    teams() {
      return this.$store.state.teams.teams.filter(team => team.isJeugdTeam);
    }
  }
};
</script>

