export const state = () => ({
    list: {},
    doctorList: {},
    filteredList: {},
    filters: {
        search: "",
        doctor: "",
        status: "",
        treatment: "",
        sort: "treatment_asc",
    }
  })
  
export const getters = {
    getDealsList(state) {
        return state.list;
    },
    getDoctorList(state) {
        return state.doctorList;
    }
}
  
export const mutations = {
    setDealsList (state, response) {
        state.list = response
    },
    setDoctorList (state, response) {
        state.doctorList = response
    },
    setFilteredDealsList (state, response) {
        state.filteredList = (response === null) ? state.list : response;
    },
    setFilters (state, filters) {
        state.filters.search = filters.search,
        state.filters.treatment = filters.treatment,
        state.filters.doctor = filters.doctor,
        state.filters.status = filters.status,
        state.filters.sort = filters.sort
    }
}

export const actions = {
    async getDealsList({ commit }) {
        const [dataList] = await Promise.all ([
            this.$axios.$get('/api/v1/freshsales'),
        ])
        commit('setDealsList', dataList)
        commit('setFilteredDealsList', null)
    },
    async getDoctorList({ commit }) {
        const [doctorList] = await Promise.all ([
            this.$axios.$get('/api/v1/freshsales/doctors'),
        ])
        commit('setDoctorList', doctorList)
    },
    async getFilteredDealsList(vuexContext, state) {
        return await this.$axios.$post('/api/v1/freshsales', {
            "filters": vuexContext.state.filters
        })
        .then((response) => {
            console.log(response);
            vuexContext.commit('setFilteredDealsList', response)
        }, (error) => {
            console.log(error);
            //this.res = error.response.data.message
        });
    },
}
