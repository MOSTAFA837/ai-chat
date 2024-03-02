"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const font = Poppins({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-global">
      <div className="flex items-center">
        <MobileSidebar />

        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            chat.ai
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-3">
        <Button size="sm" variant="premium">
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>

        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
