export default function(context) {
    console.log('[Middleware] The auth Middleware is running')
    if(!context.store.getters['auth/isUserLoggedIn']) {
        context.redirect('/prihlasenie')
    }
}