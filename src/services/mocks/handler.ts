import { rest } from "msw";

export const handler = [
  rest.get("/users/:userId", (req, res, ctx) => {
    const { userId } = req.params;

    return res(
      ctx.json({
        id: userId,
        name: "John Doe",
      })
    );
  }),
];
