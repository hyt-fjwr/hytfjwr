"use client";
import { Test, Props } from "@/app/util/interface";
import React, { useEffect, useState } from "react";

export default function TestList() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getTestData = async () => {
      const data = await getTestData();
      setData(data);
      console.log(data);
    };
    getTestData();
  });

  return (
    <>
      <div>
        <ul>
          {data.map((data: Test, index: number) => (
            <li key={index}>
              <p>ID: {data.id}</p>
              <p>TEXT: {data.text}</p>
              <p>CREATED_AT: {data.created_at}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
