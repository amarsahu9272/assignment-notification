import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import Notification from "./component/notification/Notification";
import NoMatchRoute from "./NoMatchRoute";

function Router() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="Notification" element={<Notification />} />
          </Route>
          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default Router;
