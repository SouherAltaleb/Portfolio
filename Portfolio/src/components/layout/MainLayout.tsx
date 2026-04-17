import { Outlet } from "react-router-dom";

import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

export default function MainLayout() {
  return (
    <div className=" min-h-screen  ">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
