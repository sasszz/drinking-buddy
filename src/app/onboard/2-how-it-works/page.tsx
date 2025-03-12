import Link from "next/link";
import { Button, FadeIn } from "@/components";

export default function How() {
  return (
    <div className="h-full flex flex-col justify-between">
      <FadeIn>
        <div className="flex flex-col gap-8">
        <p className="font-bold">How it works</p>
          <p>
            The Widmark equation calculates how your body processes alcohol over
            time.
          </p>
          <p>
            On average, your body eliminates alcohol at a rate of about 0.015% per
            hour.
          </p>
        </div>
      </FadeIn>
      <Link href="/onboard/3-what-youll-learn">
        <Button buttonText="Next" />
      </Link>
    </div>
  );
}
