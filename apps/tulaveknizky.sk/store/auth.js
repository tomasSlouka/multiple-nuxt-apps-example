import Cookie from "js-cookie";

export const state = () => ({
    token: null,
    userData: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setUserData(state, data) {
        state.userData = data;
    },
    clearToken(state) {
        state.token = null;
    },
    clearUserData(state) {
        state.userData = null;
    }
}

export const getters = {
    isUserLoggedIn(state) {
        return state.token != null;
    },
    getToken(state) {
        return state.token;
    },
    getUserData(state) {
        return state.userData;
    }
}

export const actions = {
    // DONE
    async loginUser(vuexContext, authData) {
        return await this.$axios.$post(authData.endpoint, {
            email: authData.email,
            password: authData.password,
        })
        .then((response) => {
            // console.log(response);
            vuexContext.commit('setToken', response.auth_token)
            localStorage.setItem("userData", JSON.stringify(response.data.data))
            localStorage.setItem("auth_token", JSON.stringify(response.auth_token))
            // console.log('JANO')
            // console.log(response.data)
            vuexContext.commit('setUserData', response.data)
            Cookie.set('app.auth_token', response.auth_token)
            this.$axios.setHeader('AUTHTOKEN', response.auth_token)
            // vuexContext.dispatch("updateUser");
        }, (error) => {
            console.log(error);
            //this.res = error.response.data.message
        });
    },

    setUser(vuexContext, authData) {
        // if(auth_token) {
        // 	this.$axios.setHeader('AUTHTOKEN', auth_token)
        // } else {
        // 	this.$axios.setHeader('AUTHTOKEN', vuexContext.state.token)
        // }
            // return Promise.resolve(this.$axios.$get(authData.endpoint))
            return this.$axios.$get(authData.endpoint)
            .then((response) => {
                // console.log(response.data);
                vuexContext.commit('setUserData', response.data)
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
    },
    // Inicializacia autentifikacie - pouziva sa v check-auth middleware
    // Spusta sa na servery - z hlavicky requestu (req) je mozne dostat cookies a tie by mali obsahovat app.auth_token
    initAuth(vuexContext, req) {
        let auth_token;

        if (req) {
            if (!req.headers.cookie) { return; }
            const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));
            if (!tokenFromCookie) { return; }
            auth_token = tokenFromCookie.split("=")[1];
            vuexContext.commit("setToken", auth_token);
            this.$axios.setHeader('AUTHTOKEN', auth_token)
            // return vuexContext.dispatch("setUser", {
            //     endpoint: '/user'
            // });

        } else if(process.client) {
            // auth_token = localStorage.getItem("auth_token");
            auth_token = Cookie.get('app.auth_token')
            if(vuexContext.state.userData === null) {
                const userDataFromStorage = JSON.parse(localStorage.getItem("userData"))
                console.log(JSON.parse(localStorage.getItem("userData")))
                vuexContext.commit("setUserData", userDataFromStorage);
            }
        }
        if (!auth_token) {
            console.log("No token");
            vuexContext.dispatch("logout");
            return;
        }
        vuexContext.commit("setToken", auth_token);
        this.$axios.setHeader('AUTHTOKEN', auth_token)			
        // Cookie.set('app.auth_token', auth_token)
        // vuexContext.dispatch("setUser", auth_token);
    },
    initUserData(vuexContext, req) {
        let auth_token;

        if (req) {
            if (!req.headers.cookie) { return; }
            const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));
            if (!tokenFromCookie) { return; }
            auth_token = tokenFromCookie.split("=")[1];
            vuexContext.commit("setToken", auth_token);
            this.$axios.setHeader('AUTHTOKEN', auth_token)
            // return vuexContext.dispatch("setUser", {
            //     endpoint: '/user'
            // });

        } else if(process.client) {
            // auth_token = localStorage.getItem("auth_token");
            auth_token = Cookie.get('app.auth_token')
            if(vuexContext.state.userData === null) {
                const userDataFromStorage = JSON.parse(localStorage.getItem("userData"))
                console.log(JSON.parse(localStorage.getItem("userData")))
                vuexContext.commit("setUserData", userDataFromStorage);
            }
        }
        vuexContext.commit("setToken", auth_token);
        this.$axios.setHeader('AUTHTOKEN', auth_token)			
        // Cookie.set('app.auth_token', auth_token)
        // vuexContext.dispatch("setUser", auth_token);
    },
    logout(vuexContext) {
        if (process.client) {
            this.$router.push('/log-out')
            localStorage.removeItem("userData");
            localStorage.removeItem("auth_token");
        }
        vuexContext.commit("clearToken");
        vuexContext.commit("clearUserData");
        Cookie.remove("app.auth_token");
        
    }
}
