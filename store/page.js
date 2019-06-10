import client from '../plugins/contentful'

export const state = () => ({
    currentPage: {},
    isLoading: true,
    isNotFound: false
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
    }
}

export const actions = {
    async getPageBySlug({commit}, {item, slug}) {
        commit('setLoading', true);
        const response = await client.getEntries({
            content_type: 'page',
            'fields.slug': slug
        })
        let result = response.items.filter(page => page.fields.parent.fields.slug === item && page.fields.slug === slug)
        if (result.length == 0) {            
            commit('setCurrentPage', null)
            commit('setNotFound', true)
        } else {
            commit('setCurrentPage', result[0])
        }
        console.log("Loading -> false")
        commit('setLoading', false)
    }
}