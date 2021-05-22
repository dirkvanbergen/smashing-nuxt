<template>
  <div>
    <Header />
    <Navigation :pages="pages" />
    <div class="container mt-4">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default {
  components: { Footer, Header, Navigation },
  computed: {
    pages() {
      return this.$store.state.pages.headers;
    },
  }
};
</script>

