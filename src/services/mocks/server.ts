import { setupServer } from "msw/node";
import { handler } from "./handler";

const server = setupServer(...handler);

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

describe("My API tests", () => {
  it("should return a user object when hitting the /api/users endpoint", async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    expect(data.name).toBe("John Doe");
  });
});
