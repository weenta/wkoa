const Wkoa = require('./core')

const app = new Wkoa()

// use koa-router
app.setRouters()

// app.setService()

app.listen(3000,()=>{
    console.log('server running at localhost:3000')
})













