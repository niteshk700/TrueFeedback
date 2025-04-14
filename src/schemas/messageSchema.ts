import { z } from "zod";

export const messageSchema = z.object({
  contecnt: z
    .string()
    .min(10, { message: "Content must be at least of 10 charaters" })
    .max(300, { message: "Content must not be longer then 300 charaters" }),
});
