"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const className =
    "hover:bg-primary/10 text-muted-foreground hover:text-foreground group flex h-8 flex-row items-center space-x-2 rounded-md px-2 text-sm duration-200";
  return (
    <>
      <Popover>
        <PopoverTrigger className="ml-4 p-2 rounded-2xl hover:bg-accent duration-300">
          {resolvedTheme === "dark" ? (
            <Moon aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Sun aria-hidden="true" className="h-5 w-5" />
          )}
        </PopoverTrigger>
        <PopoverContent className=" w-32">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => {
                setTheme("light");
              }}
              className={cn(
                className,
                props.className,
                "bg-primary/10 dark:bg-background"
              )}
            >
              <Sun aria-hidden="true" className="h-5 w-5" />
              <h1 className="">Light</h1>
            </button>
            <button
              onClick={() => {
                setTheme("dark");
              }}
              className={cn(className, props.className, "dark:bg-primary/10")}
            >
              <Moon aria-hidden="true" className="h-5 w-5" />
              <h1>Dark</h1>
            </button>
            <button
              onClick={() => {
                setTheme("system");
              }}
              className={cn(className, props.className)}
            >
              <Monitor aria-hidden="true" className="h-5 w-5" />
              <h1>System</h1>
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
