import client from '../plugins/contentful'

export const state = () => ({
    news: []
})

export const mutations = {
    setNews(state, payload) {
        state.news = payload
    }
}

export const actions = {
    async getNews({commit}) {
        const response = await client.getEntries({
            content_type: 'news'
        })
        if (response.items.length > 0) {
            commit('setNews', response.items)
        }
    }
}