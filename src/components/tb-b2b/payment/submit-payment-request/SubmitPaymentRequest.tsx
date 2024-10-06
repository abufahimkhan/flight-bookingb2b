"use client"
import { TabContent, TabItem, TabList, Tabs } from "keep-react";
import React from 'react'
import { AiFillAppstore, AiOutlineBank } from "react-icons/ai";
import { BsBank, BsFillCreditCardFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { nanoid } from 'nanoid';
import SubmitRequestForm from './SubmitRequestForm';
import Transactions from './Transactions';
import MyBankAccount from './MyBankAccount';
import BankAccounts from './BankAccounts';
import OnlineDeposit from './OnlineDeposit';
type MenuItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
  className: string;
};
const tabs: MenuItem[] = [
  { label: "Submit Request", value: "submitrequest", icon: <AiFillAppstore />, className: "flex items-center gap-2 rounded-md bg-blue-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-blue-700" },
  { label: "Transaction", value: "transaction", icon: <RiMoneyDollarCircleFill />, className: "flex items-center gap-2 rounded-md bg-green-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-green-700" },
  { label: "My Bank Accounts", value: "mybankaccount", icon: <BsBank />, className: "flex items-center gap-2 rounded-md bg-yellow-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-yellow-700" },
  { label: "Bank Accounts", value: "bankaccount", icon: <AiOutlineBank />, className: "flex items-center gap-2 rounded-md bg-slate-400 p-2 text-sm text-white shadow-md transition-colors hover:bg-gray-700" },
  { label: "Online Deposit", value: "onlinedeposit", icon: <BsFillCreditCardFill />, className: "flex items-center gap-2 rounded-md bg-orange-600 p-2 text-sm text-white shadow-md transition-colors hover:bg-orange-700" },
];

const SubmitPaymentRequest = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Tabs defaultActive="submitrequest" className="mx-auto w-full">
        <TabList className="flex items-center justify-center gap-4">
          {tabs.map((tab) => (
            <TabItem value={tab.value} key={nanoid()} className={tab.className}>
              {tab.icon}
              {tab.label}
            </TabItem>
          ))}
        </TabList>

        <div className="bg-white m-5 p-7 rounded-lg">
          <TabContent value="submitrequest">
            <SubmitRequestForm />
          </TabContent>

          <TabContent value="transaction">
            <Transactions />
          </TabContent>

          <TabContent value="mybankaccount">
            <MyBankAccount />
          </TabContent>

          <TabContent value="bankaccount">
            <BankAccounts />
          </TabContent>

          <TabContent value="onlinedeposit">
            <OnlineDeposit />
          </TabContent>
        </div>
      </Tabs>
    </div>
  )
}

export default SubmitPaymentRequest