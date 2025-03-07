"use client";
import { ReactNode, useState } from "react";
import ShiftTabs from "@/components/ui/shift-tabs";
import ButtonExternalLink from "@/components/ui/button-external-link";
import SwitchTheme from "@/components/ui/switch-theme";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import Github from "../../../public/brand-icons/github";
import Linkedin from "../../../public/brand-icons/linkedin";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import * as React from "react";
import { useTheme } from "next-themes";

export default function NavbarLayout(props: { children?: ReactNode }) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { resolvedTheme } = useTheme();

  return (
    <div className="mt-4">
      <div className="m-auto flex items-center justify-between px-4">
        <div className="flex items-center justify-end gap-4">
          <Drawer direction="top" open={isOpen} onOpenChange={toggle}>
            <DrawerTrigger className="ml-4 cursor-pointer md:hidden">
              <Menu size="32" />
            </DrawerTrigger>
            <DrawerContent className="pt-4 pl-4">
              <DrawerHeader>
                <DrawerTitle className="flex flex-col gap-4 text-xl">
                  <Link href="/" onClick={toggle}>
                    Profile
                  </Link>
                  <Link href="/about" onClick={toggle}>
                    About Me
                  </Link>
                  <Link href="/projects" onClick={toggle}>
                    Projects
                  </Link>
                  <Link href="/contact" onClick={toggle}>
                    Contact
                  </Link>
                </DrawerTitle>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>

          <ShiftTabs
            items={[
              { title: "Profile", href: "/" },
              { title: "About Me", href: "/about" },
              { title: "Projects", href: "/projects" },
              { title: "Contact", href: "/contact" },
            ]}
            className="hidden md:flex"
          />
          <ButtonExternalLink text="Blog" href="https://blog.carladi.com" />
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" size="icon">
            <Link
              href="https://www.github.com/asdiadi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-6!" />
            </Link>
          </Button>

          <Button variant="outline" size="icon">
            <Link
              href="https://www.linkedin.com/in/asdiadi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-6!" />
            </Link>
          </Button>
          <SwitchTheme />
        </div>
      </div>
      {children}
      <Toaster theme={resolvedTheme === "dark" ? "dark" : "light"} />
    </div>
  );
}
