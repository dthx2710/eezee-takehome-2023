import React from "react";
import Header from "../header/header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>
        <div className="flex items-center justify-between pb-12">
          <div className="min-w-0 flex-1 py-2 px-8 flex max-w-screen-2xl mx-auto">
            <div className="flex-1 max-w-full">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
