import client from "../plugins/contentful"

export const state = () => ({
  currentTeam: {},
  isLoading: true
})

export const mutations = {
  setCurrentTeam(state, payload) {
    state.currentTeam = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  },
  setRanking(state, payload) {
    state.ranking = payload
  },
  clearRanking(state) {
    state.ranking = null;
  }
}

export const actions = {
  async getTeamBySlug({ commit }, slug) {
    commit("setLoading", true)
    const response = await client.getEntries({
      content_type: "team",
      "fields.slug": slug
    })
    commit("setCurrentTeam", response.items[0])
    commit("setLoading", false)
  },
  async getRanking({commit}, pouleCode) {
    try {
      const ranking = await this.$axios.$get(`https://nevobostanden20200622101750.azurewebsites.net/api/GetRanking?code=s4UgnF03If4FA/9szhGxnLT4Xa/mcUrAXUP5FqVrgahJmcIevCa/nA==&poule=${pouleCode}`)
      commit("setRanking", ranking)
    } catch (error) {
      console.log(error);
    }
  },
  async clearRanking({commit}) {
    commit("clearRanking")
  },

}
