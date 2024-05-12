import React from "react";

export default function Layuout({ children }: { children: React.ReactNode }) {
  return <div className="prose dark:prose-invert prose-xl">{children}</div>;
}
