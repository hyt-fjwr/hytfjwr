"use client";

import { useState, useEffect } from "react";

const IpDisplay = () => {
  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/emotinow")
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);

  return (
    <div>
      <h2>あなたのIPアドレス:</h2>
      {ip ? <p>{ip}</p> : <p>IPアドレスを取得中...</p>}
    </div>
  );
};

export default IpDisplay;
