import client from "../plugins/contentful"

export const state = () => ({
  all: [],
  headers: []
})

export const mutations = {
  setPages(state, payload) {
    state.all = payload
  },
  setPageHeaders(state, payload) {
    state.headers = payload
  }
}

export const actions = {
  async getPages({ commit }) {
    const pages = await client.getEntries({
      content_type: "page",
      order: "fields.order"
    })
    const teams = await client.getEntries({
      content_type: "team",
      order: "fields.order"
    })
    var all = teams.items.concat(pages.items);
    if (all.length > 0) {
      commit("setPages", all)
    }
  },
  async getPageHeaders({ commit }) {
    const pageHeaders = await client.getEntries({
      content_type: "page",
      select: "fields.title,fields.slug,fields.order,fields.parent"
    })
    const teamHeaders = await client.getEntries({
      content_type: "team",
      select: "fields.title,fields.slug,fields.order,fields.parent"
    })

    var all = teamHeaders.items.concat(pageHeaders.items);

    if (all.length > 0) {
      commit("setPageHeaders", all)
    }
  }
}
