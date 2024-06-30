import IpDisplay from "@/app/components/emotinow/IpDisplay";
import React from "react";

export default function page() {
  return (
    <div className="flex bg-black w-lvw h-lvh text-white items-center justify-center">
      Share your emotion with emoji
      <IpDisplay />
    </div>
  );
}
