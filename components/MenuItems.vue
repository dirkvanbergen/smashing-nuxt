<template>
    <div class="text-sm lg:flex-grow">
      <nuxt-link
        :to="{name:'index'}"
        class="text-xl block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4"
        @click.native="menuClick"
      >Home</nuxt-link>
      <nuxt-link
        :key="index"
        v-for="(item, index) in items"
        :to="{name:'custom', params: {item: item.fields.slug}}"
        class="block mt-4 text-xl lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4"
        @click.native="menuClick"
      >{{item.fields.title}}</nuxt-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false
    };
  },
  methods: {
    getPages(menuItem) {
      var pages = this.pages.filter(
        page => page.fields.parent.sys.id === menuItem.sys.id
      );
      pages.sort((a, b) => a.fields.order - b.fields.order);
      return pages;
    },
    menuClick() {
      this.$emit("menu-click");
    }
  },
  computed: {
    teams() {
      return this.$store.state.teams.teams;
    },
    pages() {
      return this.$store.state.pages.headers;
    },
    items() {
      const reducer = (acc, val) => {
        if (
          acc.filter(item => item.sys.id === val.fields.parent.sys.id)
            .length === 0
        ) {
          acc.push(val.fields.parent);
        }
        return acc;
      };
      var items = this.pages.reduce(reducer, []);
      items.sort((a, b) => a.fields.order - b.fields.order);
      return items;
    }
  }
};
</script>