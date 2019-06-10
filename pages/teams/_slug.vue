<template>
    <div>
        <h1>{{currentTeam.fields.title}}</h1>
        <h3>{{currentTeam.fields.level}}</h3>
        <ul>
            <li v-for="(player, index) in currentTeam.fields.players" :key="index">{{player}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        currentTeam() {
            return this.$store.state.team.currentTeam
        },
        isLoading() {
            return this.$store.state.team.isLoading
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('team/getTeamBySlug', params.slug)
    }
}
</script>

<style scoped>

</style>

