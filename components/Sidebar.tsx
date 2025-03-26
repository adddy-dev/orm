import React from "react";

import { IoShieldHalf } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

import Link from "next/link";
import Logo from "./Logo";
import { ChartCandlestick, GitCompare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function Sidebar() {

  const industryFrames = ['Financial Services', 'Healthcare', 'Non-profit Organizations', 'Food & Beverages', 'Energy & Utility', 'Manufacturing'];

  return (
    <nav className="w-64 border-r h-screen py-4 px-1 pb-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="flex items-center gap-2 px-4 mt-2 mb-6">
        <Logo />
      </div>

      <div className="flex flex-col space-y-2 px-4 mb-4">
        <h2 className="ml-4 font-bold">Services</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/dashboard/default-model"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <IoShieldHalf />
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Policy Copilot </span>
          </Link>
          <Link
            href="/dashboard/regulatory-framework"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <GitCompare />
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Regulatory Framework </span>
          </Link>
          <Link
            href="/dashboard/data-risk-assessment"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <ChartCandlestick />
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Data Transfer Risk Assessment </span>
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

      <div className="flex flex-col px-4 mb-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h2 className="text-base ml-4 font-bold">Industry</h2>
            </AccordionTrigger>
            <AccordionContent>
              {industryFrames.map((industry, index) => (
                <Link
                  key={index}
                  href={`/dashboard/industry-frameworks/${industry}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
                >
                  <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap">{industry}</span>
                </Link>
              ))}
              
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h2 className="text-base ml-4 font-bold">Framework</h2>
            </AccordionTrigger>
            <AccordionContent>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col space-y-2 px-4 mb-2">
        <h2 className="ml-4 font-bold">Support</h2>
        <div className="flex flex-col space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm hover:text-zinc-700 hover:bg-foreground rounded-lg"
          >
            <MdOutlineMessage />
            <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap"> Contact Support </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
