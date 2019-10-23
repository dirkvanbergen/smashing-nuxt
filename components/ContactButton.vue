<template>
      <nuxt-link class="contact-button" :to="{name: 'contact', params: {to: to}}">
        <font-awesome-icon icon="envelope" class="text-smashing"></font-awesome-icon>
      </nuxt-link>
</template>

<script>
export default {
  props: ['to']
};
</script>
<style scoped lang="scss">
  .contact-button {
    svg {
      fill: red;
    }
  }
</style>
