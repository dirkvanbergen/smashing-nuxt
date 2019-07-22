<template>
  <div class="mb-8 shadow bg-smashing w-screen" :class="{'fixed h-screen': menuOpened}">
    <nav class="p-6">
      <div class="container mx-auto flex items-center justify-between flex-wrap relative">
        <nuxt-link
          :to="{name:'index'}"
          class="flex items-center flex-shrink-0 text-white mr-2 md:mr-6"
        >
          <img
            src="@/static/images/LogSma.svg"
            alt="smashing logo"
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
          >
          <!-- <svg viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
          <span class="font-bold text-3xl tracking-tight">Smashing'72</span>
        </nuxt-link>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded border-2 text-white border-white"
            @click="openMenu"
          >
            <svg
              class="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div
          class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
          :class="{'hidden': !menuOpened}"
        >
          <div class="text-sm lg:flex-grow">
            <nuxt-link
              :to="{name:'index'}"
              class="text-xl block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4"
              @click.native="menuOpened=false"
            >Home</nuxt-link>
            <nuxt-link
              :to="{name:'teams'}"
              class="text-xl block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4"
              @click.native="menuOpened=false"
            >Teams</nuxt-link>
            <nuxt-link
              :key="index"
              v-for="(item, index) in items"
              :to="{name:'custom', params: {item: item.fields.slug, page: getPages(item)[0].fields.slug}}"
              class="block mt-4 text-xl lg:inline-block lg:mt-0 text-white font-semibold hover:underline mr-4"
              @click.native="menuOpened=false"
            >{{item.fields.title}}</nuxt-link>
          </div>
          <div>
            <nuxt-link
              :to="{name:'lid-worden'}"
              @click.native="menuOpened=false"
              class="inline-block text-lg px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-smashing hover:bg-white mt-4 lg:mt-0"
            >Lid worden</nuxt-link>
            <a href="https://smashingdiemen.teaco.nl/"
              @click.native="menuOpened=false" 
              target="_blank" 
              class="inline-block text-lg px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-smashing hover:bg-white mt-4 lg:mt-0">Kleding Webshop</a>
          </div>
        </div>
      </div>
    </nav>
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
    openMenu() {
      this.menuOpened = !this.menuOpened;
      if (this.menuOpened)
      {
        document.querySelector('body').classList = "modal-open";
      } else {
        document.querySelector('body').classList = "";  
      }
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