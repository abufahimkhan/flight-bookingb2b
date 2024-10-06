"use client";
import { useState } from "react";
import Select from "react-select";
import BankDeposit from "./deposit-types/BankDeposit";
import BankTranfar from "./deposit-types/BankTranfar";
import Bkash from "./deposit-types/Bkash";
import Cash from "./deposit-types/Cash";
import Cheque from "./deposit-types/Cheque";
import Nagad from "./deposit-types/Nagad";

type DepositType =
  | "cheque"
  | "bank_deposit"
  | "bank_transfer"
  | "cash"
  | "bkash"
  | "nagad";

type OptionType = { value: DepositType; label: string };

const SubmitRequestForm = () => {
  const depositTypeOptions: OptionType[] = [
    { value: "cheque", label: "Cheque" },
    { value: "bank_deposit", label: "Bank Deposit" },
    { value: "bank_transfer", label: "Bank Transfer" },
    { value: "cash", label: "Cash" },
    { value: "bkash", label: "Bkash" },
    { value: "nagad", label: "Nagad" },
  ];
  const [depositType, setDepositType] = useState<OptionType | null>(
    depositTypeOptions[3]
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col w-1/3 ">
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
          onChange={(selectedOption) => {
            console.log("selectedOption", selectedOption);
            setDepositType(selectedOption);
          }}
          className="border-gray-300 text-gray-700 rounded-md shadow-sm"
        />
      </div>

      {depositType?.value === "cheque" && <Cheque />}
      {depositType?.value === "bank_deposit" && <BankDeposit />}
      {depositType?.value === "bank_transfer" && <BankTranfar />}
      {depositType?.value === "cash" && <Cash />}
      {depositType?.value === "bkash" && <Bkash />}
      {depositType?.value === "nagad" && <Nagad />}
    </div>
  );
};

export default SubmitRequestForm;
