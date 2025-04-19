import { auth } from "@/auth";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();
  if (!session) return redirect("/auth/signin");
  const user = session?.user;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
