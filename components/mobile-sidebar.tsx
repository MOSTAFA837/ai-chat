"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden ">
        <Menu />
      </SheetTrigger>

      <SheetContent side="left">
        <div className="p-0  pt-10 w-full">
          <Sidebar isPro={false} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
