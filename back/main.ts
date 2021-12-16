import { Application, config, Router } from "./deps.ts";

try {
  const conf = config();
  const router = new Router();
  router.get("/", (context) => {
    context.response.body = conf.MESSAGE || "Hello World !";
  });

  const app = new Application();
  app.use(router.routes());
  app.use(router.allowedMethods());

  await app.listen({ port: 8000 });
} catch (error) {
  console.error(error);
}
