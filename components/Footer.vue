<template>
  <footer class="container-fluid mt-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <a :href="sporthalDiemen" target="_blank">Sporthal Diemen</a>
        <span>-</span>
        <nuxt-link :to="{ name: 'contact' }">Neem contact op</nuxt-link>
        <span>-</span>
        <a href="http://oud.smashing72.nl/" target="_blank">Oude website</a>
        <span>-</span>
        <a
          href="https://www.sponsorkliks.com/winkels.php?club=11880"
          target="_blank"
          >Sponsorkliks</a
        >
        <span>-</span>
        <span class v-html="copyright"></span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    copyright() {
      return `&copy; ${new Date().getFullYear()} Smashing '72 `;
    },
    sporthalDiemen() {
      return "https://www.google.com/maps/place/Sporthal+Diemen/@52.338574,4.9686282,15z/data=!4m5!3m4!1s0x0:0x198f82e70f2637f8!8m2!3d52.338574!4d4.9686282";
    },
  },
};
</script>
<style lang="scss">
footer {
  background-color: #900;
  padding: 20px;
  color: white;

  a, a:hover, a:active {
    color: white;
  }
  span:not(:last-child) {
    margin: 0 10px;
  }
}
</style>