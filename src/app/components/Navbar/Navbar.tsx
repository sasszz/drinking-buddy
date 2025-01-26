"use client";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <Link href={`/`}>Drinking Buddy</Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/onboard`}>Onboard</Link>
      </div>
      <ThemeToggle />
    </div>
  );
}
