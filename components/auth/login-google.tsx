import Image from "next/image";
import { signIn } from "@/auth";
import { Button } from "../ui/button";

export const LoginGoogle = () => {
  const signin = async () => {
    "use server";
    await signIn("google");
  };

  return (
    <>
      <form action={signin}>
        <Button type="submit">
          <Image
            width={20}
            height={20}
            alt="google"
            className="mr-2"
            src="/img/google.svg"
          />
          Acessar com o Google
        </Button>
      </form>

      <span className="mt-3 text-[14px]">
        * Somente colaboradores do AssinaID
      </span>
    </>
  );
};
