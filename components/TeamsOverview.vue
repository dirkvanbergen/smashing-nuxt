<template>
      <div class="">
        <div class="" v-for="(team, index) in teams" :key="index" >
          <nuxt-link :to="{name:'teams-slug', params:{slug: team.fields.slug}}"  class="">
            <div class="">{{team.fields.title}}</div>
            <div class="">{{team.fields.level}}</div>
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


