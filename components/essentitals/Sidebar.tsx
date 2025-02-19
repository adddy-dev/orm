import React from "react";

import { FaInfoCircle } from "react-icons/fa";
import { IoShieldHalf } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import Link from "next/link";
import Logo from "../Logo";

export default function Sidebar() {
  return (
    <nav className="w-64 border-r h-screen p-4 pb-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="flex items-center gap-2 px-4 mt-2 mb-6">
        <Logo />
      </div>

      <div className="flex flex-col space-y-2 px-4 mb-6">
        <h2 className="ml-4 font-bold">General</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <FaInfoCircle /> Getting Started
          </Link>
          <Link
            href="/dashboard/default-model"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <IoShieldHalf /> ISMS Copilot
          </Link>
          <Link
            href="/dashboard/generator"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <FaFileCode /> Policy Generator
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-4 mb-6">
        <h2 className="ml-4 font-bold">Tutorials</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <FaBookOpen /> ISO 27001
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <FiFileText /> Policies
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-2 px-4 mb-6">
        <h2 className="ml-4 font-bold">More Services</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <FaUsers /> Partners
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <FaShieldAlt /> Use AI Securely
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-4 mb-2">
        <h2 className="ml-4 font-bold">Support</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <FaShieldAlt /> Trust Center
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <MdOutlineMessage /> Contact Support
          </Link>
          <Link
            href="/dashboard/user-settings"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-gray-100 rounded-lg"
          >
            <IoSettingsOutline /> Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}
