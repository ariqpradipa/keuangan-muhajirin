import React, { useState, useEffect } from "react";

import Sidebar from "../components/Menus/sidebar";
import CookieChecker from "../auth/cookieChecker";

const PageLogin = () => {


  return (
    <>
      <CookieChecker />
      <div className="">

        <Sidebar />

      </div>
    </>
  );
};

export default PageLogin;
