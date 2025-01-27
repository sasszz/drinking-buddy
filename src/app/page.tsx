import Link from "next/link";

import { SquareButton } from "@/app/components";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl">Home Page</h1>
        <div className="grid grid-cols-2 gap-4">
          <Link href={`/form/shot`}>
            <SquareButton text="Shot" />
          </Link>
          <Link href={`/form/cocktail`}>
            <SquareButton text="Cocktail" />
          </Link>
          <Link href={`/form/beer`}>
            <SquareButton text="Beer" />
          </Link>
          <Link href={`/form/wine`}>
            <SquareButton text="Wine" />
          </Link>
        </div>
      </main>
    </div>
  );
}
