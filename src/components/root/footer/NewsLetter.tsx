"use client";
import { Button } from "keep-react";
import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // write server side logic in here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-2 *:col-span-1 "
    >
      <p className="!col-span-2">Newsletter</p>
      <input
        placeholder="Your Email"
        value={email}
        className="rounded-lg px-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" className="w-28 h-full rounded-3xl text-black">
        subscribe
      </Button>
    </form>
  );
};

export default NewsLetter;
