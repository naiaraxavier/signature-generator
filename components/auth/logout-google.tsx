import { signOut } from "@/auth";
import { Button } from "../ui/button";

export const LogoutGoogle = () => {
  const signout = async () => {
    "use server";
    await signOut();
  };

  return (
    <form action={signout}>
      <Button>Sair</Button>
    </form>
  );
};
