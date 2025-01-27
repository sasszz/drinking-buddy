"use client";

import { SquareButton } from "@/app/components";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Wine() {
  const router = useRouter();

  const handleButtonClick = (text: string) => {
    router.push(`/table?name=${encodeURIComponent(text)}`);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-3xl">Wine</p>
      <div className="grid grid-cols-2 gap-4">
        <SquareButton
          text={"5oz Glass"}
          onClick={() => handleButtonClick("5oz Glass of Wine")}
        />
        <SquareButton
          text={"Custom"}
          onClick={() => handleButtonClick("Custom Size Glass of Wine")}
        />
      </div>
      <Link href={"/"}>
        <button className="p-4 px-12 bg-slate-500 rounded-full">Back</button>
      </Link>
    </div>
  );
}
