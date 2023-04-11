import { rest } from "msw";
import { mock_data } from "./mock_data";

const getHandler = rest.get("/carts", (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(500), ctx.json({ mock_data }));
});

const deleteHandler = rest.delete(`/carts/:id`, (req, res, ctx) => {
  const { id } = req.params;
  const next_mocks = mock_data.data.filter(
    (cart) => cart.LectureId !== Number(id)
  );
  return res(ctx.status(200), ctx.delay(500), ctx.json({ next_mocks }));
});

export const handlers = [getHandler, deleteHandler];
