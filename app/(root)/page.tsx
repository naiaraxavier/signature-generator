"use client";
import { Header } from "@/components/header/header";
import { redirect } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { getSession } from "@/lib/actions/session";

interface User {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}

const HomePage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (!session) {
        redirect("/auth/signin");
      } else {
        setUser({
          name: session.name || "Visitante",
          email: session.email || "",
          image: session.image || "",
        });
      }
    };
    fetchSession();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLoading = !mounted || !resolvedTheme;

  return isLoading ? (
    <div className="flex items-center justify-center h-[350px] w-full">
      <Loader className="animate-spin w-10 h-10 text-gray-500 dark:text-gray-300" />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 ">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {user && <h1>Bem vindo(a), {user?.name || "Visitante"}</h1>}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default HomePage;
