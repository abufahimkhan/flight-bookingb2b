"use client"

import { KeepTable } from "@/components/keep-react/KeepTable";

interface QuickPassengerInterface {
    sl: number;
    name: string;
    email: string;
    dob: string;
    gender: string;
    passport_number: string;
    passport_expire_date: string;
    passport_copy: string;
    visa_copy: string;
    action: string;
}

const QuickPassengerData: QuickPassengerInterface[] = [
    {
        sl: 1,
        name: "Mr. David Miller (ADT)",
        email: "david.miller@example.com",
        dob: "22-Mar-1988",
        gender: "Male",
        passport_number: "B12345678",
        passport_expire_date: "01-Jan-2032",
        passport_copy: "N/A",
        visa_copy: "N/A",
        action: "Edit/Delete",
    },
    {
        sl: 2,
        name: "Ms. Emma Scott (ADT)",
        email: "emma.scott@example.com",
        dob: "10-Jul-1992",
        gender: "Female",
        passport_number: "C98765432",
        passport_expire_date: "05-Feb-2033",
        passport_copy: "N/A",
        visa_copy: "N/A",
        action: "Edit/Delete",
    },
];

const QuickPassenger = () => {
    const QuickPassengerFields: string[] = [
        'SL',
        'Name',
        'Email',
        'DOB',
        'Gender',
        'Passport Number',
        'Passport Expire Date',
        'Passport Copy',
        'Visa Copy',
        'Action',
    ];
    return (
        <KeepTable
            tableTitle="Add Passengers"
            headerItems={QuickPassengerFields}
            data={QuickPassengerData}
        />
    );
};

export default QuickPassenger;
