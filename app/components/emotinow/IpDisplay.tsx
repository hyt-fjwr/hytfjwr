"use client";

import React, { useState, useEffect } from "react";

export default function IpDisplay() {
  const [location, setLocation] = useState<string>("Loading...");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const ipResponse = await fetch("https://hytfjwr.com/api/emotinow");
        if (!ipResponse.ok) {
          throw new Error(`IP fetch error! status: ${ipResponse.status}`);
        }
        const { ip } = await ipResponse.json();
        console.log("取得したIP:", ip); // ログ追加

        const countryResponse = await fetch(
          `https://hytfjwr.com/api/getCountry?ip=${ip}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (!countryResponse.ok) {
          throw new Error(
            `Country fetch error! status: ${countryResponse.status}`
          );
        }
        const data = await countryResponse.json();
        console.log("国データ:", data); // ログ追加

        if (data.country_name) {
          setLocation(data.country_name);
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

  return <div className="p-2">Your Location: {location}</div>;
}
