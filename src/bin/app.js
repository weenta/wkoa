const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/',ctx=>{
    ctx.type = 'html'
    ctx.body = '<h1>hello wkoa</h1>'
})
app.use(router.routes())
app.listen(3000,()=>{
    console.log('server runnint at localhost:3000')
})