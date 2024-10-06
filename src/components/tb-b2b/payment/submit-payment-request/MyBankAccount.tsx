"use client";

import { KeepTable } from "@/components/keep-react/KeepTable";
interface MyBankAccountInterface {
  sl: string;
  account_name: string;
  status: string;
  account_numner: string;
  bank_name: string;
  branch_name: string;
}
const MyBankAccountData: MyBankAccountInterface[] = [
  {
    sl: "1",
    account_name: "Sazzad Alam Niloy",
    status: "Active",
    account_numner: "3411580005662",
    bank_name: "Dutch Bangla Bank PLC",
    branch_name: "Green Road",
  },
  {
    sl: "2",
    account_name: "TRIP BEYOND",
    status: "Active",
    account_numner: "05013100233939",
    bank_name: "EXIM BANK",
    branch_name: "BARISAL",
  },
  {
    sl: "3",
    account_name: "Sazzad Alam Niloy",
    status: "Active",
    account_numner: "1502923125001",
    bank_name: "CITY BANK",
    branch_name: "UTTARA",
  },
];
const MyBankAccount = () => {
  const MyBankAccountFields: string[] = [
    "SL",
    "Account Name",
    "Status",
    "Account Numner",
    "Bank Name",
    "Branch Name",
  ];
  return (
    <div className="mx-5">
      <KeepTable
        tableTitle="My Bank Account"
        headerItems={MyBankAccountFields}
        data={MyBankAccountData}
      />
    </div>
  );
};

export default MyBankAccount;
