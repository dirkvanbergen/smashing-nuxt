<template>
  <div class="side-menu flex flex-col shadow px-4 pb-2">
    <h1 class="text-xl text-semibold py-4 mb-1 border-b">{{currentItem.fields.title}}</h1>
    <nuxt-link
      class="my-2 hover:underline"
      :to="{name: 'custom', params: {item: currentItem.fields.slug, page: link.fields.slug}}"
      v-for="(link, index) in siblings"
      :key="index"
    >{{link.fields.title}}</nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    currentItem() {
      return this.$store.state.page.currentPage.fields.parent;
    },
    siblings() {
      var currentItemId = this.currentItem.sys.id;
      var siblings = this.$store.state.pages.headers.filter(
        page => page.fields.parent.sys.id === currentItemId
      );
      siblings.sort((a,b) => a.fields.order - b.fields.order);
      
      return siblings;
    }
  }
};
</script>

