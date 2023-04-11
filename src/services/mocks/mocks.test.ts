import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/lecture", (req, res, ctx) => {
    return res(
      ctx.json({
        LectureId: 27,
        lectureTitle:
          "A traveler's guide to the world of Zbrush (Zbrush)\nDashboard",
        lectureDifficulty: "Introductory",
        lectureDescription:
          "resolution or higher with 32-bit color.\nVideo card: Most manufactured cards 2008 or newer. Must support OpenGL 3.3 or higher.\nTablet: Pentablet or LCD tablet (Wacom, XP-interest",
        targetAudience: "Introductory audience",
        lectureFee: 66000,
        thumbnail:
          "https://cdn.inflearn.com/public/courses/326364/cover/99d3cdc2-e6fe-44f5-a235-0563c951bfde/326364-eng.jpg",
        isOpened: true,
        grade: null,
        instructor: {
          username: "admin",
          instructorField: null,
          instructorAbout: "",
          instructorCareer: "",
        },
        categories: {
          parent: {
            name: "basic coding",
            classification: "basic",
            parent: null,
          },
          name: "html",
          classification: "html",
        },
        reviews_num: 6,
        rating: 3.5,
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const axios = require("axios");

test("fetches lecture data from API", async () => {
  const response = await axios.get("/api/lecture");
  const data = await response.data;

  expect(data).toEqual({
    LectureId: 27,
    lectureTitle:
      "A traveler's guide to the world of Zbrush (Zbrush)\nDashboard",
    lectureDifficulty: "Introductory",
    lectureDescription:
      "resolution or higher with 32-bit color.\nVideo card: Most manufactured cards 2008 or newer. Must support OpenGL 3.3 or higher.\nTablet: Pentablet or LCD tablet (Wacom, XP-interest",
    targetAudience: "Introductory audience",
    lectureFee: 66000,
    thumbnail:
      "https://cdn.inflearn.com/public/courses/326364/cover/99d3cdc2-e6fe-44f5-a235-0563c951bfde/326364-eng.jpg",
    isOpened: true,
    grade: null,
    instructor: {
      username: "admin",
      instructorField: null,
      instructorAbout: "",
      instructorCareer: "",
    },
    categories: {
      parent: {
        name: "basic coding",
        classification: "basic",
        parent: null,
      },
      name: "html",
      classification: "html",
    },
    reviews_num: 6,
    rating: 3.5,
  });
});
