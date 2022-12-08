import { createNuxtApiHandler } from "trpc-nuxt";
import { appRouter, AppRouter } from "@/server/trpc/routers";

export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
