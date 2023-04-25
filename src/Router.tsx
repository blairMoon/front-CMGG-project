import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import NotFound from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import WholeLecturePage from "./pages/WholeLecuturePage/WholeLecturesPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import LecturePlayerPage from "./pages/LecturePlayPage/LecturePlayerPage";
import MyInfoPage from "./pages/MyInfoPage/MyInfoPage";
import MyDashBoard from "./components/Mypage/MyDashBoard/MyDashBoard";
import MyLecture from "./components/Mypage/MyLecture/MyLecture";
import MyPayment from "./components/Mypage/MyPayment/MyPayment";
import MyCart from "./pages/MyInfoPage/MyCart/MyCart";
import MyEditMember from "./components/Mypage/MyEditMember/MyEditMember";
import { PaymentsResultPage } from "./pages/PaymentResultPage/PaymentsResultPage";
import InstructorPage from "./pages/InstructorPage/InstructorPage";
import LectureRegister from "./pages/InstructorPage/LectureRegister/LectureRegister";
import DashBoard from "./pages/InstructorPage/DashBoard/DashBoard";
import AdminPage from "./pages/AdminPage/AdminPage";

import User from "./pages/AdminPage/Components/User/User";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "lectures/:bigCategory/:smallCategory",
        element: <WholeLecturePage />,
      },
      {
        path: "lectures/:id",
        element: <DetailPage />,
      },

      {
        path: "mypage",
        element: <MyInfoPage />,
        children: [
          {
            path: "",
            element: <MyDashBoard />,
          },
          {
            path: "lecture",
            element: <MyLecture />,
          },
          {
            path: "payment",
            element: <MyPayment />,
          },
          {
            path: "cart",
            element: <MyCart />,
          },
          {
            path: "editMember",
            element: <MyEditMember />,
          },
        ],
      },
      {
        path: "instructor",
        element: <InstructorPage />,
        children: [
          {
            path: "",
            element: <DashBoard />,
          },
          {
            path: "lecture",
            element: <MyLecture />,
          },
          {
            path: "lecture/register",
            element: <LectureRegister />,
          },
          {
            path: "editMember",
            element: <MyEditMember />,
          },
        ],
      },
      {
        path: "wasBuyed",
        element: <PaymentsResultPage />,
      },
      {
        path: "lectureplay/:lectureId/:num",
        element: <LecturePlayerPage />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminPage />,
    children: [
      { path: "user", element: <User /> },
      { path: "lectures", element: <User /> },
      { path: "instrctor", element: <User /> },
      { path: "pay", element: <User /> },
    ],
  },
]);

export default router;
