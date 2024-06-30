import React from "react";

export default async function IpDisplay() {
  const res = await fetch("https://hytfjwr.com/api/emotinow");
  const data = await res.json();

  return <div>your IP :{data.data}</div>;
}
