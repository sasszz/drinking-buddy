import { SquareButton } from "@/app/components";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl">Home Page</h1>
        <div className="grid grid-cols-2 gap-4">
          <SquareButton text="Shot" />
          <SquareButton text="Cocktail" />
          <SquareButton text="Beer" />
          <SquareButton text="Wine" />
        </div>
      </main>
    </div>
  );
}
