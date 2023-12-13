import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
