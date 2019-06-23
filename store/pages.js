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
    const response = await client.getEntries({
      content_type: "page"
    })
    if (response.items.length > 0) {
      commit("setPages", response.items)
    }
  },
  async getPageHeaders({ commit }) {
    const response = await client.getEntries({
      content_type: "page",
      select: "fields.title,fields.slug,fields.parent"
    })
    if (response.items.length > 0) {
      commit("setPageHeaders", response.items)
    }
  }
}
