"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, RotateCw, ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ModelSelector } from "./ModelSelector";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Header = ({ title }: { title?: string }) => {
  const [open, setOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("default-model");

  return (
    <div className="flex items-center justify-between px-4 min-h-16 border-b">
      {(title && title == 'Generator') ?
        <nav className="w-full flex items-center justify-center gap-8 h-16">
          <div className="flex gap-8">
            <Link href="/dashboard/default-model">Home</Link>
            <Link href="/dashboard/generator">Generator</Link>
            <Link href="/dashboard/generator">Docs</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/dashboard/generator">Support</Link>
          </div>
          <SignOutButton>
            <Button variant="secondary" className="bg-primary text-accent-foreground hover:bg-primary-foreground">
              Log Out
            </Button>
          </SignOutButton>
        </nav>
        : <div className="flex items-center justify-end w-full gap-2">
            <Button variant="ghost" size="sm">
              Help
            </Button>
            <Link href={'/'}>
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <UserButton />
            </Button>
            <Button onClick={() => location.reload()} variant="ghost" size="icon">
              <RotateCw className="h-5 w-5" />
            </Button>
          </div>}
    </div>
  );
};
