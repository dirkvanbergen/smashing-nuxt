<template>
  <div class="bg-smashing-dark text-white flex flex-col md:flex-row md:justify-center">
    <a class="hover:underline" :href="sporthalDiemen" target="_blank">Sporthal Diemen</a><span class="sm:hidden md:inline px-2">-</span>
    <nuxt-link class="hover:underline" :to="{name: 'contact'}">Neem contact op</nuxt-link><span class="sm:hidden md:inline px-2">-</span>
    <a class="hover:underline" href="http://oud.smashing72.nl/" target="_blank">Oude website</a><span class="sm:hidden md:inline px-2">-</span>
    <span class="" v-html="copyright"></span>
  </div>
</template>

<script>
export default {
  computed: {
    copyright() {
      return `&copy; ${new Date().getFullYear()} Smashing '72 `
    },
    sporthalDiemen() {
      return "https://www.google.com/maps/place/Sporthal+Diemen/@52.338574,4.9686282,15z/data=!4m5!3m4!1s0x0:0x198f82e70f2637f8!8m2!3d52.338574!4d4.9686282"
    }
  }
}
</script>