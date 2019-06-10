<template>
    <div class="header">
        <div class="container">
            <h1 class="header__title">Smashing '72</h1>
        </div>        
        <nav class="menu">
            <nuxt-link :to="{name:'index'}">Home</nuxt-link>
            <div class="menu__teams">
                <span class="menu__title">Teams</span>
                <nuxt-link v-for="(team, index) in teams" :key="index" :to="{name:'teams-slug', params: {slug: team.fields.slug}}">{{team.fields.title}}</nuxt-link>
            </div>
            <div class="menu__item" v-for="(item, index) in menuItems" :key="index">
                <span class="menu__title">{{item.fields.title}}</span>
                <nuxt-link v-for="(page, index) in getPages(item)" :key="index" :to="{name:'custom', params: {item: item.fields.slug, page: page.fields.slug}}">{{page.fields.title}}</nuxt-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
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
    },
    methods: {
        getPages(menuItem) {
            var pages = this.pages.filter(page => page.fields.parent.sys.id === menuItem.sys.id)
            pages.sort((a, b) => a.fields.order - b.fields.order)
            return pages;
        }
    },
    async created() {
        await this.$store.dispatch('teams/getTeams', {self:this});
        await this.$store.dispatch('pages/getPageHeaders', {self:this});
    }
}
</script>

<style scoped>
    .header {
        width: 100%;
    }
</style>