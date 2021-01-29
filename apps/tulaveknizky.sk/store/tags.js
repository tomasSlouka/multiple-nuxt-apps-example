export const state = () => ({
    tagList: {},
    tagListFiltered: {},
    filters: {
        search: "",
        name: "",
        sort: "id_asc",
    }
  })
  
export const getters = {
    getTagList(state) {
        return state.tagList;
    }
}
  
export const mutations = {
    setTagList (state, response) {
        state.tagList = response
    },
    setTagListFiltered (state, response) {
        state.tagListFiltered = (response === null) ? state.tagList : response;
    },
    setFilters (state, filters) {
        state.filters.search = filters.search,
        state.filters.name = filters.name,
        state.filters.author = filters.author,
        state.filters.price = filters.price,
        state.filters.sort = filters.sort
    },
    deleteTag (state, data) {
        state.tagListFiltered.data.splice(data.index, 1)
    },
}

export const actions = {
    async getTagList({ commit, state, dispatch }) {
        const [tagList] = await Promise.all ([
            this.$axios.$get('/tag/all'),
        ])
        if(Object.keys(state.tagListFiltered).length === 0) {
            commit('setTagList', tagList)
            commit('setTagListFiltered', null)
        } else {
            dispatch('getTagListFiltered')
        }
    },
    async deleteTag( vuexContext, data) {
        return await this.$axios.$delete('/tag/'+ data.id)
        .then((response) => {
            console.log(response);
            vuexContext.commit('deleteTag', data)
        }, (error) => {
            console.log(error);
        });
    },

    async getTagListFiltered(vuexContext, state) {
        return await this.$axios.$post('/tag/all', {
            "filters": vuexContext.state.filters
        })
        .then((response) => {
            console.log(response);
            vuexContext.commit('setTagListFiltered', response)
        }, (error) => {
            console.log(error);
        });
    },
}
