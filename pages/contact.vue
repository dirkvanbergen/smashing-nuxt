<template>
  <div class="w-1/2 mx-auto">
    <h1 class="text-smashing text-2xl text-bold">Contact</h1>
    <form name="contact" method="POST" action="/bedankt" netlify>
      <p class="py-1">
        <label class="flex justify-between items-center" for="naam">
          <span>Naam</span>
          <input
            class="w-2/4 border-gray-500 border p-1 rounded focus:shadow"
            name="naam"
            type="text"
          >
        </label>
      </p>
      <p class="py-1">
        <label class="flex justify-between items-center" for="email">
          <span>Email</span>
          <input
            class="w-2/4 border-gray-500 focus:shadow border p-1 rounded"
            name="email"
            type="email"
          >
        </label>
      </p>
      <p class="py-1">
        <label class="flex-col" for="bericht">
          <span>Bericht</span>
          <textarea
            class="w-full border border-gray-500 focus:shadow p-1 rounded mt-1"
            name="bericht"
            id
            cols="30"
            rows="10"
          ></textarea>
        </label>
      </p>
      <p class="py-1 flex flex-row-reverse">
        <button type="submit" class="w-1/4 p-1 border-gray-500 border-2 border rounded">Verstuur</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>


<style scoped>
</style>

