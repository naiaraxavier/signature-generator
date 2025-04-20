// * Next
import Image from "next/image";

// * Lib
import { signinWithGoogle } from "@/lib/actions/login-google";

// * Components
import { Button } from "@/components//ui/button";

// Component
export const LoginGoogle = () => {
  return (
    <>
      <form
        action={signinWithGoogle}
        className="flex flex-col items-center gap-2"
      >
        <Button type="submit" size="lg" className="cursor-pointer">
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
          <span className="text-red-400">*</span> Somente colaboradores do
          AssineID
        </span>
      </form>
    </>
  );
};
