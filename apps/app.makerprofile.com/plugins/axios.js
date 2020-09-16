export default function ({ $axios, store, redirect }) {
    
    // $axios.setToken(false)
    $axios.setBaseURL('https://secure.manyletter.com/api/maylday')
    // $axios.setHeader('APITOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJ3d3cudXBmb3J3ZWIuY29tIn0.mVeMpCA4zEsW6TjoOF_jb3C3vcGcTEkcFtZrIGuf4lk')
    // $axios.setHeader('APITOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAiLCJkb21haW4iOiJ3d3cubWF5bGRheS5jb20ifQ.Q60cVHr7wOWRDgWKe9MvdxFFPAMyvwtqByuOGJqRqzg')
    $axios.setHeader('APITOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAiLCJkb21haW4iOiJ3d3cubWF5bGRheS5jb20ifQ.Q60cVHr7wOWRDgWKe9MvdxFFPAMyvwtqByuOGJqRqzg')
    $axios.setHeader('AUTHTOKEN', store.state.token)
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