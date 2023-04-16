// import LectureRegister from "../../components/InstructorPage/LectureRegister/LectureRegister";

// import React from "react";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// interface WrapperProps {
//   children: React.ReactNode;
// }

// const Wrapper = ({ children }: WrapperProps): JSX.Element => {
//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// };

// describe("LectureRegister", () => {
//   beforeEach(() => {
//     render(<LectureRegister />, { wrapper: Wrapper });
//   });

//   it("renders form elements", () => {
//     expect(screen.getByLabelText(/강의명/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/가격/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/설명/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/목적/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/난이도/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/카테고리/i)).toBeInTheDocument();
//     expect(screen.getByText(/등록하기/i)).toBeInTheDocument();
//   });

//   it("submits the form successfully", async () => {
//     // Mock the API call
//     const mockedApiCall = jest.fn();
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve({ success: true }),
//       } as Response)
//     );

//     // Fill in the form
//     fireEvent.input(screen.getByLabelText(/강의명/i), {
//       target: { value: "테스트 강의" },
//     });
//     fireEvent.input(screen.getByLabelText(/가격/i), {
//       target: { value: "10000" },
//     });
//     fireEvent.input(screen.getByLabelText(/설명/i), {
//       target: { value: "테스트 강의 설명입니다." },
//     });

//     fireEvent.click(screen.getByLabelText(/이론/i));
//     fireEvent.click(screen.getByLabelText(/상/i));
//     fireEvent.click(screen.getByLabelText(/HTML/i));

//     // Submit the form
//     fireEvent.click(screen.getByText(/등록하기/i));

//     // Check if the API call was made with the correct data
//     await waitFor(() => {
//       expect(global.fetch).toHaveBeenCalledTimes(1);
//       expect(global.fetch).toHaveBeenCalledWith(
//         "/api/lectures", // Assuming the API endpoint
//         expect.objectContaining({
//           method: "POST",
//           body: JSON.stringify({
//             lectureTitle: "테스트 강의",
//             lectureFee: "10000",
//             lectureDescription: "테스트 강의 설명입니다.",
//             targetAudience: "theory",
//             lectureDifficulty: "upper",
//             categories: "html",
//             // Add other fields like images and videos
//           }),
//         })
//       );
//     });
//   });

//   it("shows validation errors when form fields are empty", async () => {
//     fireEvent.click(screen.getByText(/등록하기/i));

//     expect(
//       await screen.findByText(/강의명을 입력해주세요/i)
//     ).toBeInTheDocument();
//     expect(await screen.findByText(/가격을 입력해주세요/i)).toBeInTheDocument();
//     expect(await screen.findByText(/설명을 입력해주세요/i)).toBeInTheDocument();
//     expect(await screen.findByText(/목적을 입력해주세요/i)).toBeInTheDocument();
//     expect(
//       await screen.findByText(/난이도를 선택해주세요/i)
//     ).toBeInTheDocument();
//     expect(
//       await screen.findByText(/카테고리를 선택해주세요/i)
//     ).toBeInTheDocument();
//   });

//   it("handles API errors and displays a message", async () => {
//     // Mock the API call with an error
//     global.fetch = jest.fn(() => Promise.reject(new Error("Server Error")));

//     // Fill in the form
//     fireEvent.input(screen.getByLabelText(/강의명/i), {
//       target: { value: "테스트 강의" },
//     });
//     fireEvent.input(screen.getByLabelText(/가격/i), {
//       target: { value: "10000" },
//     });
//     fireEvent.input(screen.getByLabelText(/설명/i), {
//       target: { value: "테스트 강의 설명입니다." },
//     });

//     fireEvent.click(screen.getByLabelText(/이론/i));
//     fireEvent.click(screen.getByLabelText(/상/i));
//     fireEvent.click(screen.getByLabelText(/HTML/i));

//     // Submit the form
//     fireEvent.click(screen.getByText(/등록하기/i));

//     // Check if an error message is displayed
//     expect(
//       await screen.findByText(/서버 오류가 발생했습니다. 다시 시도해주세요./i)
//     ).toBeInTheDocument();
//   });
// });
export {};
