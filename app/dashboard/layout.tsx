import React from "react";

import Sidebar from "@/components/Sidebar";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="grid grid-cols-[auto_1fr] w-full">
        <Sidebar />
        <div className="max-h-screen overflow-hidden flex flex-col">
          <Header />
          {children}
        </div>
      </div>
  );
}
