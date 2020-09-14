export default function(context) {
    console.log('[Middleware] The check-auth Middleware is running')
    context.store.dispatch("auth/initAuth", context.req)
}