<template>
  <div class="page min-h-screen w-screen flex flex-col text-gray-900">
    <Header/>
    <div class="container mx-auto flex-grow">
      <nuxt/>
    </div>
    <Footer class="footer w-full p-4 pin-b">This is the footer</Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: { Header, Footer }
};
</script>

<style>
</style>

