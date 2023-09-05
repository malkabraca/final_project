import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ROUTES from "./ROUTES";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import EditCardPage from "../pages/EditCardPage";
import CreateCardPage from "../pages/CreateCardPage";
import CRMPage from "../pages/crmPage";
import AboutPage from "../pages/AbouPage";
import ProtectedRoute from "../components/ProtectedRoute";
import LogoutPage from "../pages/LogoutPage";
import MenuLogoutPage from "../pages/NoLoginMenuPage";
import PaymentForm from "../components/PaymentForm";
import MyOrder from "../pages/MyOrder";
import SuperProtectedRoute from "../components/SuperProtectedRoute";
import SuperProtectedRouteEdit from "../components/SuperProtectedRouteEdit";
import BookTable from "../components/BookTable";
import Contact from "../pages/Contact";
import Profail from "../pages/Profail";

// import RP1 from "../pages/RP1";
// import RP2 from "../pages/RP2";
// import ProfilePage from "../pages/ProfilePage";
// import LogoutPage from "../pages/LogoutPage";
// import NestedPage1 from "../pages/NestedRoutePage/NestedPage1";
// import NestedPage2 from "../pages/NestedRoutePage/NestedPage2";
// import About from "../pages/About";
// import MyCards from "../pages/MyCards";
// import CreateCardPage from "../pages/CreateCardPage";
// import FavCardsPage from "../pages/FavCards";
// import InformationCard from "../pages/InformationCard";
// import SandBox from "../pages/Sandbox";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MENULOGUT} element={<MenuLogoutPage />} />
      <Route path={ROUTES.LOGOUT} element={<ProtectedRoute />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
   
      <Route path={ROUTES.PROFAIL} element={<Profail />} />
      <Route
        path={ROUTES.MENU}
        element={<ProtectedRoute element={<MenuPage />} />}
      />
      <Route
        path="/edit/:id"
        element={
          <SuperProtectedRoute isAdmin={true} element={<EditCardPage />} />
        }
      />
      <Route
        path={ROUTES.CRM}
        element={<SuperProtectedRoute isAdmin={true} element={<CRMPage />} />}
      />
      <Route
        path={ROUTES.PAYMENT}
        element={<ProtectedRoute element={<PaymentForm />} />}
      />
      <Route
        path={ROUTES.MYORDER}
        element={<ProtectedRoute element={<MyOrder />} />}
      />
      <Route
        path={ROUTES.CREATE}
        element={
          <SuperProtectedRoute isAdmin={true} element={<CreateCardPage />} />
        }
      />
      <Route path={ROUTES.BOOKTABLE} element={<BookTable />} />
      <Route path="*" element={<h1>404</h1>} />
      {/* <Route path={ROUTES.PAYMENT} element={<PaymentForm />} /> */}
      {/* <Route path={ROUTES.CREATE} element={<CreateCardPage />} /> */}
      {/* <Route path="/edit/:id" element={<EditCardPage />} /> */}
      {/* <Route path={ROUTES.MYORDER} element={<MyOrder />} /> */}
      {/* <Route path={ROUTES.CRM} element={<CRMPage />} /> */}
    </Routes>

    //       <Route path={ROUTES.ABOUT} element={<About />} />
    //       <Route  path="infor/:id" element={<InformationCard />} />

    //       <Route
    //         path={ROUTES.FAVCARD}
    //         element={<ProtectedRoute element={<FavCardsPage />} />}
    //       />
    //       <Route
    //         path={ROUTES.PROFILE}
    //         element={<ProtectedRoute element={<ProfilePage />} />}
    //       />
    // <Route
    //   path="/myCards"
    //   element={
    //     <SuperProtectedRoute
    //       isAdmin={true}
    //       isBiz={true}
    //       element={<MyCards />}
    //     />
    //   }
    // />
    // <Route
    //   path="/edit/:id"
    //   element={
    //     <SuperProtectedRouteEdit
    //       isAdmin={true}
    //       isBiz={true}
    //       element={<EditCardPage />}
    //     />
    //   }
    // />
    //       <Route
    //         path={ROUTES.CREATE}
    //         element={
    //           <SuperProtectedRoute
    //             isAdmin={true}
    //             isBiz={true}
    //             element={<CreateCardPage />}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/sandBox"
    //         element={
    //           <SuperProtectedRoute
    //             isAdmin={true}
    //             isBiz={false}
    //             element={<SandBox />}
    //           />
    //         }
    //       >
    //         <Route path="nestedpage1" element={<NestedPage1 />} />
    //         <Route path="nestedpage2" element={<NestedPage2 />} />
    //         <Route path="RP1" element={<RP1 />} />
    //         <Route path="RP2" element={<RP2 />} />

    //       </Route>

    //       <Route path="*" element={<h1>404</h1>} />
    // </Routes>
  );
};

export default Router;
