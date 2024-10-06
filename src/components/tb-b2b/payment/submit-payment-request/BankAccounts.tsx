"use client";

import { KeepTable } from "@/components/keep-react/KeepTable";

interface BankListInterface {
  sl: number;
  name: string;
  location: string;
  account_no: string;
  routing_no: string;
  account_name: string;
  payment_changes: string;
}
const BankListData: BankListInterface[] = [
  {
    sl: 1,
    name: "Mr. David Miller (ADT)",
    location: "Gulshan Head office, Dhaka",
    account_no: "01193548965",
    routing_no: "253564679",
    account_name: "TRIP BEYOND",
    payment_changes:
      "Inter City Change/applicable for cash deposits on Totla ammount",
  },
  {
    sl: 2,
    name: "Mr. David Miller (ADT)",
    location: "Gulshan Head office, Dhaka",
    account_no: "01193548962",
    routing_no: "253564679",
    account_name: "TRIP BEYOND",
    payment_changes:
      "Inter City Change/applicable for cash deposits on Totla ammount",
  },
];
const BankAccounts = () => {
  const BankListFields: string[] = [
    " sl",
    "name",
    "location",
    "account_no",
    " routing_no",
    "account_name",
    "payment_changes",
  ];
  return (
    <div className="mx-5">
      <KeepTable
        tableTitle="Bank Accounts List"
        headerItems={BankListFields}
        data={BankListData}
      />
    </div>
  );
};

export default BankAccounts;
