<template>
    <article>
        <div v-if="!isLoading && !isNotFound">
            <h1>{{currentPage.fields.title}}</h1>
            <p>{{currentPage.fields.content}}</p>
        </div>
        <div v-else-if="isLoading">Loading</div>
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
            return this.$store.state.page.isLoading
        },
        isNotFound() {
            return this.$store.state.page.isNotFound
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('page/getPageBySlug', {item: params.item, slug: params.page})
    }
}
</script>

<style scoped>

</style>

