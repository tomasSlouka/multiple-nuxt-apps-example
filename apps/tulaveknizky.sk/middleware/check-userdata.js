export default function(context) {
    console.log('[Middleware] The check-userdata Middleware is running')
    context.store.dispatch("auth/initUserData", context.req)
}