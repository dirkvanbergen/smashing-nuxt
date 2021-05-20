<template>
  <div class="mb-8 shadow bg-smashing w-screen z-10">
    <nav class="p-6">
      <div class="container mx-auto flex flex-wrap items-center justify-between flex-wrap relative">
        <nuxt-link
          :to="{name:'index'}"
          class="flex items-center flex-shrink-0 text-white mr-2 md:mr-6"
          @click.native="closeMenu"
        >
          <img
            src="@/static/images/LogSma.svg"
            alt="smashing logo"
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
          />
          <span class="font-bold text-3xl tracking-tight">Smashing'72</span>
        </nuxt-link>
        <div class="block lg:hidden">
          <a class="flex items-center px-3 py-2 rounded border-2 text-white border-white cursor-pointer" 
            @click.stop="openMenu">
            <svg class="fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
              :class="{'opacity-0 pointer-events-none h-0 w-0': menuOpened, ' h-4 w-4':!menuOpened}">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
              :class="{'opacity-100 pointer-events-auto h-4 w-4': menuOpened, ' h-0 w-0 opacity-0 pointer-events-none': !menuOpened}">
              <line x1="0" y1="0" x2="20" y2="20" stroke="white" stroke-width="3" stroke-line-cap="round" />
              <line x1="0" y1="20" x2="20" y2="0" stroke="white" stroke-width="3" stroke-line-cap="round"  />
            </svg>
          </a>
        </div>        
        <div class="nav-mobile px-6 lg:hidden fixed right-0 w-0 h-0 opacity-0 bg-smashing"
          :class="{'w-screen h-screen opacity-100': menuOpened}"
          ref="navMobile">
          <div class="container mx-auto pb-6">
            <MenuItems @menu-click="closeMenu" menu-type="mobile" />
            <!-- <HeaderButtons @menu-click="closeMenu" /> -->
          </div>
        </div>
        <div class="block flex-grow hidden lg:flex lg:items-stretch lg:w-full">
          <MenuItems />
          <!-- <HeaderButtons /> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MenuItems from "@/components/MenuItems";

export default {
  components: { MenuItems },
  data() {
    return {
      menuOpened: false
    };
  },
  methods: {
    openMenu() {
      this.menuOpened = !this.menuOpened;
      this.$emit('menu-opened', this.menuOpened);
    },
    closeMenu() {
      this.menuOpened = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-mobile {
  top: 93px;
  transition: all .2s ease;
}

svg {
  transition: all .2s ease;
}
</style>

