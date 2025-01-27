import { TextInput } from "@/app/components";

export default function Onboard() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-3xl">Onboard Page</p>
      <TextInput placeholder={"Name"} />
      <TextInput placeholder={"Age"} />
      <TextInput placeholder={"Sex"} />
      <TextInput placeholder={"Height"} />
      <TextInput placeholder={"Weight"} />
    </div>
  );
}
