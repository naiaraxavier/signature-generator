"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        className="relative overflow-hidden"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div className="relative h-5 w-5">
          <Sun className="absolute h-5 w-5 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0 dark:opacity-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 opacity-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100" />
        </div>
      </Button>
    </div>
  );
}
