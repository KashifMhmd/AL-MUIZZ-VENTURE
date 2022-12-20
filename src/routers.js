import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./constants";
import { ReactComponent as LoadingIcon } from "./assets/svg/loadingIcon.svg";
import LandingPage from "./pages/landingPage/landingPage";
import OurTeam from "./pages/ourTeam/ourTeam";
import AboutUs from "./pages/aboutUs/aboutUs";
import ContactUs from "./pages/contactUs/contactUs";

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="btn-loading" />
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />
          <Route path={NonAuthRoutes.ourTeam} element={<OurTeam />} />
          <Route path={NonAuthRoutes.aboutUs} element={<AboutUs />} />
          <Route path={NonAuthRoutes.contactUs} element={<ContactUs />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Routers;
