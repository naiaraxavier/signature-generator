import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";
import { signoutGoogle } from "@/lib/actions/logout-google";

export const LogoutGoogle = () => {
  return (
    <form action={signoutGoogle}>
      <Button variant="ghost" className="cursor-pointer w-full">
        <LogOutIcon />
        Sair
      </Button>
    </form>
  );
};
