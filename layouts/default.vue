<template>
  <div>
    <!-- <Header @menu-opened="menuOpened" /> -->
    <div class="container">
      <nuxt/>
    </div>
    <Footer>This is the footer</Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  components: { Footer },
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

