import Image from "next/image";
import Cup from "../../public/cup-buddy.png";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-4 h-screen items-center justify-center">
        <h1 className="font-childish text-[65px] font-[1000] tracking-tighter">
          Drinking Buddy
        </h1>
        <p className="font-[1000]">The friend that keeps count</p>
        <Image src={Cup} alt={"Cup Buddy"} />
      </main>
    </div>
  );
}
