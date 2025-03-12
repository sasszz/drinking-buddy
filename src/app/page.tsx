import Image from "next/image";
import Cup from "../../public/cup-buddy.png";
import { Button, FadeIn } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen overflow-y-clip">
      <FadeIn>
        <main className="flex flex-col gap-4 h-screen items-center justify-center">
          <h1 className="font-childish text-[65px] leading-none font-[1000] tracking-tighter text-center">
            Drinking Buddy
          </h1>
          <p className="font-[1000]">The friend that keeps count</p>
          <Image src={Cup} alt={"Cup Buddy"} height={300} />
          <Link href={"/onboard/1-history"}>
            <Button buttonText={"Enter"} />
          </Link>
        </main>
      </FadeIn>
    </div>
  );
}
