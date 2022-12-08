import { httpBatchLink, createTRPCProxyClient } from "@trpc/client";
import { AppRouter } from "../server/trpc/routers";
export default defineNuxtPlugin(() => {
  const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         **/
        url: "http://localhost:3000/api",
      }),
    ],
  });

  return {
    provide: {
      trpc,
    },
  };
});
