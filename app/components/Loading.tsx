import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      <div className="h-3 w-3 animate-ping border-[1px] border-violet-400"></div>
      <p className="text-[15px] font-weight">Loading...</p>
    </div>
  );
}
