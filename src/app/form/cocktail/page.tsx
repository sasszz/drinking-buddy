"use client";

import { SquareButton } from "@/app/components";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function Cocktail() {
  const router = useRouter();

  const handleButtonClick = (text: string) => {
    router.push(`/table?name=${encodeURIComponent(text)}`);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-3xl">Cocktail</p>
      <div className="grid grid-cols-2 gap-4">
        <SquareButton
          text={"Single"}
          onClick={() => handleButtonClick("Single Cocktail")}
        />
        <SquareButton
          text={"Double"}
          onClick={() => handleButtonClick("Double Cocktail")}
        />
      </div>
      <Link href={"/"}>
        <button className="p-4 px-12 bg-slate-500 rounded-full">Back</button>
      </Link>
    </div>
  );
}
