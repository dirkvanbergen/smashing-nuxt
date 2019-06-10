import client from '../plugins/contentful'

export const state = () => ({
    currentPage: {},
    isLoading: true
})

export const mutations = {
    setCurrentPage(state, payload) {
        state.currentPage = payload
    },
    setLoading(state, payload) {
        state.isLoading = payload
    }
}

export const actions = {
    async getPageBySlug({commit}, item, slug) {
        commit('setLoading', true);
        const response = await client.getEntries({
            content_type: 'page',
            'fields.slug': slug
        })
        commit('setCurrentPage', response.items.filter(page => page.fields.parent.fields.slug === item && page.fields.slug === slug)[0])
        commit('setLoading', false)
    }
}