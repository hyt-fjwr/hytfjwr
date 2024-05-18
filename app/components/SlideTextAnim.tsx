import React from "react";

export default function SlideTextAnim() {
  return (
    <div className="font-inter antialiased font-extrabold text-3xl md:text-4xl [text-wrap:balance] text-transparent items-center flex text-center mt-2">
      {" "}
      <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="font-inter antialiased block text-center leading-tight [&_li]:block animate-text-slide-4">
          <li className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
            Web Develop
          </li>
          <li className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
            Design
          </li>
          <li className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
            Photograph
          </li>
          <li className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.red.400),theme(colors.pink.100),theme(colors.fuchsia.400),theme(colors.orange.400),theme(colors.amber.400),theme(colors.red.100),theme(colors.red.400))] bg-[length:200%_auto] animate-gradient">
            Video Editing
          </li>
          <li
            aria-hidden="true"
            className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient"
          >
            Web Develop
          </li>
        </ul>
      </span>
    </div>
  );
}
