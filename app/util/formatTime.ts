// src/utils/formatTime.ts
export function formatTimeAgo(inputTime: string): string {
  const now = new Date();
  const past = new Date(inputTime);

  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInMonth = 2592000; // approx 30 days
  const secondsInYear = 31536000; // approx 365 days

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds}s ago`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes}m ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours}h ago`;
  } else if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days}d ago`;
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return `${months}month ago`;
  } else {
    const years = Math.floor(diffInSeconds / secondsInYear);
    return `${years}year ago`;
  }
}
