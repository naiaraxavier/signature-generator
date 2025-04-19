import { ModeLogo } from "@/components/theme/mode-logo";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { LoginGoogle } from "@/components/auth/login-google";

export default function SignIn() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="fixed top-0 right-0 p-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg h-[350px] max-w-4xl p-6 m-6">
        <div className="p-4">
          <ModeLogo />
        </div>
        <div className="p-4">
          <LoginGoogle />
        </div>
      </div>
    </main>
  );
}
