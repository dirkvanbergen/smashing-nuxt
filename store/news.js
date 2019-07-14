import client from "../plugins/contentful"

export const state = () => ({
  news: []
})

export const mutations = {
  setNews(state, payload) {
    state.news = payload
  }
}

export const actions = {
  async getNews({ commit }, {limit}) {
    const response = await client.getEntries({
      content_type: "news",
      order: "-sys.createdAt",
      limit: limit || 1000
    })
    if (response.items.length > 0) {
      commit("setNews", response.items)
    }
  }
}
