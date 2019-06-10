import client from '../plugins/contentful'

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
    }
}

export const actions = {
    async getTeamBySlug({commit}, slug) {
        commit('setLoading', true);
        const response = await client.getEntries({
            content_type: 'team',
            'fields.slug': slug
        })
        commit('setCurrentTeam', response.items[0])
        commit('setLoading', false)
    }
}