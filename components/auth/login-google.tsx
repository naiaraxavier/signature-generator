import Image from "next/image";
import { Button } from "../ui/button";
import { signinWithGoogle } from "@/lib/actions/login-google";

export const LoginGoogle = () => {
  return (
    <>
      <form
        action={signinWithGoogle}
        className="flex flex-col items-center gap-2"
      >
        <Button
          type="submit"
          size="lg"
          // variant="secondary"
          className="cursor-pointer"
        >
          <Image
            width={25}
            height={25}
            alt="google"
            className="mr-2"
            src="/img/google.svg"
          />
          <span className="text-[16px]">Acessar com o Google</span>
        </Button>
        <span className="mt-3 text-[14px]">
          * Somente colaboradores do AssinaID
        </span>
      </form>
    </>
  );
};
