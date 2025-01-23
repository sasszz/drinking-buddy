import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-gamja-flower text-3xl">Hello World</h1>
        <ThemeToggle />
      </main>
    </div>
  );
}
