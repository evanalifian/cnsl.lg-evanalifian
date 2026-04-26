import React from "react";
import Navbar from "../3_organisms/Navbar";
import Footer from "../3_organisms/Footer";
import { Outlet } from "react-router";

export default function ContentLayout() {
  return (
    <>
      <Navbar />
      <main class="mx-auto mt-32 max-w-5xl space-y-24 pb-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
