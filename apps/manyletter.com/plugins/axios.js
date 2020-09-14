export default function ({ $axios, store, redirect }) {
    
    // $axios.setToken(false)
    $axios.setBaseURL('https://secure.upfordomain.com/api/upfordomain')
    $axios.setHeader('APITOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAiLCJkb21haW4iOiJ3d3cubWF5bGRheS5jb20ifQ.Q60cVHr7wOWRDgWKe9MvdxFFPAMyvwtqByuOGJqRqzg')
    $axios.setHeader('AUTHTOKEN', store.state.token)
    // console.log(store.state);
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