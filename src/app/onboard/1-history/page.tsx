import Link from "next/link";
import { Button, FadeIn, SliderDate } from "@/components";

export default function History() {
  return (
    <div className="h-full flex flex-col justify-between">
      <FadeIn>
        <div className="flex flex-col gap-8">
          <p className="font-bold">History</p>
          <p>BAC = (A / (r × W)) - (β × t)</p>
          <SliderDate />
          <p>
            Dr. Erik Widmark created this formula, which remains trusted by
            courts and forensic experts.
          </p>
        </div>
      </FadeIn>
      <Link href="/onboard/2-how-it-works">
        <Button buttonText="Next" />
      </Link>
    </div>
  );
}
