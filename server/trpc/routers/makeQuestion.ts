import { z } from "zod";
import { router, procedure } from "../../utils/trpc";

export const questionRouter = router({
  question: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello`,
      };
    }),
});
