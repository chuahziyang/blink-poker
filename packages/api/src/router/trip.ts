import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const tripRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
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
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.post.findFirst({ where: { id: input } });
  }),
  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.create({ data: input });
    }),
});
