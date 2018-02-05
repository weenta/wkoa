module.exports = {
    home(ctx,next,sev) {
        ctx.type = 'html'
        ctx.body = '<h1>hello wkoa1</h1>'
    },
    user(ctx,next,sev) {
        let date =   sev.util.formatDate()
        let name =   sev.foo.getName()
        let greet = 'greeting from user1 ' + date + ' ' + name
        console.log(greet)
        ctx.body = greet
    }
}