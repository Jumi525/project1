import Footer from "@/components/landingPage/footer";
import Header from "@/components/landingPage/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
