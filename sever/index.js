const path = require('path');
const Koa = require('koa');
const Router = require('koa-router')
const static = require('koa-static')
const { getImg } = require('./drawImg')
const app = new Koa();
const router = new Router()


const get_Img = async (ctx, next) => {
  ctx.body = await getImg(ctx.params && ctx.params.text)
  await next()
}

const staticPath = '../build'
app.use(static(
    path.join( __dirname,  staticPath)
))

// response
app.use(router.get('/getImg/:text', get_Img).routes());

app.listen(4410);