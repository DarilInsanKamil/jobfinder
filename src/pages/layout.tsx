import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="py-4 sticky top-0 w-full bg-white z-50">
        navigation bar
      </nav>
      <main>{children}</main>
      <footer className="py-4 fixed inset-x-0 -bottom-5 w-full bg-slate-400">
        footer
      </footer>
    </>
  );
}
