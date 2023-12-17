import { Outlet } from "react-router";

import Sidebar from "./Sidebar.jsx";

function ExploreLayout() {
  return (
    <>
      <div className="layoutExplore  flex ">
      <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default ExploreLayout;
