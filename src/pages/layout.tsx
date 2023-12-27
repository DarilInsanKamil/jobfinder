import Footer from "@/components/my_ui/footer";
import NavigationBar from "@/components/my_ui/navigationBar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
