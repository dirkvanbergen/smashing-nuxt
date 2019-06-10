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
            <div class="menu__item" v-for="(item, index) in items" :key="index">
                <span class="menu__title">{{item.fields.title}}</span>
                <nuxt-link v-for="(page, index) in getPages(item)" :key="index" :to="{name:'custom', params: {item: item.fields.slug, page: page.fields.slug}}">{{page.fields.title}}</nuxt-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: ['teams', 'items', 'pages'],
    methods: {
        getPages(menuItem) {
            var pages = this.pages.filter(page => page.fields.parent.sys.id === menuItem.sys.id)
            pages.sort((a, b) => a.fields.order - b.fields.order)
            return pages;
        }
    }
}
</script>

<style scoped>
    .header {
        width: 100%;
    }
</style>