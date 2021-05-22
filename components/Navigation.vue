<template>
  <b-navbar toggleable="md" :sticky="true">
    <div class="container">
      <div class="row">
        <div class="col">
          <b-navbar-toggle
            target="nav-collapse"
            type="button"
            class="navbar-toggler border-0"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          ><font-awesome-icon icon="bars" class="text-white" />
          </b-navbar-toggle><span class="d-md-none text-white ml-2 h5">Smashing '72</span>
          <b-collapse is-nav id="nav-collapse">
            <b-navbar-nav>
              <b-nav-item :to="{ name: 'index' }">Home</b-nav-item>
              <b-nav-item-dropdown
                left
                v-for="(item, index) in items"
                :key="index"
                :text="item.fields.title"
              >
                <b-dropdown-item
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
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    getPages(menuItem) {
      var pages = this.pages.filter(
        (page) => page.fields.parent.sys.id === menuItem.sys.id
      );
      pages.sort((a, b) => a.fields.order - b.fields.order);
      return pages;
    },
  },
  computed: {
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
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #b00;
}
/deep/ .nav-link {
  color: white !important;
  font-weight: bold;
  position: relative;

  &:hover:before {
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0px;
    left: 0px;
    content: "";
    background-color: white;
  }
}
</style>