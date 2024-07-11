import AddEmotion from "@/app/components/emotionow/AddEmotion";
import EmojiSelector from "@/app/components/emotionow/EmojiSelector";
import IpDisplay from "@/app/components/emotionow/IpDisplay";
import React from "react";

export default function page() {
  return (
    <div className="flex bg-black w-lvw h-lvh text-white items-center justify-center">
      Share your emotion with emoji
      <IpDisplay />
      <AddEmotion emotion="🙃" />
      <EmojiSelector />
    </div>
  );
}
