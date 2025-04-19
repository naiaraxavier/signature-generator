"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { ModeToggle } from "../theme/mode-toggle";

export const Header = () => {
  const { resolvedTheme } = useTheme();

  const getLogoSrc = () => {
    if (!resolvedTheme) return "/img/logo-dark-header.png";
    return resolvedTheme === "dark"
      ? "/img/logo-dark-header.png"
      : "/img/logo-light-header.png";
  };

  return (
    <header className="flex w-full items-center justify-between p-2 bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="p-2">
        <Image
          src={getLogoSrc()}
          alt="Logo Header"
          width={150}
          height={150}
          priority
          className="transition-opacity duration-300"
        />
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
};
