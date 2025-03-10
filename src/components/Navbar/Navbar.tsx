"use client";

import { ThemeToggle } from "../ThemeToggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-10">
      <div className="flex flex-row gap-12 items-center">
        <Link className="text-3xl font-childish" href={`/`}>
          Drinking Buddy
        </Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/onboard`}>Onboard</Link>
      </div>
      <ThemeToggle />
    </div>
  );
};
