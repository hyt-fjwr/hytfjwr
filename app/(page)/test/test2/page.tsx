import Loading from "@/app/components/Loading";
import React from "react";

export default function page() {
  return (
    <div className="flex inset-0 fixed items-center justify-center">
      <Loading />
    </div>
  );
}
