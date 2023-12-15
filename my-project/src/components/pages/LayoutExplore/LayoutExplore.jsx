import { Outlet } from "react-router";

import Sidebar from "./Sidebar.jsx";

function ExploreLayout() {
  return (
    <>
      <div className="layoutExplore  flex pb-10">
      <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default ExploreLayout;
