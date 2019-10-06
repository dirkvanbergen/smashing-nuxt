<template>
      <div class="flex flex-wrap -mx-6">
        <div class="team-container w-full lg:w-1/4 md:w-1/3 p-4" v-for="(team, index) in teams" :key="index" >
          <nuxt-link :to="{name:'teams-slug', params:{slug: team.fields.slug}}"  class="team-link block p-2 shadow rounded text-center py-8 border-gray-100 hover:bg-smashing hover:text-white">
            <div class="team-name block mb-1 border-smashing text-smashing font-semibold">{{team.fields.title}}</div>
            <div class="team-level my-1">{{team.fields.level}}</div>
          </nuxt-link>
        </div>
      </div>
</template>

<script>
export default {
  props: ['teams']
};
</script>

<style lang="scss" scoped>
.team-link {
  transition: all .2s ease;

  &:hover .team-name {
    color: white;
  }
}
</style>


