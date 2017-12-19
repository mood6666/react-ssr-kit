// import fs from 'fs'
// import path from 'path'
// import Router from 'koa-router'
//
// const router = new Router({prefix: '/api'})
// let subRouter
//
// fs.readdirSync(__dirname)
//     .filter(filename =>
//         filename !== path.basename(__filename)
//     )
//     .forEach(filename => {
//         console.log('filename', filename)
//         console.log('11111111111')
//         subRouter = require(`./${filename}`)
//         router.use(subRouter.routes(), subRouter.allowedMethods())
//     })
//
// export default router

export default async(ctx, next) => {
    // others react-router to render
    await require('./render')(ctx, next)
}
