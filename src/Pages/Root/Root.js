import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../../Navigation/MainNavigation";
import Footer from "../../Footer/Footer";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <header className="header-navigation">
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
