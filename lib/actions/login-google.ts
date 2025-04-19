"use server";

import { signIn } from "next-auth/react";

export async function signinWithGoogle() {
  await signIn("google");
}
