<template>
  <div class="container-fluid header">
    <div class="container">
      <div class="row">
        <div class="col">
          <nuxt-link
            class="navbar-brand text-white"
            :to="{ name: 'index' }"
            ><h3>
              <img
                src="@/static/images/LogSma.svg"
                alt="smashing logo"
                width="75"
                height="75"
                style="float: left; margin-right: 20px"
              />
              Smashing'72
            </h3>
            <span class="small"
              >De leukste volleybalvereniging van Diemen!</span
            >
          </nuxt-link>
        </div>
      </div>
      <nav class="navbar navbar-expand-md">
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon">X</span>
        </button>
        <div
          class="navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div class="navbar-nav">
            <nuxt-link
              :to="{ name: 'index' }"
              class="nav-item nav-link text-white h4"
              >Home</nuxt-link
            >
            <div
              class="nav-item dropdown"
              v-for="(item, index) in items"
              :key="index"
                @mouseleave="showMenu = ''"
            >
              <a
                href="#"
                class="nav-link dropdown-toggle text-white h4"
                data-toggle="dropdown"
                style="margin-bottom: 0px;"
                @click="showMenu = showMenu == item.fields.slug ? '' :item.fields.slug"
                >{{ item.fields.title }}</a
              >
              <div class="dropdown-menu" :class="{'show': showMenu === item.fields.slug }" 
                style="margin-top: 0px;">
                <nuxt-link
                @mousedown="this.click()"
                class="dropdown-item"
                  v-for="(subItem, subIndex) in getPages(item)"
                  :key="subIndex"
                  :to="{
                    name: 'custom',
                    params: {
                      page: subItem.fields.slug,
                      item: item.fields.slug,
                    },
                  }"
                >
                  {{ subItem.fields.title }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showMenu: ''
    }
  },
  methods: {
    getPages(menuItem) {
      var pages = this.pages.filter(
        (page) => page.fields.parent.sys.id === menuItem.sys.id
      );
      pages.sort((a, b) => a.fields.order - b.fields.order);

      if (menuItem.fields.slug === "teams") {
        pages.splice(0, 0, this.seniorTeams);
      } else if (menuItem.fields.slug === "jeugd-teams") {
        pages.splice(0, 0, this.jeugdTeams);
      }
      return pages;
    },
  },
  computed: {
    teams() {
      return this.$store.state.teams.teams;
    },
    jeugdTeams() {
      return this.teams
        .filter((team) => team.fields.isJeugdTeam)
        .sort((a, b) => a.fields.order - b.fields.order);
    },
    seniorTeams() {
      return this.teams
        .filter((team) => !team.fields.isJeugdTeam)
        .sort((a, b) => a.fields.order - b.fields.order);
    },
    pages() {
      return this.$store.state.pages.headers;
    },
    items() {
      const reducer = (acc, val) => {
        if (
          acc.filter((item) => item.sys.id === val.fields.parent.sys.id)
            .length === 0
        ) {
          acc.push(val.fields.parent);
        }
        return acc;
      };
      var items = this.pages.reduce(reducer, []);
      items.sort((a, b) => a.fields.order - b.fields.order);
      return items;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #b00;
}
</style>

