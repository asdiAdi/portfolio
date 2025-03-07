"use client";
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SwitchTheme({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { setTheme, theme } = useTheme();
  const checked = theme === "dark";
  const [isChecked, setIsChecked] = useState(theme === "dark");

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className,
      )}
      onClick={() => {
        // Add some delay because for some reason, transition animation won't work when theme is changed
        setIsChecked(!checked);
        setTimeout(() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }, 150);
      }}
      checked={isChecked}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "block size-6 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0",
        )}
      >
        {isChecked && (
          <Moon className="size-6 rounded-full bg-black text-white" />
        )}
        {!isChecked && <Sun className="size-6 rounded-full" />}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}
