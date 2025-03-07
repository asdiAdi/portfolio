import * as React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 w-full py-4 text-center font-mono text-sm text-gray-500">
      Copyright&copy;2025 -{" "}
      <a href="https://carladi.com" className="hover:underline">
        carladi.com
      </a>{" "}
      | All rights Reserved
    </footer>
  );
}
