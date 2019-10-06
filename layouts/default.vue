<template>
  <div class="page w-screen flex flex-col text-gray-900" :class="{'h-screen overflow-y-hidden': menuOpen, 'min-h-screen': !menuOpen}">
    <Header @menu-opened="menuOpened" />
    <div class="container mx-auto flex-grow main-content">
      <nuxt/>
    </div>
    <Footer class="footer w-full p-4 pin-b">This is the footer</Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: { Header, Footer },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    menuOpened(isOpen) {
      this.menuOpen = isOpen;
    }
  }
};
</script>

<style>
</style>

