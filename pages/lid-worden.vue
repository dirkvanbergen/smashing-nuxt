<template>
  <div class="lg:w-1/2 mx-6 lg:mx-auto">
    <h1 class="text-smashing text-2xl text-bold">Lid worden</h1>
    <p>
      Bij Smashing '72 kun je 3 keer gratis op proef komen meetrainen voordat je
      gevraagd wordt te kiezen voor wel of niet lid worden.
      <br />We trainen op maandagavond en woensdagavond in de Sporthal aan de
      Bernardlaan in Diemen.
    </p>
    <form
      class="mt-4"
      name="lid-worden"
      method="POST"
      action="/bedankt"
      netlify
      netlify-honeypot="bot-field"
    >
      <p>Vul dit formulier in om in contact te komen met de juiste persoon</p>
      <p class="py-1">
        <label
          class="flex flex-col md:flex md:flex-row justify-between md:items-center"
        >
          <span>Naam</span>
          <input
            class="w-full md:w-3/4 border-gray-500 focus:shadow border p-1 rounded"
            name="name"
            type="text"
          />
        </label>
      </p>
      <p class="py-1">
        <label
          class="flex flex-col md:flex md:flex-row justify-between md:items-center"
        >
          <span>Email</span>
          <input
            class="w-full md:w-3/4 border-gray-500 focus:shadow border p-1 rounded"
            name="email"
            type="email"
            inputmode="email"
          />
        </label>
      </p>
      <p class="hidden">
        <label>Dit veld niet invullen <input name="bot-field" /></label>
      </p>
      <p class="py-1">
        <label
          class="flex flex-col md:flex md:flex-row justify-between md:items-center"
        >
          <span>Telefoonnummer</span>
          <input
            class="w-full md:w-3/5 border-gray-500 focus:shadow border p-1 rounded"
            name="telefoon"
            type="tel"
            inputmode="tel"
          />
        </label>
      </p>
      <p class="py-1">
        <label
          class="flex flex-col md:flex md:flex-row justify-between md:items-center"
        >
          <span>Interesse in team</span>
          <select
            class="w-full md:w-3/5 border-gray-500 focus:shadow border p-1 rounded"
            name="team"
          >
            <option
              v-for="team in teams"
              :key="team.fields.slug"
              :value="team.fields.title"
            >
              {{ team.fields.title }} - {{ team.fields.level }}
            </option>
          </select>
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
        <button
          type="submit"
          class="w-1/4 p-1 border-gray-500 border-2 border rounded"
        >
          Verstuur
        </button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    teams() {
      return this.$store.state.teams.teams;
    },
  },
  async fetch({ store }) {
    await store.dispatch("teams/getTeams");
    await store.dispatch("pages/getPageHeaders");
  },
};
</script>
