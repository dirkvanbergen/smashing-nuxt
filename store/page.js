import client from "../plugins/contentful"

export const state = () => ({
  currentPage: {},
  isLoading: true,
  isNotFound: false,
  pageType: ''
})

export const mutations = {
  setCurrentPage(state, payload) {
    state.currentPage = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  },
  setNotFound(state, payload) {
    state.isNotFound = payload
  },
  setPageType(state, payload) {
    state.pageType = payload
  }
}

export const actions = {
  async getPageBySlug({ commit }, { item, slug }) {
    commit("setLoading", true)
    const response = await client.getEntries({
      content_type: "page",
      "fields.slug": slug
    })
    let result = response.items.filter(
      page =>
        page.fields.parent.fields.slug === item && page.fields.slug === slug
    )
    if (result.length == 0) {      
      const teamResponse = await client.getEntries({
        content_type: "team",
        "fields.slug": slug
      })
      let teams = teamResponse.items.filter(
        page =>
          page.fields.parent.fields.slug === item && page.fields.slug === slug
      )
      if (teams.length == 0) {
        commit("setPageType", "error")
        commit("setCurrentPage", null)
        commit("setNotFound", true)
      } else {        
        commit("setPageType", "team")
        commit("setCurrentPage", teams[0])
        commit("setNotFound", false)
      }
    } else {
      commit("setPageType", "content")
      commit("setCurrentPage", result[0])
      commit("setNotFound", false)
    }
    commit("setLoading", false)
  }
}
