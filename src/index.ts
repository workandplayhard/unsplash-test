import Koa from "koa";
import Router from "koa-router";
import BodyParser from "koa-bodyparser";
import Logger from "koa-logger";
import serve from "koa-static";
import ejs from "koa-ejs";
import * as path from "path";
import { fileURLToPath } from "url";

import { getRandomPhotos } from "./unsplash";

const app = new Koa();

const PORT = process.env.PORT || 8080;

app.on("error", (err, ctx) => {
  console.log(err);
});

app.use(BodyParser());
app.use(Logger());

ejs(app, {
  root: path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../template"
  ),
  layout: false,
  viewExt: "ejs",
  cache: false,
  debug: false,
});

app.use(serve("./public"));

const router = new Router();

router.get("/", async (ctx, next) => {
  let slides, products;
  try {
    slides = await getRandomPhotos({
      count: 3,
      query: "toys",
    });
  } catch (e) {
    ctx.app.emit("error", new Error(`Fetching slides failed: ${e}`), ctx);
  }

  try {
    const productImages = await getRandomPhotos({
      count: 8,
      query: "toys",
      orientation: "squarish",
      defaultDescription: "Product Name",
    });
    
    products = productImages.map((p) => ({
      name: p.description,
      price: Math.round((Math.random() * 89 + 10) * 100) / 100,
      url: p.url,
    }));
  } catch (e) {
    ctx.app.emit("error", new Error(`Fetching products failed: ${e}`), ctx);
  }

  await ctx.render("index", {
    slides,
    products,
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log("Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});
