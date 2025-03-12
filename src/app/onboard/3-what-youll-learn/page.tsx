import Link from "next/link";
import { Button, FadeIn } from "@/components";

export default function Learn() {
  return (
    <div className="h-full flex flex-col justify-between">
      <FadeIn>
        <div className="flex flex-col gap-8">
          <p className="font-bold">What you’ll learn</p>
          <ul className="list-disc list-inside flex flex-col gap-4">
            <li>Your estimated Blood Alcohol Content (BAC) </li>
            <li>Time until you reach legal driving limits</li>
            <li>Personalized insights about alcohol processing</li>
          </ul>
        </div>
      </FadeIn>
      <Link href="/onboard/4-complete">
        <Button buttonText="Next" />
      </Link>
    </div>
  );
}
