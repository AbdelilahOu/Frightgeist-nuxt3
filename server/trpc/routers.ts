import { router } from "./trpc";
import { helloRouter } from "./routers/hello";
import { questionRouter } from "./routers/makeQuestion";

export const appRouter = router({
  hello: helloRouter,
  question: questionRouter,
});

export type AppRouter = typeof appRouter;
