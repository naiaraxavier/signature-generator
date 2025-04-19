"use server";

import { signIn } from "@/auth";

export async function signinWithGoogle() {
  await signIn("google", { redirectTo: "/" });
}
