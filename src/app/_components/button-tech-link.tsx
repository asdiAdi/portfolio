"use client";
import React, { useMemo } from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

import Link, { LinkProps } from "next/link";
import dynamic from "next/dynamic";

type ButtonTechLinkProps = Omit<LinkProps, "href"> & {
  tech: string;
  className?: string;
};

function Tech({ className, text }: { className: string; text: string }) {
  const SVG = useMemo(
    () =>
      dynamic(() => import(`../../../public/brand-icons/${text}`), {
        ssr: false,
        loading: () => <div className="size-6" />,
      }),
    [text],
  );

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center gap-2 font-bold",
        className,
      )}
    >
      <SVG />
      <span className="text-md font-bold text-white uppercase">{text}</span>
    </div>
  );
}

export default function ButtonTechLink({
  tech,
  className,
  ...props
}: ButtonTechLinkProps) {
  return (
    <Link
      // href={`/projects?tech=${tech}`}
      href="/projects"
      className={cn(
        "group relative inline-flex w-40 cursor-pointer items-center justify-center overflow-hidden bg-background px-6 py-3 font-medium transition duration-300 ease-out",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center gap-2 bg-primary font-bold text-white uppercase duration-300 group-hover:translate-x-0",
        )}
      >
        Projects <MoveRight />
      </span>
      <span
        className={cn(
          "absolute h-full w-full transform transition-all duration-300 ease-in-out group-hover:translate-x-full",
        )}
      >
        <Tech
          className={cn({
            "bg-slate-800": tech === "javascript",
            "bg-blue-500": tech === "typescript",
          })}
          text={tech}
        />
      </span>
      <span className="invisible relative">Button</span>
    </Link>
  );
}
