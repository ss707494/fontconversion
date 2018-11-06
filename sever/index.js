const Koa = require('koa');
const router = require('koa-route')
const app = new Koa();
const { getImg } = require('./drawImg')

const get_Img = async ctx => {
  const res = await getImg(ctx.params && ctx.params.text)
  ctx.body = res || 'err';
}

// response
app.use(router.get('/', get_Img));

app.listen(4410);