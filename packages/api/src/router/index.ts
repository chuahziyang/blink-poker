import { router } from "../trpc";
import { tripRouter } from "./trip";
import { authRouter } from "./auth";

export const appRouter = router({
  trip: tripRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
