import React from "react";

export default function EmojiSelector() {
  return (
    <div className=" w-96 h-16 bg-primary-foreground/5 rounded-2xl flex flex-row">
      <div className="m-2 w-12 h-12 bg-white rounded-2xl text-4xl text-center items-center justify-center flex">
        😃
      </div>
      <div className="m-2 w-12 h-12 bg-white rounded-2xl text-4xl text-center items-center justify-center flex">
        😆
      </div>
      <div className="m-2 w-12 h-12 bg-white rounded-2xl text-4xl text-center items-center justify-center flex">
        😇
      </div>
      <div className="m-2 w-12 h-12 bg-white rounded-2xl text-4xl text-center items-center justify-center flex">
        🙃
      </div>
      <div className="m-2 w-12 h-12 bg-white rounded-2xl text-4xl text-center items-center justify-center flex">
        🥰
      </div>
      <div className="m-2 w-12 h-12 bg-white rounded-2xl text-4xl text-center items-center justify-center flex">
        😭
      </div>
    </div>
  );
}
