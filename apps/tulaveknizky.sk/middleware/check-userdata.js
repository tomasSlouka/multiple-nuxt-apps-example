export default function(context) {
    console.log('[Middleware] The check-userdata Middleware is running')
    if(process.client) {
        context.store.dispatch('auth/setUser', {
            endpoint: '/user'
        })
    }
    context.store.dispatch("auth/initUserData", context.req)
}