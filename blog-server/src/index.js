const Koa = require("Koa");
const app = new Koa();
const http = require("http");
const server = http.createServer(app.callback());

const Router = require("@koa/router");
const router = new Router();
router.prefix("/upload");

router.get( '/',(ctx, next) => {
  ctx.body = 1;
});


app.use(router.routes());
app.use(router.allowedMethods());

module.exports = {
  server
}