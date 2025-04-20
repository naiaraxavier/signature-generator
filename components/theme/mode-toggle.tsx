// * Next
import { useTheme } from "next-themes";

// * Icons
import { Moon, Sun } from "lucide-react";

// * Components
import { Button } from "@/components/ui/button";

// Component
export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-6">
      <Button
        variant="ghost"
        className=" relative w-10 h-10 flex items-center justify-center overflow-hidden p-0 cursor-pointer rounded-full transition-all duration-500 hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun
          className={`absolute w-5 h-5 text-yellow-800 transition-all duration-500 transform
          ${
            theme === "dark"
              ? "opacity-0 scale-0 rotate-90"
              : "opacity-100 scale-100 rotate-0"
          }
        `}
        />
        <Moon
          className={`absolute w-5 h-5 text-zinc-200 transition-all duration-500 transform
          ${
            theme === "dark"
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-0 -rotate-90"
          }
        `}
        />
      </Button>
    </div>
  );
};
