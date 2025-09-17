import React from "react";
import Button from "@/components/Button";   // <-- use alias

export default function Landing() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Button label="Small Rounded" styles="rounded-sm bg-blue-500 text-white px-4 py-2" />
      <Button label="Large Rounded" styles="rounded-lg bg-green-500 text-white px-4 py-2" />
      <Button label="Fully Rounded" styles="rounded-full bg-red-500 text-white px-4 py-2" />
    </div>
  );
}


