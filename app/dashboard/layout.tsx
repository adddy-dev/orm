import React from "react";

import Sidebar from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth();

  if(!session || !session.user) return redirect('/signin');

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
