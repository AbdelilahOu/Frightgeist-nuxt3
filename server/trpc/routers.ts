import { router } from "./trpc";
import { questionRouter } from "./routers/makeQuestion";

export const appRouter = router({
  questionRouter,
});

export type AppRouter = typeof appRouter;
