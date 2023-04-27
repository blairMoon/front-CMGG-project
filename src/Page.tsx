import { lazy } from "react";

export const DashBoard = lazy(
  () => import("./pages/InstructorPage/DashBoard/DashBoard")
);
export const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
export const WholeLecturePage = lazy(
  () => import("./pages/WholeLecuturePage/WholeLecturesPage")
);
export const DetailPage = lazy(() => import("./pages/DetailPage/DetailPage"));
export const MyDashBoard = lazy(
  () => import("./components/Mypage/MyDashBoard/MyDashBoard")
);
export const MyLecture = lazy(
  () => import("./components/Mypage/MyLecture/MyLecture")
);
export const MyPayment = lazy(
  () => import("./components/Mypage/MyPayment/MyPayment")
);
export const MyCart = lazy(() => import("./pages/MyInfoPage/MyCart/MyCart"));
export const MyEditMember = lazy(
  () => import("./components/Mypage/MyEditMember/MyEditMember")
);
export const InstructorLecture = lazy(
  () => import("./pages/InstructorPage/MyLecture/MyLecture")
);
export const LectureRegister = lazy(
  () => import("./pages/InstructorPage/LectureRegister/LectureRegister")
);
export const PaymentsResultPage = lazy(
  () => import("./pages/PaymentResultPage/PaymentsResultPage")
);
export const LecturePlayerPage = lazy(
  () => import("./pages/LecturePlayPage/LecturePlayerPage")
);
export const AdminPage = import("./pages/AdminPage/AdminPage");
export const User = lazy(
  () => import("./pages/AdminPage/Components/User/User")
);
