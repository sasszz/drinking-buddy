"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Table() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name");

  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const now = new Date();
    setTimestamp(now.toLocaleString());
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-3xl">Table</p>
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">{name}</td>
            <td className="border border-gray-300 px-4 py-2">{timestamp}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="p-4 px-12 bg-slate-500 rounded-full"
        onClick={() => router.push("/")}
      >
        Back
      </button>
    </div>
  );
}
