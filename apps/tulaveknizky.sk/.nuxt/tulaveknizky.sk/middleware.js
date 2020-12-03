const middleware = {}

middleware['auth'] = require('..\\..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['check-auth'] = require('..\\..\\middleware\\check-auth.js')
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth']

middleware['check-userdata'] = require('..\\..\\middleware\\check-userdata.js')
middleware['check-userdata'] = middleware['check-userdata'].default || middleware['check-userdata']

middleware['log'] = require('..\\..\\middleware\\log.js')
middleware['log'] = middleware['log'].default || middleware['log']

export default middleware
