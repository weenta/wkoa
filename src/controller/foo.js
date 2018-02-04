module.exports = {
    home(ctx, svc) {
        ctx.type = 'html'
        ctx.body = '<h1>hello wkoa1</h1>'
    },
    user(ctx, svc) {
        let date = svc.util.formatDate()
        let name = svc.foo.getName()
        ctx.body = 'greeting from user1 ' + date + ' ' + name
    }
}