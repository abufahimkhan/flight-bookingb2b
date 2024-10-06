"use client";

import { KeepTable } from "@/components/keep-react/KeepTable";
interface TransactionInterface {
  submitted_date: string;
  depositeType: string;
  tnxNumber: string;
  reference: string;
  status: string;
  amount: string;
  bankCharge: string;
  topupAmount: string;
  image: string;
}
const TransactionData: TransactionInterface[] = [
  {
    submitted_date: "21-08-2024 08:18",
    depositeType: "Bank Deposite",
    tnxNumber: "MR0185452454645454",
    reference: "123",
    status: "Approved",
    amount: "BDT 10,000",
    bankCharge: "BDT 0",
    topupAmount: "BDT 10,000",
    image: "img_url",
  },
  {
    submitted_date: "21-08-2024 08:18",
    depositeType: "Bank Deposite",
    tnxNumber: "MR0185452454645454",
    reference: "456",
    status: "Approved",
    amount: "BDT 10,000",
    bankCharge: "BDT 0",
    topupAmount: "BDT 10,000",
    image: "img_url",
  },
  {
    submitted_date: "21-08-2024 08:18",
    depositeType: "Bank Deposite",
    tnxNumber: "MR0185452454645454",
    reference: "123",
    status: "Approved",
    amount: "BDT 10,000",
    bankCharge: "BDT 0",
    topupAmount: "BDT 10,000",
    image: "img_url",
  },
  {
    submitted_date: "21-08-2024 08:18",
    depositeType: "Bank Deposite",
    tnxNumber: "MR0185452454645454",
    reference: "123",
    status: "Approved",
    amount: "BDT 10,000",
    bankCharge: "BDT 0",
    topupAmount: "BDT 10,000",
    image: "img_url",
  },
];
const Transactions = () => {
  const TransactionFields: string[] = [
    "Submitted Date",
    "Deposite Type",
    "Tnx Number",
    "Reference",
    "Status",
    "Amount",
    "Bank Charge",
    "Topup Amount",
    "image",
  ];
  return (
    <div className="mx-5">
      <KeepTable
        tableTitle="Transactions"
        headerItems={TransactionFields}
        data={TransactionData}
      />
    </div>
  );
};

export default Transactions;
