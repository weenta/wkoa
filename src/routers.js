module.exports = (app)=>{
    const clr = app.controller
    return {
        'get /': clr.foo.home,
        'get /user': clr.foo.user

    }
}