const Koa = require('koa')
const app = new Koa()
const { getContent } = require('./sub/liba/test')

app.use( async (ctx) => {
    ctx.body = `sub test project + ${getContent()}`
})

app.listen(3200)

console.log('[sub] start-quick is starting at port 3200')