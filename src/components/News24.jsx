import React from "react";
import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./navbar";

export const News24 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex flex-1">
        <Sidebar />

        <div className="flex-1">
          <HeroSection />

          <div className="p-6">
            <Content />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
