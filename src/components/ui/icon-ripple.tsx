"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface IconRippleProps extends React.HTMLAttributes<HTMLDivElement> {
  borderColor?: string;
  inset?: string;
}

export default function IconRipple({
  borderColor = "#ddd",
  inset = "4px",
  children,
}: IconRippleProps) {
  const customBorderStyle = {
    borderColor,
  };
  const insetStyle = {
    top: `-${inset}`,
    bottom: `-${inset}`,
    left: `-${inset}`,
    right: `-${inset}`,
  };

  return (
    <div className={cn("group relative flex items-center justify-center")}>
      {children}
      {/*<Icon size={iconSize} color={iconColor} />*/}
      <div
        className={cn("absolute -inset-4 animate-ping rounded-full border-2")}
        style={{ ...customBorderStyle, ...insetStyle }}
      />
    </div>
  );
}
