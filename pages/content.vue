<template>
    <article>
        <div v-if="currentPage">
            <h1>{{currentPage.fields.title}}</h1>
            <p>{{currentPage.fields.content}}</p>
        </div>
        <div v-else>Not Found</div>
    </article>
</template>

<script>
export default {
    computed: {
        currentPage() {
            return this.$store.state.page.currentPage
        },
        isLoading() {
            return this.$store.state.team.isLoading
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('page/getPageBySlug', params.item, params.slug)
    }
}
</script>

<style scoped>

</style>

