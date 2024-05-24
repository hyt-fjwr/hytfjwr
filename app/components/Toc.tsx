"use client";

import { FC, useEffect } from "react";
import tocbot from "tocbot";

export const Toc: FC = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".post-content",
      contentSelector: "h1, h2, h3",
      activeLinkClass: ".is-active-link",
      listClass: ".toc-list",
      linkClass: ".toc-link",
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <nav>
      <h2 className="toctitle">Table of Contents</h2>
      <div className=".toc" />
    </nav>
  );
};
