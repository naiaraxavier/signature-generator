"use server";

import { signOut } from "@/auth";

export async function signoutGoogle() {
  await signOut({ redirectTo: "/auth/signin" });
}
