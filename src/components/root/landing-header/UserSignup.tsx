"use client";
import { IconAuthentication } from "@/interfaces/icons";
import { Button, toast } from "keep-react";
import { debounce } from "lodash";
import { useState } from "react";

const UserSignup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = debounce(() => {
    if (user.password !== user.rePassword) {
      toast.warning("Password is not matched");
    }
    toast.success("user signup done !!");
    // write server side logic in here
  }, 300);

  return (
    <div className="flex  items-center justify-center gap-5 overflow-hidden">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-3"
      >
        <h1 className="text-heading-6 font-semibold capitalize">
          User register
        </h1>

        <div className="flex gap-3">
          <input
            className="user-signup-input capitalize"
            placeholder=" first name"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            required
          />
          <input
            className="user-signup-input capitalize"
            placeholder=" last name"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>

        <input
          className="user-signup-input capitalize"
          placeholder=" email id"
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <input
          className="user-signup-input capitalize"
          placeholder=" password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <input
          className="user-signup-input capitalize"
          placeholder="Re enter password"
          type="password"
          onChange={(e) => setUser({ ...user, rePassword: e.target.value })}
          required
        />

        <Button
          className="w-full py-6 rounded-2xl text-lg font-semibold text-black"
          type="submit"
        >
          Register
        </Button>
      </form>

      <div>Or</div>

      <div className="flex flex-col gap-3 *:flex-1 *:gap-2">
        <Button className="bg-blue-500 rounded-2xl py-3 px-10">
          <IconAuthentication.Facebook size={28} className="mr-2" />
          Log In with Facebook
        </Button>

        <Button color="error" className=" rounded-2xl py-3 px-10">
          <IconAuthentication.Google size={28} className="mr-2" />
          Log In with Google
        </Button>
      </div>
    </div>
  );
};

export default UserSignup;
