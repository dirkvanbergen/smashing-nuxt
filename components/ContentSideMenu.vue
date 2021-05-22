<template>
  <div class="d-none d-lg-block">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{ currentItem.fields.title }}</h4>
      </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"
          v-for="(link, index) in sideMenuItems"
          :key="index">
        <nuxt-link
          class="text-smashing"
          :to="{
            name: 'custom',
            params: { item: currentItem.fields.slug, page: link.fields.slug },
          }"
          >{{ link.fields.title }}</nuxt-link
        ></li>
        </ul>
    </div>
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
        (page) => page.fields.parent.sys.id === currentItemId
      );
      siblings.sort((a, b) => a.fields.order - b.fields.order);

      return siblings;
    },
    sideMenuItems() {
      if (!this.teams) { return this.siblings; }
      return this.teams

    }
  },
};
</script>

