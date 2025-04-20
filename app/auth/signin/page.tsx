"use client";

// * Icons
import { Loader } from "lucide-react";

// * React and Next
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// * Components
import { ModeToggle } from "@/components/theme/mode-toggle";
import { LoginGoogle } from "@/components/auth/login-google";

const SignIn = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLogoSrc = () => {
    if (!mounted || !resolvedTheme) return "/img/logo-dark.png";
    return resolvedTheme === "dark"
      ? "/img/logo-dark.png"
      : "/img/logo-light.png";
  };

  const isLoading = !mounted || !resolvedTheme;

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="fixed top-0 right-0 p-4">
        <ModeToggle />
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-[350px] w-full">
          <Loader className="animate-spin w-10 h-10 text-gray-500 dark:text-gray-300" />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-100 dark:bg-[#18181b] rounded-lg shadow-lg h-[350px] max-w-4xl p-6 m-6">
          <div className="p-4">
            <Image
              src={getLogoSrc()}
              alt="Logo"
              width={500}
              height={500}
              priority
              className="transition-opacity duration-300"
            />
          </div>
          <div className="p-4">
            <LoginGoogle />
          </div>
        </div>
      )}
    </main>
  );
};

export default SignIn;
