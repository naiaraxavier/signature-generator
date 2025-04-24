"use client";

//* Next
import { useTheme } from "next-themes";

// * Icons
import { Moon, Sun } from "lucide-react";

// * Components
import { Button } from "@/components/ui/button";

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-6">
      <Button
        variant="ghost"
        className="relative w-10 h-10 flex items-center justify-center overflow-hidden p-0 cursor-pointer rounded-full transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="absolute rotate-90 scale-0 opacity-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100 text-yellow-500" />
        <Moon className="absolute transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0 dark:opacity-0 text-gray-900" />
      </Button>
    </div>
  );
};
