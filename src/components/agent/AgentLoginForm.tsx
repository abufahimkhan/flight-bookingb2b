"use client";
import KeepHeading from "@/components/keep-react/KeepHeading";
import KeepInput from "@/components/keep-react/KeepInput";
import { Button, toast } from "keep-react";
import { debounce } from "lodash";
import { useState } from "react";
import Logo from "../common/Logo";
import Link from "next/link";
import FormFooter from "../common/form-element/FormFooter"; // Import the FormFooter component

export const AgentLoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = debounce(() => {
    //write server-side logic in here
    toast.success("User logged in");
  }, 300);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-300 via-orange-300 to-indigo-300 px-4">
      {/* Header with logo and useful info */}
      <div className="flex flex-col items-center gap-5 justify-center text-center mb-8">
        <Link href="/">
          <Logo />
        </Link>

        <h1 className="text-lg font-semibold text-gray-600">Welcome Back!</h1>
        <p className="text-white text-md font-normal">
          We provide the best services for our agents
        </p>
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="bg-white rounded-[50px] shadow-lg p-12 w-full max-w-md flex flex-col gap-5"
      >
        <KeepHeading level="subheading" className="text-center ">
          Agent Login
        </KeepHeading>
        <KeepInput
          required
          type="email"
          placeholder="Agent ID"
          className="rounded-2xl text-center outline-none"
          onChange={(data) => setUser({ ...user, email: data })}
        />
        <KeepInput
          required
          type="password"
          placeholder="Enter your password"
          className="rounded-2xl text-center"
          onChange={(data) => setUser({ ...user, password: data })}
        />
        <Button
          type="submit"
          className="bg-primary-main hover:shadow-2xl text-white font-semibold py-2 px-4 rounded-2xl"
        >
          Enter
        </Button>

        {/* Add FormFooter component */}
        <FormFooter
          text="Not an agent?"
          linkText="Register"
          linkHref="/agent/signup"
          forgetPassHref="/forgot-password"
        />
      </form>
    </div>
  );
};

export default AgentLoginForm;
