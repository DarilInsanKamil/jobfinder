import Footer from "@/components/my_ui/footer";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <p>Hello</p>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout
