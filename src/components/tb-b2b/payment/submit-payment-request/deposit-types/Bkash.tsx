"use client";
import { UploadFile } from "@/components/common/inputs/UploadFile";
import KeepInput from "@/components/keep-react/KeepInput";
import { Button } from "keep-react";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const Bkash = () => {
    const [depositDate, setDepositDate] = useState("");
    const [amount, setAmount] = useState("");
    const [transaction, setTransaction] = useState("");
    const [gatewayFee, setGatewayFee] = useState("");
    const [payableAmount, setPayableAmount] = useState("");

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
                    Transaction id*
                </label>
                <KeepInput
                    type="number"
                    id="transaction"
                    value={transaction}
                    onChange={(e) => setTransaction(e.target.value)}
                    className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
                    placeholder="Enter amount"
                />
            </div>
            <div className="flex flex-col">
                <label
                    htmlFor="amount"
                    className="text-gray-600 mb-2 text-sm font-semibold"
                >
                    Gateway Fee*
                </label>
                <KeepInput
                    type="number"
                    id="gatewayFee"
                    value={gatewayFee}
                    onChange={(e) => setGatewayFee(e.target.value)}
                    className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
                    placeholder="Enter amount"
                />
            </div>

            <div className="flex flex-col">
                <label
                    htmlFor="depositDate"
                    className="text-gray-600 mb-2 text-sm font-semibold"
                >
                    Deposited Date*
                </label>
                <KeepInput
                    type="date"
                    id="depositDate"
                    value={depositDate}
                    onChange={(e) => setDepositDate(e.target.value)}
                    className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
                />
            </div>

            <div className="flex flex-col">
                <label
                    htmlFor="reference"
                    className="text-gray-600 mb-2 text-sm font-semibold"
                >
                    Payable Amount*
                </label>
                <KeepInput
                    type="text"
                    id="payableAmount"
                    value={payableAmount}
                    onChange={(e) => setPayableAmount(e.target.value)}
                    className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
                    placeholder="Enter reference number"
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

export default Bkash;
