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

// TEMPORARY
// TODO: CMS
function Tech({ className, tech }: { className: string; tech: string }) {
  const SVG = useMemo(() => {
    try {
      return dynamic(() => import(`../../../public/brand-icons/${tech}`), {
        ssr: false,
        loading: () => <div className="size-6" />,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }, [tech]);

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center gap-2 font-bold",
        className,
      )}
    >
      {SVG && <SVG />}
      <span className="text-md font-bold text-white uppercase">{tech}</span>
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
        "group relative inline-flex w-38 cursor-pointer items-center justify-center overflow-hidden bg-background px-6 py-3 font-medium transition duration-300 ease-out",
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
            "bg-slate-800": ["javascript", "react", "nx"].includes(tech),
            "bg-blue-500": ["typescript", "prisma", "strapi"].includes(tech),
            "bg-green-600": tech === "c sharp",
            "bg-cyan-700": ["python", "postgresql"].includes(tech),
            "bg-zinc-900": ["next", "shadcn"].includes(tech),
            "bg-indigo-500": tech === "vite",
            "bg-teal-500": tech === "tailwind",
            "bg-pink-400": tech === "sass",
            "bg-sky-700": tech === "material",
            "bg-violet-700": tech === "daisyui",
            "bg-purple-600": tech === "bootstrap",
            "bg-gray-600": tech === "express",
            "bg-rose-600": tech === "nest",
            "bg-purple-900": tech === "net",
            "bg-emerald-400": tech === "supabase",
            "bg-indigo-600": tech === "dynamodb",
            "bg-orange-600": tech === "typeorm",
            "bg-amber-500": tech === "aws",
            "bg-sky-500": tech === "docker",
            "bg-red-500": tech === "git",
          })}
          tech={tech}
        />
      </span>
      <span className="invisible relative">Button</span>
    </Link>
  );
}
