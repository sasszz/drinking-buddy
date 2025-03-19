import Image from "next/image";
import Cup from "../../../public/cup-buddy.png";
import { FadeIn } from "@/components";

export default function Home() {
  return (
    <div className="h-screen overflow-y-clip">
      <FadeIn>
        <main className="flex flex-col gap-4 h-screen items-center justify-center">
          <h1 className="font-childish text-[65px] leading-none font-[1000] tracking-tighter text-center">
            Welcome!
          </h1>
          <p className="font-[1000]">Your onboarding is complete!</p>
          <Image src={Cup} alt={"Cup Buddy"} height={300} />
        </main>
      </FadeIn>
    </div>
  );
}
