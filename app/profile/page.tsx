import { auth, signIn, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  console.log("Session:", session);
  const user = session?.user;

  return user ? (
    <>
      <h1>Bem vindo {user?.name} </h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="p-2 border-2 bg-blue-400">Sign Out</button>
      </form>
    </>
  ) : (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </>
  );
}
