<template>
    <div>
      <nuxt-link
       :to="{name: 'custom', params: {page: 'ik-wil', item: 'over-smashing-72'}}"
       @click.native="menuClick"
       class="header-button inline-block text-lg px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-smashing hover:bg-white mt-4 lg:mt-0">Ik wil ...
      </nuxt-link>      
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
<style scoped lang="scss">

.header-button {
  transition: all 0.2s ease-in-out;
}
</style>
