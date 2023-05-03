import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
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
import PaymentsResultPage from "./pages/PaymentResultPage/PaymentsResultPage";
import InstructorPage from "./pages/InstructorPage/InstructorPage";
import LectureRegister from "./pages/InstructorPage/LectureRegister/LectureRegister";
import DashBoard from "./pages/InstructorPage/DashBoard/DashBoard";
import AdminPage from "./pages/AdminPage/AdminPage";
import FindId from "./components/Find/FindId";
import FindPassword from "./components/Find/FindPassword";
import InstructorLecture from "./pages/InstructorPage/MyLecture/MyLecture";
import Pay from "./pages/AdminPage/Components/Pay/Pay";
import User from "./pages/AdminPage/Components/User/User";
import User2 from "./pages/AdminPage/Components/User2/User2";
import Register from "./pages/AdminPage/Components/Instructor/Register/Register";
import InstructorChart from "./pages/AdminPage/Components/Instructor/InstrouctorChart/InstructorChart";
import KakaoConfirm from "./components/SocialLogin/KakaoConfirm";
import NaverConfirm from "./components/SocialLogin/NaverConfirm";
import Pay2 from "./../src/pages/AdminPage/Components/Pay/Pay2";
import NotFound from "./components/ErrorPage/NotFound/NotFound";
import NotLogin from "./components/ErrorPage/NotLogin/NotLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
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
        path: "find/id",
        element: <FindId />,
      },
      {
        path: "find/password",
        element: <FindPassword />,
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
            element: <InstructorLecture />,
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
      {
        path: "social",
        children: [
          {
            path: "kakao",
            element: <KakaoConfirm />,
          },
          {
            path: "naver",
            element: <NaverConfirm />,
          },
        ],
      },
    ],
  },
  {
    path: "admin",
    element: <AdminPage />,
    children: [
      { path: "user/1", element: <User /> },
      { path: "user/2", element: <User2 /> },
      { path: "instructor/1", element: <Register /> },
      { path: "instructor/2", element: <InstructorChart /> },
      { path: "lectures", element: <User /> },

      { path: "pay/1", element: <Pay /> },
      { path: "pay/2", element: <Pay2 /> },
    ],
  },

  {
    path: "/notlogin",
    element: <NotLogin />,
  },
]);

export default router;
