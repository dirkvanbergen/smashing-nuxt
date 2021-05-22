<template>
  <div class="">
    <h1 class="">Contact</h1>
    <p>
      Heb je een vraag, of een opmerking? Of wil je gewoon wat kwijt aan de
      vereniging? Laat het ons hier weten!
    </p>
    <form
      class="mt-4"
      name="contact"
      method="POST"
      action="/bedankt"
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="form-group row">
        <label class="col-md-2 col-form-label" for="recepient-field">Aan</label>
        <div class="col-md-4">
          <select
            v-model="$route.params.to"
            class="form-control"
            name="recepient"
            id="recepient-field"
          >
            <option value="algemeen" selected="selected">Algemeen</option>
            <option value="voorzitter">De voorzitter</option>
            <option value="penningmeester">De penningmeester</option>
            <option value="jeugd-tc">De jeugdcommissie</option>
            <option value="senioren-tc">De seniorencommissie</option>
            <option value="secretaris">Het wedstrijdsecretariaat</option>
            <option value="webeditors">De (web)redactie</option>
            <option value="bestuur">Het bestuur</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-md-2 col-form-label" for="naam-field">Naam</label>
        <div class="col-md-4">
          <input class="form-control" name="naam" id="naam-field" type="text" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-md-2 col-form-label" for="email-field">Email</label>
        <div class="col-md-4">
          <input class="form-control" name="email" id="email-field" type="email" />
        </div>
      </div>
      <div class="d-none">
        <label>Dit veld niet invullen <input name="bot-field" /></label>
      </div>
      <div class="form-group row">
        <label class="col-md-2 col-form-label" for="bericht-field">Bericht</label>
        <div class="col-md-4">
          <textarea class="form-control" name="bericht" id="bericht-field" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="col-md-6">
        <button type="submit" class="btn btn-primary btn-block btn-smashing">Verstuur</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    logRoute() {
      console.log(this.$route);
    },
  },
};
</script>


<style scoped>
</style>

