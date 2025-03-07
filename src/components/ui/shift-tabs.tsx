"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Item = { title: string; href: string };

interface ButtonProps {
  item: Item;
  pathname: string;
}

const Button = ({ item, pathname }: ButtonProps) => {
  const { title, href } = item;
  const isActive = href === "/" ? pathname === href : pathname.includes(href);

  return (
    <div
      className={cn("rounded-lg bg-primary", {
        "border-b-2 border-b-primary": isActive,
      })}
    >
      <Link
        className={cn(
          "flex h-10 cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 text-black transition-all",
          {
            "border-2 border-primary text-primary": isActive,
            "origin-top-right ease-in hover:rotate-6": !isActive,
          },
        )}
        href={href}
      >
        <p className="text-center font-mono">{title}</p>
      </Link>
    </div>
  );
};

export default function ShiftTabs({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn("flex w-fit items-center justify-center gap-4", className)}
    >
      {items.map((item, index) => (
        <Button item={item} key={`shift_tab_${index}`} pathname={pathname} />
      ))}
    </div>
  );
}
