"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/photo", label: "Photo" },
  { href: "/gear", label: "Gear" },
];

export default function Navigation() {
  const pathname = usePathname();

  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <nav>
      <div className="sm:flex hidden">
        {links.map((link) => (
          <Button
            className={cn(
              pathname === link.href && "bg-accent text-accent-foreground",
              "ml-1 mr-2"
            )}
            variant="ghost"
            key={link.href}
            asChild
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
      <motion.button
        initial="hide"
        animate={mobileNav ? "show" : "hide"}
        onClick={toggleMobileNav}
        className="flex flex-col space-y-1 relative z-20 sm:hidden"
      >
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: 45,
              y: 5,
            },
          }}
          className="w-6 bg-black dark:bg-white h-px block"
        ></motion.span>
        <motion.span
          variants={{
            hide: {
              opacity: 1,
            },
            show: {
              opacity: 0,
            },
          }}
          className="w-6 bg-black dark:bg-white h-px block"
        ></motion.span>
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: -45,
              y: -5,
            },
          }}
          className="w-6 bg-black dark:bg-white h-px block"
        ></motion.span>
      </motion.button>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              duration: 0.5,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "afterChildren",
                    duration: 0.8,
                  },
                },
                show: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "beforeChildren",
                    staggerChildren: 0.25,
                    duration: 0.4,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed inset-0 h-screen bg-zinc-100  dark:bg-zinc-800 p-6 flex flex-col justify-center space-y-10 lg:hidden z-30"
            >
              <motion.ul
                variants={{
                  hide: {
                    y: "25%",
                    opacity: 0,
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="list-none space-y-5"
              >
                {links.map((link) => (
                  <li
                    key={link.href}
                    className={cn(
                      pathname === link.href && "bg-white dark:bg-zinc-500 p-4 "
                    )}
                  >
                    <a
                      href={link.href}
                      className="text-5xl font-semibold text-zinc-900 dark:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
              <motion.div
                variants={{
                  hide: {
                    y: "25%",
                    opacity: 0,
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="w-full h-px dark:bg-white/30 bg-black"
              ></motion.div>
              <motion.ul
                variants={{
                  hide: {
                    y: "25%",
                    opacity: 0,
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="list-none flex justify-center gap-x-4"
              ></motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
}
