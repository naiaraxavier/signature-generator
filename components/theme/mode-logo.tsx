"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export const ModeLogo = () => {
  const { resolvedTheme } = useTheme();

  // Helper function to get the logo based on the theme
  const getLogoSrc = (darkSrc: string, lightSrc: string) =>
    resolvedTheme === "dark" ? darkSrc : lightSrc;

  return (
    <Image
      src={getLogoSrc("/img/logo-dark.png", "/img/logo-light.png")}
      alt="Logo"
      width={500}
      height={500}
    />
  );
};
