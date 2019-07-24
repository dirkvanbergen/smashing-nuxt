<template>
    <div>
      <nuxt-link
        :to="{name:'lid-worden'}"
        class="inline-block text-lg px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-smashing hover:bg-white mt-4 lg:mt-0"
        @click.native="menuClick"
      >Lid worden</nuxt-link>
      <a
        href="https://smashingdiemen.teaco.nl/"
        target="_blank"
        class="inline-block text-lg px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-smashing hover:bg-white mt-4 lg:mt-0"
        @click.native="menuClick"
      >Kleding Webshop</a>
    </div>
</template>

<script>
export default {
  methods: {
    menuClick() {
      this.$emit("menu-click");
    }
  }
};
</script>