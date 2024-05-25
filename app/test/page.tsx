import React from "react";
import TestList from "./components/TestList";
import { SignUp } from "@clerk/nextjs";

export default function Test() {
  return (
    <>
      <div>TEST</div>
      <div>
        <SignUp />
        <TestList />
      </div>
    </>
  );
}
