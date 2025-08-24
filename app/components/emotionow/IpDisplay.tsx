"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function IpDisplay() {
  const [location, setLocation] = useState<string>("Loading...");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const ipResponse = await fetch("/api/emotinow");
        if (!ipResponse.ok) {
          throw new Error(`IP fetch error! status: ${ipResponse.status}`);
        }
        const { ip } = await ipResponse.json();

        const countryResponse = await fetch(`/api/getCountry?ip=${ip}`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (!countryResponse.ok) {
          throw new Error(
            `Country fetch error! status: ${countryResponse.status}`
          );
        }
        const data = await countryResponse.json();
        console.log("国データ:", data); // ログ追加

        if (data.country_name) {
          setLocation(data.country_code2);
        } else {
          setLocation("国名が取得できませんでした");
        }
      } catch (error) {
        console.error("詳細エラー:", error);
        if (error instanceof TypeError) {
          setLocation(`ネットワークエラー: ${error.message}`);
        } else if (error instanceof SyntaxError) {
          setLocation("JSONパースエラー");
        } else {
          setLocation(`予期せぬエラー: ${error}`);
        }
      }
    };

    fetchLocation();
  }, []);

  return (
    <>
      <Image 
        src={`https://flagsapi.com/${location}/flat/64.png`} 
        alt={`${location} flag`}
        width={64}
        height={64}
      />
    </>
  );
}
