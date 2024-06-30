"use client";

import React, { useState, useEffect } from "react";

export default function IpDisplay() {
  const [location, setLocation] = useState<string>("Loading...");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const ipResponse = await fetch("https://hytfjwr.com/api/emotinow");
        if (!ipResponse.ok) {
          throw new Error(`HTTP error! status: ${ipResponse.status}`);
        }
        const data = await ipResponse.json();
        console.log("APIレスポンス:", data); // ログ追加
        if (!data.ip) {
          throw new Error("IP not found in response");
        }
        const { ip } = data;

        const countryResponse = await fetch(
          `https://hytfjwr.com/api/getCountry?ip=${ip}`
        );
        const { country_name } = await countryResponse.json();

        setLocation(country_name);
      } catch (error) {
        console.error("エラー！😱", error);
        setLocation(`取得できなかった😢 エラー: ${error}`);
      }
    };

    fetchLocation();
  }, []);

  return <div className="p-2">Your Location: {location}</div>;
}
