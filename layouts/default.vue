<template>
  <div>
    <Header />
    <Navigation />
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
  components: { Footer, Header, Navigation }
};
</script>

