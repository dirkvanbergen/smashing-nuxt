<template>
  <div class="mb-8 shadow bg-smashing w-screen z-10">
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
          />
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
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow hidden lg:flex lg:items-center lg:w-auto">
          <MenuItems />
          <HeaderButtons />
        </div>
      </div>
      <div
        class="nav-mobile absolute bg-smashing left-0 right-0 px-6 h-0 overflow-hidden"
        ref="navMobile"
      >
        <div class="container mx-auto pb-6">
          <MenuItems @menu-click="openMenu" />
          <HeaderButtons @menu-click="openMenu" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MenuItems from "@/components/MenuItems";
import HeaderButtons from "@/components/HeaderButtons";

import {TweenLite, TimelineLite} from "gsap";

export default {
  components: { MenuItems, HeaderButtons },
  data() {
    return {
      menuOpened: false
    };
  },
  methods: {
    openMenu() {
      this.menuOpened = !this.menuOpened;
      var { navMobile } = this.$refs;
      if (this.menuOpened) {
        document.querySelector("body").classList = "modal-open";

        var tl = new TimelineLite();

        TweenLite.set(navMobile, { height: "auto" });
        TweenLite.from(navMobile, 0.2, { height: "0" }, Power3.EaseInOut);
      } else {
        document.querySelector("body").classList = "";

        TweenLite.to(navMobile, .2, { height: "0" }, Power3.EaseInOut);
      }
    }
  }
};
</script>