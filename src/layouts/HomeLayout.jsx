import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
const HomeLayout = () => {
  return (
    <div>
      <header className=" max-w-[1400px] mx-auto">
        <Header></Header>
      </header>
      <main className=" max-w-[1400px] mx-auto my-10">
        <Outlet></Outlet>
      </main>
      <footer className=" max-w-[1400px] mx-auto mt-10">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
