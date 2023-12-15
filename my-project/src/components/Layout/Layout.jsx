import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto pt-[50px] lg:px-5">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;