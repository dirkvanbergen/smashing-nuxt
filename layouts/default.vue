<template>
  <div>
    <Header />
    <div class="container mt-4">
      <nuxt/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  components: { Footer, Header }
};
</script>

