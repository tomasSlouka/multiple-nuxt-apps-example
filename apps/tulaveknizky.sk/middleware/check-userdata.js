import Cookie from "js-cookie";

export default function(context) {
    console.log('[Middleware] The check-userdata Middleware is running')
    // if (!req.headers.cookie) { return; }
    // auth_token = Cookie.get('app.auth_token')
    // console.log(Cookie.get('app.auth_token'))
    if(process.client && Cookie.get('app.auth_token')) {
        context.store.dispatch('auth/setUser', {
            endpoint: '/user'
        })
    }
    context.store.dispatch("auth/initUserData", context.req)
}