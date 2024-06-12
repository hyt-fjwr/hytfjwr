"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Gilda_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Loading from "../Loading";

const Gilda = Gilda_Display({ subsets: ["latin"], weight: "400" });

const ShowFirstTime: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 0); // 0ミリ秒の遅延を設定して次のレンダリングサイクルで状態を変更
      return () => clearTimeout(timer); // クリーンアップ関数でタイマーをクリア
    }
  }, [imageLoaded]);

  return (
    <>
      {!showContent && (
        <div className="bg-primary-foreground z-[150] w-full h-full flex inset-0 fixed items-center justify-center">
          <Loading />
        </div>
      )}
      {showContent && (
        <>
          <div
            className={cn(
              "subpixel-antialiased md:invisible visible z-[150] flex flex-col fixed inset-0 justify-center items-center text-4xl pointer-events-none font-bold tracking-wide text-yellow-500 text-center",
              Gilda.className
            )}
          >
            <h1 className="animate-textFadeInOut">
              HAYATO
              <br />
              FUJIWARA
            </h1>
            <h2 className="text-xl tracking-tight animate-textFadeInOut2">
              Welcome to my portfolio
            </h2>
          </div>
          <div
            className={cn(
              "subpixel-antialiased md:visible invisible z-[150] flex flex-col fixed inset-0 justify-center items-center text-4xl pointer-events-none font-bold tracking-wide text-yellow-500 text-center",
              Gilda.className
            )}
          >
            <h1 className="animate-textFadeInOut">HAYATO FUJIWARA</h1>
            <h2 className="text-xl tracking-tight animate-textFadeInOut2">
              Welcome to portfolio
            </h2>
          </div>
        </>
      )}
      <div
        className={cn(
          "w-full h-full z-[100] fixed inset-0 animate-fadeInOut pointer-events-none"
        )}
      >
        <Image
          src="/photo/DSC02392.jpg"
          fill
          alt=""
          quality={100}
          className="object-cover pointer-events-none"
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>
    </>
  );
};

export default ShowFirstTime;
