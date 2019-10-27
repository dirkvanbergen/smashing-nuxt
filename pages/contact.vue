<template>
  <div class="lg:w-1/2  mx-6 lg:mx-auto">
    <h1 class="text-smashing text-2xl text-bold">Contact</h1>
    <p>Heb je een vraag, of een opmerking? Of wil je gewoon wat kwijt aan de vereniging? Laat het ons hier weten!</p>
    <form class="mt-4" name="contact" method="POST" action="/bedankt" netlify netlify-honeypot="bot-field" >
      <p class="py-1">
        <label class="flex flex-col md:flex md:flex-row justify-between md:items-center" for="naam">
          <span>Aan</span>
          <select v-model="$route.params.to"
            class="w-full md:w-3/4 border-gray-500 focus:shadow border p-1 rounded"
            name="recepient">
          <option value="algemeen" selected="selected">Algemeen</option>
          <option value="voorzitter">De voorzitter</option>
          <option value="penningmeester">De penningmeester</option>
          <option value="jeugd-tc">De jeugdcommissie</option>
          <option value="senioren-tc">De seniorencommissie</option>
          <option value="secretaris">Het wedstrijdsecretariaat</option>
          <option value="webeditors">De (web)redactie</option>
          <option value="bestuur">Het bestuur</option>
          </select>
        </label>
      </p>
      <p class="py-1">
        <label class="flex flex-col md:flex md:flex-row justify-between md:items-center" for="naam">
          <span>Naam</span>
          <input
            class="w-full md:w-3/4 border-gray-500 focus:shadow border p-1 rounded"
            name="naam"
            type="text"
          >
        </label>
      </p>
      <p class="py-1">
        <label class="flex flex-col md:flex md:flex-row justify-between md:items-center" for="email">
          <span>Email</span>
          <input
            class="w-full md:w-3/4 border-gray-500 focus:shadow border p-1 rounded"
            name="email"
            type="email"
          >
        </label>
      </p>
      <p class="hidden"><label>Dit veld niet invullen <input name="bot-field" /></label></p>
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
        <button type="submit" class="w-full md:w-1/2 lg:w-1/4 p-1 border-gray-500 border-2 border rounded">Verstuur</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    logRoute() {
      console.log(this.$route);
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>


<style scoped>
</style>

