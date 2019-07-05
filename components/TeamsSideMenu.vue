<template>
  <div class="side-menu flex flex-col shadow px-4 pb-2">
    <h1 class="text-xl text-semibold py-4 mb-1 border-b"><nuxt-link class="hover:underline" :to="{name: 'teams'}">Teams</nuxt-link></h1>
    <nuxt-link
      class="my-2 hover:underline"
      :to="{name: 'teams-slug', params: {slug: link.fields.slug}}"
      v-for="(link, index) in allTeams"
      :key="index"
    >{{link.fields.title}}</nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    currentItem() {
      return this.$store.state.team.currentTeam;
    },
    allTeams() {
      return this.$store.state.teams.teams;
    }
  }
};
</script>

