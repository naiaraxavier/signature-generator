// * Icons
import { LogOutIcon } from "lucide-react";

// * Lib
import { signoutGoogle } from "@/lib/actions/logout-google";

// * Components
import { Button } from "@/components/ui/button";

// Component
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
