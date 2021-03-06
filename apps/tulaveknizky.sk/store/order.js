export const state = () => ({
    dataList: {},
    dataBasket: {},
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
    getDataBasket(state) {
        return state.dataBasket;
    },
}
  
export const mutations = {
    setDataList (state, response) {
        state.dataList = response
    },
    setDataBasket (state, response) {
        state.dataBasket = response
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
    deleteItemBasket (state, data_items) {
        // state.dataList.data.splice(data.index, 1)
        state.dataBasket.data_items.splice(data_items.index, 1)
        state.dataBasket.count_items--
        state.dataBasket.sum_price = state.dataBasket.sum_price - data_items.price + ".00"
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

    async getDataBasket({ commit, state, dispatch }) {
        const [dataBasket] = await Promise.all ([
            this.$axios.$get('/order/basket'),
        ])
        commit('setDataBasket', dataBasket)
    },

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

    async deleteItemBasket( vuexContext, data) {
        return await this.$axios.$delete('/order/removeitem/'+ data.id)
        .then((response) => {
            console.log(response);
            vuexContext.commit('deleteItemBasket', data)
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
