"use client";

import { Header } from "@/components/header/header";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { useUser } from "@/contexts/user-context";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/signin");
    }
  }, [isLoading, user, router]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loading = !mounted || !resolvedTheme || isLoading;

  if (!user) return null;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[350px] w-full">
        <Loader className="animate-spin w-10 h-10 text-gray-500 dark:text-gray-300" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-10">
      <Header />

      <main className="flex flex-col gap-[25px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-2xl">Olá {user.name || "Visitante"}!</h1>
          <p>
            Crie sua assinatura de email profissional com links clicáveis para
            redes sociais e contatos. Preencha o formulário abaixo e copie o
            código HTML gerado.
          </p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* <p>Footer</p> */}
      </footer>
    </div>
  );
};

export default HomePage;
