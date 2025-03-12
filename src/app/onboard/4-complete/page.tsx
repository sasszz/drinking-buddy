import { FadeIn } from "@/components";

export default function Complete() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <FadeIn>
        <p className="font-bold">Onboarding Complete!</p>
      </FadeIn>
    </div>
  );
}
