"use client";

import { FC, useEffect } from "react";
import tocbot from "tocbot";

export const Toc: FC = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post-content",
      headingSelector: "h1, h2, h3",
      activeLinkClass: "active-link",
      ignoreSelector: "toc-ignore",
      listClass: "toc-list",
      linkClass: "toc-link",
      scrollSmooth: true,
      scrollSmoothDuration: 500,
      scrollSmoothOffset: 0,
      headingsOffset: 1,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <nav className="fixed translate-x-[38rem] md:visible invisible ">
      <h2 className="toctitle">目次</h2>
      <div className="toc pl-3 pr-3 border rounded-xl w-80 transform-gpu" />
    </nav>
  );
};
