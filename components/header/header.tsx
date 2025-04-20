"use client";

//* React and Next
import Image from "next/image";
import { useTheme } from "next-themes";

//* Components
import { NavUser } from "@/components/header/nav-user";
import { ModeToggle } from "@/components/theme/mode-toggle";

// Component
export const Header = () => {
  const { resolvedTheme } = useTheme();

  // Get the logo src based on the theme
  const getLogoSrc = () => {
    if (!resolvedTheme) return "/img/logo-dark-header.png";
    return resolvedTheme === "dark"
      ? "/img/logo-dark-header.png"
      : "/img/logo-light-header.png";
  };

  return (
    <header className="flex w-full items-center justify-between px-4 py-2 bg-gray-100 dark:bg-black shadow-md">
      <div onClick={() => window.location.reload()} className="cursor-pointer">
        <Image
          priority
          width={150}
          height={150}
          alt="Logo Header"
          src={getLogoSrc()}
          className="transition-opacity duration-300"
        />
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <NavUser />
      </div>
    </header>
  );
};
