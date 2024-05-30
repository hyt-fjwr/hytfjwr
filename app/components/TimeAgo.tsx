import React, { useState, useEffect } from "react";
import { formatTimeAgo } from "../util/formatTime";

interface TimeAgoProps {
  timestamp: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState<string>("");

  useEffect(() => {
    const updateTimeAgo = () => {
      setTimeAgo(formatTimeAgo(timestamp));
    };

    updateTimeAgo();
    const intervalId = setInterval(updateTimeAgo, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [timestamp]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
