import React, { useState } from "react";
import Login from "../components/Login/login";

import CookieChecker from "../auth/cookieChecker";

const PageLogin = () => {

  return (
    <>
      <CookieChecker />
      <div className="">

        <Login />

      </div>
    </>
  );
};

export default PageLogin;
