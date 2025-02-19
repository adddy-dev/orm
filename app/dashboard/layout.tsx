import React from "react";

import Sidebar from "@/components/essentitals/Sidebar";
import { Header } from "@/components/Header";
import { Protect } from "@clerk/nextjs";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Protect
      fallback={
        <div className="flex flex-col h-screen items-center justify-center w-full">
          <p>Kindly login</p>
          <Link href="/" className="my-8 border border-white px-4 py-2">
            Go back Home
          </Link>
        </div>
      }
    >
      <div className="grid grid-cols-[auto_1fr] w-full">
        <Sidebar />
        <div className="max-h-screen overflow-hidden flex flex-col">
          <Header />
          {children}
        </div>
      </div>
    </Protect>
  );
}
