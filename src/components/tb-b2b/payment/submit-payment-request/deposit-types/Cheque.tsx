"use client";
import DateInput from "@/components/common/inputs/DateInput";
import { UploadFile } from "@/components/common/inputs/UploadFile";
import KeepInput from "@/components/keep-react/KeepInput";
import { Button } from "keep-react";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import Select from "react-select";

const Cheque = () => {
    const [bankAccount, setBankAccount] = useState<{
        value: string;
        label: string;
    } | null>(null);
    const [depositDate, setDepositDate] = useState(new Date());
    const [reference, setReference] = useState("");
    const [amount, setAmount] = useState("");
    const [chequeNo, setChequeNo] = useState("");
    const [chequeBank, setChequeBank] = useState("");

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };
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
            <div className="flex flex-col">
                <label
                    htmlFor="reference"
                    className="text-gray-600 mb-2 text-sm font-semibold"
                >
                    Cheque No*
                </label>
                <KeepInput
                    type="text"
                    id="chequeNo"
                    value={chequeNo}
                    onChange={(e) => setChequeNo(e.target.value)}
                    className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
                    placeholder="Enter reference number"
                />
            </div>
            <div className="flex flex-col">
                <label
                    htmlFor="reference"
                    className="text-gray-600 mb-2 text-sm font-semibold"
                >
                    Cheque Bank*
                </label>
                <KeepInput
                    type="text"
                    id="chequeBank"
                    value={chequeBank}
                    onChange={(e) => setChequeBank(e.target.value)}
                    className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
                    placeholder="Enter reference number"
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

export default Cheque;
