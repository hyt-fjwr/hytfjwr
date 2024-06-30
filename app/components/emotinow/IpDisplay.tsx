import React from "react";

export default async function IpDisplay() {
  const ip = await fetch("https://hytfjwr.com/api/emotinow");
  const ipJson = await ip.json();
  const getCountry = await fetch(
    `https://api.iplocation.net/?cmd=ip-country&ip=${ipJson.ip}`
  );
  const contry = await getCountry.json();

  return <div className="p-2">Your Location :{contry.country_name}</div>;
}
