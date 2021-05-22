<template>
    <div class="text-sm lg:flex-grow lg:flex">
      <nuxt-link
        :to="{name:'index'}"
        class="text-xl block mt-4 lg:flex lg:items-center lg:mt-0 text-white font-semibold hover:underline mr-4"
        @click.native="menuClick"
      >Home</nuxt-link>
      <div class="menu-item-container relative mt-4 lg:mt-0 mr-4 lg:flex lg:items-center border-l border-white pl-4"
        :key="index"
        v-for="(item, index) in items">
      <div
        class="block text-xl text-white font-semibold cursor-default"
        @click="expand(item)"
      >{{item.fields.title}}</div>
      <ul class="bg-smashing px-4 py-2 -mr-4 lg:shadow lg:absolute hidden lg:block">
        <li v-for="(subItem, subIndex) in getPages(item)" :key="subIndex">
          <nuxt-link :to="{name:'custom', params: {page: subItem.fields.slug, item: item.fields.slug}}" @click.native="menuClick"
        class="block py-2 text-xl text-white font-semibold hover:underline whitespace-no-wrap">{{subItem.fields.title}}</nuxt-link></li>
      </ul>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false,
      expanded: ''
    };
  },
  methods: {
    getPages(menuItem) {
      var pages = this.pages.filter(
        page => page.fields.parent.sys.id === menuItem.sys.id
      );
      pages.sort((a, b) => a.fields.order - b.fields.order);

      if (menuItem.fields.slug === 'teams') {
        pages.splice(0, 0, this.seniorTeams);
      } else if (menuItem.fields.slug === 'jeugd-teams') {
        pages.splice(0, 0, this.jeugdTeams);
      }
      return pages;
    },
    expand(menuItem) {
      this.expanded = menuItem.fields.slug;
    },
    menuClick() {
      this.$emit("menu-click");
    }
  },
  computed: {
    teams() {
      return this.$store.state.teams.teams;
    },
    jeugdTeams() {
      return this.teams.filter(team => team.fields.isJeugdTeam).sort((a, b) => a.fields.order - b.fields.order);
    },
    seniorTeams() {
      return this.teams.filter(team => !team.fields.isJeugdTeam).sort((a, b) => a.fields.order - b.fields.order);
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
<style lang="scss" scoped>
ul {
  visibility: hidden; /* hides sub-menu */
  opacity: 0;
  top: 100%;
  left:0;
  transform: translateY(-2em);
  z-index: -1;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
}

.menu-item-container:focus,
.menu-item-container:focus-within,
.menu-item-container:hover {
  ul {  
    display: block;
    visibility: visible; /* shows sub-menu */
    opacity: 1;
    z-index: 1;
    transform: translateY(0%);
    transition-delay: 0s, 0s, 0.3s;
  }
}
</style>