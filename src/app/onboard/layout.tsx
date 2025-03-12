export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-between py-[125px] px-4 text-center">
      {children}
    </div>
  );
}
