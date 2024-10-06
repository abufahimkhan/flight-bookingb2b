"use client";
import FormFooter from "@/components/common/form-element/FormFooter";
import KeepHeading from "@/components/keep-react/KeepHeading";
import { IconAuthentication } from "@/interfaces/icons";
import { Button, ModalClose, toast } from "keep-react";
import { debounce } from "lodash";
import { useState } from "react";

export const UserSignin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = debounce(() => {
    //write server side logic in here
    toast.success("user logged in ");
  }, 300);

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-5"
    >
      <KeepHeading level="secondary" className="text-center">
        Sign In
      </KeepHeading>

      <input
        className="user-signup-input text-center"
        placeholder="Email ID"
        type="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <input
        className="user-signup-input text-center"
        placeholder="Password"
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />
      <ModalClose asChild>
        <Button type="submit" className="rounded-2xl text-black font-bold">
          Enter
        </Button>
      </ModalClose>
      <FormFooter
        text="Not an user?"
        linkText="Register"
        linkHref="/user/signup"
        forgetPassHref="/forgetpassword"
      />
      <div className="text-center">
        <p>Or</p>
      </div>

      <div className="flex flex-col gap-3 *:flex-1 *:gap-2">
        <Button className="bg-blue-500 rounded-2xl">
          <IconAuthentication.Facebook />
          Log In with Facebook
        </Button>

        <Button color="error" className="rounded-2xl">
          <IconAuthentication.Google />
          Log In with Google
        </Button>
      </div>
    </form>
  );
};
