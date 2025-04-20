"use client";

// * React and Next
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

//* Icons
import { Loader } from "lucide-react";

// * Context
import { useUser } from "@/contexts/user-context";

// * Components
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { FormWithPreview } from "@/components/body/form-with-preview";

const HomePage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, isLoading } = useUser();
  const router = useRouter();

  // Checks if the user is logged in
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

      <main className="flex flex-col gap-[25px] items-center justify-center w-full text-center">
        <section className="flex flex-col gap-6">
          <h1 className="text-2xl">Olá {user.name || "Visitante"}!</h1>
          <p>
            Crie sua assinatura de email profissional com links clicáveis para
            redes sociais e contatos. Preencha o formulário abaixo e copie o
            código HTML gerado.
          </p>
        </section>

        <section className="flex gap-6">
          <FormWithPreview />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
