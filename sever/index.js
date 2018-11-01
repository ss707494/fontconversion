const Koa = require('koa');
const app = new Koa();
const { getImg } = require('./drawImg')

// response
app.use(async ctx => {
  const res = await getImg()
  ctx.body = res || 'err';
});

app.listen(3000);