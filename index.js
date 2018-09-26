const Koa = require('koa')
const app = new Koa()

app.use( async (ctx) => {
    ctx.body = 'sub test project'
})

app.listen(3200)

console.log('[sub] start-quick is starting at port 3000')