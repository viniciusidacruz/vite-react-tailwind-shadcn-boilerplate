import { Outlet } from "react-router-dom";

import { Navigation } from "@components/Navigation";

export const Layout = () => (
  <div className="wrapper">
    <Navigation />
    <Outlet />
  </div>
);
