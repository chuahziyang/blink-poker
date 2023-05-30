import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const tripRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),

  data: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany();

    const user = users[0];

    return user;
  }),
  test: publicProcedure.query(({}) => {
    return 252;
  }),
  todayEarned: publicProcedure.query(async ({ ctx }) => {
    const transactions = await ctx.prisma.transaction.findMany({
      where: {
        endtime: {
          gte: new Date().toISOString(),
        },
      },
    });

    const total = transactions.reduce((acc, curr) => acc + curr.totalEarned, 0);

    console.log(total);
    console.log(transactions);

    return total;
  }),
});
