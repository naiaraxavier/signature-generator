"use client";

// * Icons
import { LogOutIcon, ChevronDown } from "lucide-react";

// * Context and Lib
import { useUser } from "@/contexts/user-context";
import { signoutGoogle } from "@/lib/actions/logout-google";

// * Components
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Component
export const NavUser = () => {
  const { user } = useUser();
  console.log("user", user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer hover:scale-105 transition-transform duration-200"
      >
        <button className="flex items-center gap-3">
          <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
            <AvatarFallback>
              {user?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">
              {user?.name?.split(" ")[0] ?? "Guest"}
            </span>
          </div>
          <ChevronDown className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-57 rounded-lg"
        align="end"
        sideOffset={10}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 p-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-full grayscale">
              <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
              <AvatarFallback>
                {user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {user?.name || "Guest"}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {user?.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuItem className="cursor-pointer" onClick={signoutGoogle}>
          <LogOutIcon />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
