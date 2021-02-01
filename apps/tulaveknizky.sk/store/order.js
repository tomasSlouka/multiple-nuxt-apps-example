export const state = () => ({
    dataList: {},
    dataListFiltered: {},
    filters: {
        search: "",
        name: "",
        sort: "id_asc",
    }
  })
  
export const getters = {
    getDataList(state) {
        return state.dataList;
    },
}
  
export const mutations = {
    setDataList (state, response) {
        state.dataList = response
    },
    setDataListFiltered (state, response) {
        state.dataListFiltered = (response === null) ? state.dataList : response;
    },
    setFilters (state, filters) {
        state.filters.search = filters.search,
        state.filters.name = filters.name,
        state.filters.author = filters.author,
        state.filters.price = filters.price,
        state.filters.sort = filters.sort
    },
    deleteItem (state, data) {
        // state.dataList.data.splice(data.index, 1)
        state.dataListFiltered.data.splice(data.index, 1)
    },
}

export const actions = {
    async getDataList({ commit, state, dispatch }) {
        
        if(Object.keys(state.dataListFiltered).length == 0) {
            const [dataList] = await Promise.all ([
                this.$axios.$get('/order/all'),
            ])
            commit('setDataList', dataList)
            commit('setDataListFiltered', null)
        } else {
            dispatch('getDataListFiltered')
        }
        // console.log("Su dataListFilterd?")
        // console.log(Object.keys(state.dataListFiltered).length)
        
        // if(Object.keys(state.dataListFiltered).length == 0) {
            // console.log("NIE dataListFilterd?")
            // commit('setDataList', dataList)
            // commit('setDataListFiltered', null)
        // } else {
            // console.log("ANO dataListFilterd?")
            // dispatch('getDataListFiltered')
            // commit('setFilteredDealsList', state.filteredList)
        // }
    },

    // async getTagList({ commit }) {
    //     const [tagList] = await Promise.all ([
    //         this.$axios.$get('/tag/all'),
    //     ])
    //     commit('setTagList', tagList)
    // },

    async deleteItem( vuexContext, data) {
        return await this.$axios.$delete('/order/'+ data.id)
        .then((response) => {
            console.log(response);
            vuexContext.commit('deleteItem', data)
        }, (error) => {
            console.log(error);
            //this.res = error.response.data.message
        });
    },

    async getDataListFiltered(vuexContext, state) {
        return await this.$axios.$post('/order/all', {
            "filters": vuexContext.state.filters
        })
        .then((response) => {
            console.log(response);
            vuexContext.commit('setDataListFiltered', response)
        }, (error) => {
            console.log(error);
            //this.res = error.response.data.message
        });
    },
}
