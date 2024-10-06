"use client"

import { KeepTable } from "@/components/keep-react/KeepTable";

interface AddPassengerInterface {
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
const AddPassengerData: AddPassengerInterface[] = [
    {
        sl: 1,
        name: "Ms. Maria Thompson (ADT)",
        email: "maria.thompson@example.com",
        dob: "15-Aug-1985",
        gender: "Female",
        passport_number: "X12345678",
        passport_expire_date: "10-Oct-2030",
        passport_copy: "N/A",
        visa_copy: "N/A",
        action: "Edit/Delete",
    },
    {
        sl: 2,
        name: "Mr. Jacob Williams (ADT)",
        email: "jacob.williams@example.com",
        dob: "30-Dec-1990",
        gender: "Male",
        passport_number: "Y98765432",
        passport_expire_date: "15-Nov-2035",
        passport_copy: "N/A",
        visa_copy: "N/A",
        action: "Edit/Delete",
    },
];
const AddPassenger = () => {
    const AddPassengerFields: string[] = [
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
            headerItems={AddPassengerFields}
            data={AddPassengerData}
        />
    );
};

export default AddPassenger;
