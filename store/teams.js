import client from "../plugins/contentful"

export const state = () => ({
  teams: []
})

export const mutations = {
  setTeams(state, payload) {
    state.teams = payload
  }
}

export const actions = {
  async getTeams({ commit }) {
    const response = await client.getEntries({
      content_type: "team"
    })
    if (response.items.length > 0) {
      commit("setTeams", response.items)
    }
  }
}
