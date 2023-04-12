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
import MyCart from "./components/Mypage/MyCart/MyCart";
import MyEditMember from "./components/Mypage/MyEditMember/MyEditMember";
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
        path: "wholeLectures",
        element: <WholeLecturePage />,
      },
      {
        path: "lectures/:id",
        element: <DetailPage />,
      },
      {
        path: "lectureplay/:lectureId/:num",
        element: <LecturePlayerPage />,
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

      // {
      //   path: "social",
      //   children: [
      //     {
      //       path: "github",
      //       element: <GitgubConfirm />,
      //     },
      //     {
      //       path: "kakao",
      //       element: <KakaoConfirm />,
      //     },
      //   ],
      // },
    ],
  },
]);

export default router;
