// import Vuex from "vuex";
// import Cookie from "js-cookie";

// const createStore = () => {
//   	return new Vuex.Store({
    
    
    
// 	state: {
// 		token: null,
// 		userData: null
// 	},




//     mutations: {
// 		setToken(state, token) {
// 			state.token = token;
// 		},
// 		setUserData(state, data) {
// 			state.userData = data;
// 		},
// 		clearToken(state) {
// 			state.token = null;
// 		},
// 		clearUserData(state) {
// 			state.userData = null;
// 		}
//     },


//     getters: {
// 		isUserLoggedIn(state) {
// 			return state.token != null;
// 		},
// 		getToken(state) {
// 			return state.token;
// 		},
// 		getUserData(state) {
// 			return state.userData;
// 		}
// 	},

//     actions: {
// 		async nuxtServerInit({ dispatch }, {context, req}) {
// 			// context.app.$axios.setHeader('AUTHTOKEN', auth_token)
// 			let auth_token

// 			if (!req) { return; }
// 			if (!req.headers.cookie) { return; }
// 			const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("manyletter.auth_token="))
// 			if (!tokenFromCookie) {
// 				return;
// 			  }
// 			  auth_token = tokenFromCookie.split("=")[1];
// 			// console.log(tokenFromCookie);
// 			this.$axios.setHeader('AUTHTOKEN', auth_token)
// 			await dispatch("setUser")
// 		},

// 		// DONE
// 		async loginUser(vuexContext, authData) {
// 			return await this.$axios.$post('/api/maylday/auth/login', {
// 				email: authData.email,
// 				password: authData.password,
// 			})
// 			.then((response) => {
// 				// console.log(response);
// 				vuexContext.commit('setToken', response.auth_token)
// 				vuexContext.commit('setUserData', response.data)
// 				// localStorage.setItem('auth_token', response.auth_token)
// 				Cookie.set('manyletter.auth_token', response.auth_token)
// 				// vuexContext.dispatch("updateUser");
// 			}, (error) => {
// 				console.log(error);
// 				//this.res = error.response.data.message
// 			});
// 		},

// 		async setUser(vuexContext) {
// 			// if(auth_token) {
// 			// 	this.$axios.setHeader('AUTHTOKEN', auth_token)
// 			// } else {
// 			// 	this.$axios.setHeader('AUTHTOKEN', vuexContext.state.token)
// 			// }
// 			return await this.$axios.$get('/api/maylday/user')
// 			.then((response) => {
// 				// console.log(response.data);
// 				vuexContext.commit('setUserData', response.data)
// 			}, (error) => {
// 				console.log(error);
// 				//this.res = error.response.data.message
// 			});
// 		},
// 		// DONE
// 		initAuth(vuexContext, req) {
// 			let auth_token;

// 			if (req) {
// 				if (!req.headers.cookie) { return; }
// 				const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("manyletter.auth_token="));
// 				if (!tokenFromCookie) { return; }
// 					auth_token = tokenFromCookie.split("=")[1];
// 			} else if(process.client) {
// 				// auth_token = localStorage.getItem("auth_token");
// 				auth_token = Cookie.get('manyletter.auth_token')
// 			}
// 			if (!auth_token) {
// 				console.log("No token");
// 				vuexContext.dispatch("logout");
// 				return;
// 			}
// 			vuexContext.commit("setToken", auth_token);
// 			this.$axios.setHeader('AUTHTOKEN', auth_token)
// 			// Cookie.set('manyletter.auth_token', auth_token)
// 			// vuexContext.dispatch("setUser", auth_token);
// 		},
// 		logout(vuexContext) {
// 			vuexContext.commit("clearToken");
// 			vuexContext.commit("clearUserData");
// 			Cookie.remove("manyletter.auth_token");
// 			if (process.client) {
// 				// localStorage.removeItem("auth_token");
// 				// this.$router.push('/log-out')
// 			}
			
// 		}
//     },
//   });
// };

// export default createStore;
