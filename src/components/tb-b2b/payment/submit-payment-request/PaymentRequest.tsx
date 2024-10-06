"use client";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import Select from "react-select";
import { Button, Input } from "keep-react";

const PaymentRequest = () => {
  const [depositType, setDepositType] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [bankAccount, setBankAccount] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [depositDate, setDepositDate] = useState("");
  const [reference, setReference] = useState("");
  const [amount, setAmount] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const depositTypeOptions = [
    { value: "Cheque", label: "Cheque" },
    { value: "Bank Deposit", label: "Bank Deposit" },
    { value: "Bank Transfer", label: "Bank Transfer" },
    { value: "Cash", label: "Cash" },
    { value: "Bkash", label: "Bkash" },
    { value: "Nagad", label: "Nagad" },
  ];

  // Options for bank accounts
  const bankAccountOptions = [
    {
      value: "147-110-0024729",
      label: "Dutch Bangla Bank Ltd., Bashundhara, Dhaka",
    },
    {
      value: "1403664894001",
      label: "The City Bank Ltd., Gulshan Avenue, Dhaka",
    },
    { value: "2055206120001", label: "BRAC Bank, Natunbazar Branch" },
    { value: "0901101000002246", label: "UCBL Bank, Banani Branch" },
    { value: "3311901025114", label: "Pubali Bank PLC, Banani Branch" },
    { value: "01-4976936-01", label: "Standard Chartered Bank, Gulshan" },
  ];

  return (
    <form
      onSubmit={handleFormSubmit}
      className="grid grid-cols-1 gap-4 lg:grid-cols-2"
    >
      {/* Deposit Type */}
      <div className="flex flex-col">
        <label
          htmlFor="depositType"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Deposit Type*
        </label>
        <Select
          id="depositType"
          options={depositTypeOptions}
          value={depositType}
          onChange={(selectedOption) => setDepositType(selectedOption)}
          className="border-gray-300 text-gray-700 rounded-md shadow-sm"
        />
      </div>

      {/* TripBeyond Bank A/C */}
      <div className="flex flex-col">
        <label
          htmlFor="bankAccount"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          TripBeyond Bank A/C*
        </label>
        <Select
          id="bankAccount"
          options={bankAccountOptions}
          value={bankAccount}
          onChange={(selectedOption) => setBankAccount(selectedOption)}
          className="border-gray-300 text-gray-700 rounded-md shadow-sm"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="bankAccount"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          TripBeyond Bank A/C*
        </label>
        <Select
          id="bankAccount"
          options={bankAccountOptions}
          value={bankAccount}
          onChange={(selectedOption) => setBankAccount(selectedOption)}
          className="border-gray-300 text-gray-700 rounded-md shadow-sm"
        />
      </div>

      {/* Deposited Date */}
      <div className="flex flex-col">
        <label
          htmlFor="depositDate"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Deposited Date*
        </label>
        <Input
          type="date"
          id="depositDate"
          value={depositDate}
          onChange={(e) => setDepositDate(e.target.value)}
          className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
        />
      </div>

      {/* Reference */}
      <div className="flex flex-col">
        <label
          htmlFor="reference"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Reference*
        </label>
        <Input
          type="text"
          id="reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          placeholder="Enter reference number"
        />
      </div>

      {/* Amount */}
      <div className="flex flex-col">
        <label
          htmlFor="amount"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Amount*
        </label>
        <Input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          placeholder="Enter amount"
        />
      </div>

      {/* Attachment */}
      <div className="flex flex-col">
        <label
          htmlFor="attachment"
          className="text-gray-600 mb-2 text-sm font-semibold"
        >
          Attachment (Choose file)
        </label>
        <Input
          type="file"
          id="attachment"
          onChange={() => { }} // Handle file upload here
          className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
        />
      </div>

      {/* Empty placeholder to balance the grid */}
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

export default PaymentRequest;
