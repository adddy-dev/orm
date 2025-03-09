import React from "react";

import { IoShieldHalf } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import Link from "next/link";
import Logo from "./Logo";
import { GitCompare } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="w-64 border-r h-screen py-4 px-1 pb-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="flex items-center gap-2 px-4 mt-2 mb-6">
        <Logo />
      </div>

      <div className="flex flex-col space-y-2 px-4 mb-6">
        <h2 className="ml-4 font-bold">General</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/dashboard/default-model"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <IoShieldHalf /> 
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Policy Copilot </span>
          </Link>
          <Link
            href="/regulatory-framework"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <GitCompare /> 
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Regulatory Framework </span>
          </Link>
          <Link
            href="/dashboard/generator"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <FaFileCode /> 
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Policy Generator </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-4 mb-6">
        <h2 className="ml-4 font-bold">More Services</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Financial Services </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Healthcare </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Non-profit Organizations </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Food & Beverages </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Energy & Utility </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          > 
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Manufacturing </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> SOX </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> ISO 27001 </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> NIST </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> PCI DSS </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> SAMA CSF </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          > 
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> PDPL </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-4 mb-2">
        <h2 className="ml-4 font-bold">Support</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <FaShieldAlt /> 
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Trust Center </span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <MdOutlineMessage /> 
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Contact Support </span>
          </Link>
          <Link
            href="/dashboard/user-settings"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <IoSettingsOutline /> Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}
