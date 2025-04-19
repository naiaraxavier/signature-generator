"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-6">
      <Button
        variant="ghost"
        className="relative overflow-hidden cursor-pointer h-16 w-16 p-0"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="absolute transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0 dark:opacity-0" />{" "}
        <Moon className="absolute rotate-90 scale-0 opacity-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100" />{" "}
      </Button>
    </div>
  );
}
