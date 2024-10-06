"use client";
import DateInput from "@/components/common/inputs/DateInput";
import { UploadFile } from "@/components/common/inputs/UploadFile";
import KeepInput from "@/components/keep-react/KeepInput";
import { Button } from "keep-react";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const Cash = () => {
  const [depositDate, setDepositDate] = useState(new Date());
  const [branch, setBranch] = useState("");

  const [reference, setReference] = useState("");
  const [amount, setAmount] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="grid grid-cols-1 gap-4 lg:grid-cols-2"
    >
      <div className="flex flex-col">
        <label
          htmlFor="amount"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Branch*
        </label>
        <KeepInput
          type="number"
          id="branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          placeholder="Branch Name"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="depositDate"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Deposited Date*
        </label>
        <DateInput date={depositDate} setDate={setDepositDate} />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="reference"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Reference*
        </label>
        <KeepInput
          type="text"
          id="reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          placeholder="Enter reference number"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="amount"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Amount*
        </label>
        <KeepInput
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          placeholder="Enter amount"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="amount"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Attachment*
        </label>
        <UploadFile />
      </div>

      <div className="lg:col-span-2"></div>

      {/* Submit Button */}
      <div className="lg:col-span-1">
        <Button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 p-3 text-sm text-white shadow-md transition-colors hover:bg-blue-700"
        >
          <FaFileUpload />
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Cash;
