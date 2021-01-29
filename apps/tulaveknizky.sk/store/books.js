export const state = () => ({
    bookList: {},
    // tagList: {},
    bookListFiltered: {},
    filters: {
        search: "",
        name: "",
        sort: "id_asc",
    }
  })
  
export const getters = {
    getBookList(state) {
        return state.bookList;
    },
    // getTagList(state) {
    //     return state.tagList;
    // }
}
  
export const mutations = {
    setBookList (state, response) {
        state.bookList = response
    },
    // setTagList (state, response) {
    //     state.tagList = response
    // },
    setBookListFiltered (state, response) {
        state.bookListFiltered = (response === null) ? state.bookList : response;
    },
    setFilters (state, filters) {
        state.filters.search = filters.search,
        state.filters.name = filters.name,
        state.filters.author = filters.author,
        state.filters.price = filters.price,
        state.filters.sort = filters.sort
    },
    deleteBook (state, data) {
        // state.bookList.data.splice(data.index, 1)
        state.bookListFiltered.data.splice(data.index, 1)
    },
}

export const actions = {
    async getBookList({ commit, state, dispatch }) {
        const [bookList] = await Promise.all ([
            this.$axios.$get('/book/all'),
        ])
        if(Object.keys(state.bookListFiltered).length === 0) {
            commit('setBookList', bookList)
            commit('setBookListFiltered', null)
        } else {
            dispatch('getBookListFiltered')
            // commit('setFilteredDealsList', state.filteredList)
        }
    },

    // async getTagList({ commit }) {
    //     const [tagList] = await Promise.all ([
    //         this.$axios.$get('/tag/all'),
    //     ])
    //     commit('setTagList', tagList)
    // },

    async deleteBook( vuexContext, data) {
        return await this.$axios.$delete('/book/'+ data.id)
        .then((response) => {
            console.log(response);
            vuexContext.commit('deleteBook', data)
        }, (error) => {
            console.log(error);
            //this.res = error.response.data.message
        });
    },

    async getBookListFiltered(vuexContext, state) {
        return await this.$axios.$post('/book/all', {
            "filters": vuexContext.state.filters
        })
        .then((response) => {
            console.log(response);
            vuexContext.commit('setBookListFiltered', response)
        }, (error) => {
            console.log(error);
            //this.res = error.response.data.message
        });
    },
}
