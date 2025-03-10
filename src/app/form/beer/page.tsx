"use client";

import { SquareButton } from "../../../components";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Beer() {
  const router = useRouter();

  const handleButtonClick = (text: string) => {
    router.push(`/table?name=${encodeURIComponent(text)}`);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-3xl">Beer</p>
      <div className="grid grid-cols-2 gap-4">
        <SquareButton
          text={"Can of Beer"}
          onClick={() => handleButtonClick("Can")}
        />
        <SquareButton
          text={"Bottle"}
          onClick={() => handleButtonClick("Bottle of Beer")}
        />
        <SquareButton
          text={"Pint of Beer"}
          onClick={() => handleButtonClick("Pint")}
        />
        <SquareButton
          text={"Custom"}
          onClick={() => handleButtonClick("Custom Size Beer")}
        />
      </div>
      <Link href={"/"}>
        <button className="p-4 px-12 bg-slate-500 rounded-full">Back</button>
      </Link>
    </div>
  );
}
