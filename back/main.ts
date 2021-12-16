import { Application, config, Router } from "./deps.ts";

try {
  const {MESSAGE, PORT} = config();
  const router = new Router();
  const port = +PORT || 8000

  router.get("/", (context) => {
    context.response.body = MESSAGE || "Hello World !";
  });
  router.get("/health/liveness", (context) => { context.response.body = "OK ❤️"});
  router.get("/health/readiness", (context) => { context.response.body = "Ready 🤓"});

  const app = new Application();
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.addEventListener('listen', () => {
    console.log(`Listening on port ${port}`);
  });

  await app.listen({port});
} catch (error) {
  console.error(error);
}
