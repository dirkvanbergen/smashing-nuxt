<template>
  <div class="page">
    <Header :teams="teams" :items="menuItems" :pages="pages" />
    <nuxt/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
components: { Header },

  computed: {
    teams() {
      return this.$store.state.teams.teams
    },
    pages() {
      return this.$store.state.pages.headers
    },
    menuItems() {
      const reducer = (acc, val) => {
        if (acc.filter(item => item.sys.id === val.fields.parent.sys.id).length === 0) { acc.push(val.fields.parent); return acc; }
      }
      var items = this.pages.reduce(reducer, [])
      items.sort((a, b) => a.fields.order - b.fields.order)
      return items
    }
  }
}
</script>

<style>
</style>

