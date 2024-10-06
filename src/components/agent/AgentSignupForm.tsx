"use client";
import React, { useState } from "react";
import KeepInput from "../keep-react/KeepInput";
import { Button } from "keep-react";
import Select from "react-select";
import Link from "next/link";
import Logo from "../common/Logo";
import FormFooter from "../common/form-element/FormFooter";

const AgentSignup = () => {
  const [agent, setAgent] = useState({
    orgType: "",
    orgName: "",
    orgAddress: "",
    country: "",
    state: "",
    city: "",
    phoneNumber: "",
    zipCode: "",
    docs: "",
  });

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
  });

  const organizationOptions = [
    { value: "non-profit", label: "Non-Profit" },
    { value: "for-profit", label: "For-Profit" },
  ];

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
  ];

  const stateOptions = [
    { value: "ny", label: "New York" },
    { value: "ca", label: "California" },
  ];

  const cityOptions = [
    { value: "nyc", label: "New York City" },
    { value: "la", label: "Los Angeles" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Agent:", agent);
    console.log("User:", user);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-300 via-orange-300 to-indigo-300 px-4">
      <div className="flex flex-col items-center gap-5 justify-center text-center px-5 py-5">
        <Link href="/">
          <Logo />
        </Link>
        <h1 className="text-lg font-semibold text-gray-600">
          Agent Registration
        </h1>
        <p className="text-white text-md font-normal">
          Register your agency and start collaborating with us!
        </p>
      </div>

      <form
        className="bg-white w-full max-w-5xl rounded-[50px] shadow-lg p-12  flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center">
          Agency Registration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label htmlFor="s1-2">Type of Organization</label>
            <Select
              options={organizationOptions}
              value={organizationOptions.find(
                (option) => option.value === agent.orgType
              )}
              onChange={(selectedOption) =>
                setAgent({ ...agent, orgType: selectedOption?.value ?? "" })
              }
              className="border-gray-300 text-gray-700 rounded-md shadow-sm"
            />
          </div>

          <KeepInput
            label="Name of Organization"
            placeholder="Name of Org."
            value={agent.orgName}
            onChange={(value) => setAgent({ ...agent, orgName: value })}
          />
        </div>

        <h3 className="text-lg font-semibold">Enter contact details:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KeepInput
            label="First Name"
            placeholder="Enter First name"
            value={user.firstName}
            onChange={(value) => setUser({ ...user, firstName: value })}
          />
          <KeepInput
            label="Last Name"
            placeholder="Enter Last name"
            value={user.lastName}
            onChange={(value) => setUser({ ...user, lastName: value })}
          />
          <KeepInput
            label="Email Address"
            type="email"
            placeholder="Enter your Email"
            value={user.email}
            onChange={(value) => setUser({ ...user, email: value })}
          />
          <KeepInput
            label="Phone Number"
            placeholder="Your phone number"
            value={agent.phoneNumber}
            onChange={(value) => setAgent({ ...agent, phoneNumber: value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label htmlFor="s1-2">Country</label>
            <Select
              options={countryOptions}
              value={countryOptions.find(
                (option) => option.value === agent.country
              )}
              onChange={(selectedOption) =>
                setAgent({ ...agent, country: selectedOption?.value ?? "" })
              }
              className="border-gray-300 text-gray-700 rounded-md shadow-sm"
            />
          </div>

          <div className="w-full">
            <label htmlFor="s1-2">State</label>
            <Select
              options={stateOptions}
              value={stateOptions.find(
                (option) => option.value === agent.state
              )}
              onChange={(selectedOption) =>
                setAgent({ ...agent, state: selectedOption?.value ?? "" })
              }
              className="border-gray-300 text-gray-700 rounded-md shadow-sm"
            />
          </div>

          <div className="w-full">
            <label htmlFor="s1-2">City/Town</label>
            <Select
              options={cityOptions}
              value={cityOptions.find((option) => option.value === agent.city)}
              onChange={(selectedOption) =>
                setAgent({ ...agent, city: selectedOption?.value ?? "" })
              }
              className="border-gray-300 text-gray-700 rounded-md shadow-sm"
            />
          </div>

          <KeepInput
            label="Address"
            placeholder="Your address.."
            value={agent.orgAddress}
            onChange={(value) => setAgent({ ...agent, orgAddress: value })}
          />

          <KeepInput
            label="Zip / Postal Code"
            placeholder="Enter Zip / Postal Code"
            value={agent.zipCode}
            onChange={(value) => setAgent({ ...agent, zipCode: value })}
          />
        </div>

        <div className="text-sm text-gray-600">
          By creating an account you are agreeing to our
          <Link href="/terms-condition" className="ml-2 text-blue-500">
            Terms & Conditions
          </Link>
        </div>

        <div className="flex justify-center mt-4">
          <Button
            type="submit"
            className="bg-primary-main hover:shadow-2xl text-white font-semibold py-2 px-4 rounded-full"
          >
            Submit
          </Button>
        </div>

        {/* Add FormFooter component */}
        <FormFooter
          text="Not an agent?"
          linkText="Register"
          linkHref="/signup"
          forgetPassHref="/forgot-password"
        />
      </form>
    </div>
  );
};

export default AgentSignup;
