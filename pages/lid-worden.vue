<template>
    <div>Lid worden!</div>
</template>

<script>
export default {
    
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

