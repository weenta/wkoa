const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const Loader = require('./loader')

class Wkoa extends Koa {
    constructor(){
        super()

        this.router = new Router()
        this.loader = new Loader()
        this.controller = {}
        this.service = {}
        this.setController()
        this.setService()
    }

    // use koa-router and load service
    setRouters(){
        const _setRouters = (app)=>{
            const routers = require('../routers')(app)
            Object.keys(routers).forEach(key=>{
                const METHOD = key.split(' ')[0]
                const URL = key.split(' ')[1]
                const CB = routers[key]

                this.router[METHOD](URL,ctx=>{
                    CB(ctx,this.service)
                })
            })
            return app.router.routes()
        }
        this.use(_setRouters(this))
    }

    setService(){
        const services = this.loader.loadService()
        services.forEach(svc=>{
            this.service[svc.name] = svc.module
        })
    }

    setController(){
        const controllers = this.loader.loadController()
        controllers.forEach((clr) => {
            this.controller[clr.name] = clr.module
        })
    }
}
module.exports = Wkoa
