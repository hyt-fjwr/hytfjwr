"use client";

import React, { useState, useEffect } from "react";

export default function IpDisplay() {
  const [location, setLocation] = useState<string>("Loading...");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const ipResponse = await fetch("https://hytfjwr.com/api/emotinow", {
          credentials: "include",
          headers: {
            "User-Agent": navigator.userAgent,
          },
        });
        const { ip } = await ipResponse.json();
        console.log(ip);

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
