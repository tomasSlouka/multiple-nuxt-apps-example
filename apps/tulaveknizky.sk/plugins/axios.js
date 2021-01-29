// import Cookie from "js-cookie";

export default function ({ $axios, store, req, redirect }) {
    
    // $axios.setToken(false)
    $axios.setBaseURL('https://secure.upfordomain.com/api/tulaveknizky')
    $axios.setHeader('APITOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAiLCJkb21haW4iOiJ3d3cubWF5bGRheS5jb20ifQ.Q60cVHr7wOWRDgWKe9MvdxFFPAMyvwtqByuOGJqRqzg')
    // $axios.setHeader('AUTHTOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAiLCJkb21haW4iOiJ3d3cubWF5bGRheS5jb20ifQ.Q60cVHr7wOWRDgWKe9MvdxFFPAMyvwtqByuOGJqRqzg')
    
    // if (!req.headers.cookie) { console.log("neni cookie"); return; }
    // const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));
    // if (!tokenFromCookie) { return; }
    // const auth_token = tokenFromCookie.split("=")[1];



    // let auth_token;

    // if (req) {
        // if (!req.headers.cookie) { return; }
        // const tokenFromCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("app.auth_token="));
        // if (!tokenFromCookie) { return; }
        // auth_token = tokenFromCookie.split("=")[1];
        // vuexContext.commit("setToken", auth_token);
        // $axios.setHeader('AUTHTOKEN', auth_token)
        // return vuexContext.dispatch("setUser", {
        //     endpoint: '/user'
        // });

      // } else if(process.client) {
        // auth_token = localStorage.getItem("auth_token");
        // auth_token = Cookie.get('app.auth_token')
        // if(vuexContext.state.userData === null) {
            // const userDataFromStorage = JSON.parse(localStorage.getItem("userData"))
            // console.log(JSON.parse(localStorage.getItem("userData")))
            // vuexContext.commit("setUserData", userDataFromStorage);
        // }
    // }

    // console.log(auth_token);
    // $axios.setHeader('AUTHTOKEN', auth_token)



    console.log(store.state)
    $axios.setHeader('AUTHTOKEN', store.state.auth.token)

    // $axios.setHeader('AUTHTOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJjcmVhdGVkX2F0IjoxNTkwNTAzNDkwLCJpcCI6IjE4OC4xNjcuMjMwLjIzMCIsImRvbWFpbiI6Ind3dy5tYW55bGV0dGVyLmNvbSJ9.ST5bErYNNDLHui6Nbn1O4DbhdTF0YhwjMMpqLYDx1GU')
    // $axios.setBaseURL('https://www.ymello.com/api/maylday')
    // $axios.setHeader('Referer', 'https://manyletter.com/')
    // $axios.setHeader('Accept', 'application/json')
    // $axios.setHeader('Access-Control-Allow-Origin', '*')
    // $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
    // $axios.setHeader('Content-Type', 'application/json')

    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
  

    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        // redirect('/400')
        console.log(error.response.data)
      }
    })
  }