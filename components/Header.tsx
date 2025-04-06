"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Home, RotateCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export const Header = ({ title }: { title?: string }) => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between px-4 min-h-16 border-b">
      {(title && title == "generator") ? (
        <nav className="w-full flex items-center justify-center gap-8 h-16">
          <div className="flex gap-8">
            <Link href="/dashboard/default-model">Home</Link>
            <Link href="/dashboard/generator">Generator</Link>
            <Link href="/dashboard/generator">Docs</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/dashboard/generator">Support</Link>
          </div>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">
                  {session?.user?.image ? (
                    <Image
                      width={40}
                      height={40}
                      src={session.user.image}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <span className="text-xl flex items-center justify-center text-secondary w-8 h-8 rounded-full bg-card">
                      {session?.user?.name?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 p-4">
                <Button
                  variant={"ghost"}
                  className="w-full px-4 py-2 text-left hover:bg-muted"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      ) : (
        <div className="flex items-center justify-end w-full gap-4">
          <Link href={"/"}>
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">
                  {session?.user?.image ? (
                    <Image
                      width={40}
                      height={40}
                      src={session.user.image}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <span className="text-xl flex items-center justify-center text-secondary w-8 h-8 rounded-full bg-card">
                      {session?.user?.name?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 p-4">
                <Button
                  variant={"ghost"}
                  className="w-full px-4 py-2 text-left hover:bg-muted"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          </div>
          <Button onClick={() => location.reload()} variant="ghost" size="icon">
            <RotateCw className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};