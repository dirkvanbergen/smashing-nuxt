<template>
    <div>
        <h1>Alle teams van Smashing</h1>
        <div class="all-teams">
            <div class="team" v-for="(team, index) in teams" :key="index">
                {{team.fields.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        teams() {
            return this.$store.state.teams.teams;
        }
    },
    
    async fetch({store, params}) {
        await store.dispatch('teams/getTeams');
        await store.dispatch('pages/getPageHeaders');
    }
}
</script>


<style scoped>
div {
    color: red;
}
</style>

