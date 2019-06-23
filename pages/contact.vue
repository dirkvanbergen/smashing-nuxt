<template>
    <div>
        <h1>Contact</h1>
        <form action=""></form>
    </div>
</template>

<script>
export default {
    
    async fetch({store, params}) {
        await store.dispatch('pages/getPageHeaders');
    }
}
</script>


<style scoped>
div {
    color: red;
}
</style>

