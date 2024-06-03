"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const ShowFirstTime: React.FC = () => {
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hassVisited");

    if (!hasVisited) {
      setIsFirstTime(true);
      localStorage.setItem("hassVisited", "true");

      setTimeout(() => {
        setIsFirstTime(false);
      }, 7000);
    }
  }, []);

  if (!isFirstTime) {
    return null;
  }

  return (
    <div className="w-[100%] h-[100vh] flex fixed z-10 animate-fadeInOut bg-primary">
      <h1 className={`${inter.className}`}>HAYATO FUJIWARA</h1>
      <Image
        src="/photo/DSC01542.jpg"
        fill
        alt=""
        className="object-cover"
      ></Image>
    </div>
  );
};

export default ShowFirstTime;
