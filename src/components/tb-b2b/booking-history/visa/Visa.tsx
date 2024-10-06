"use client"
import { KeepTable } from "@/components/keep-react/KeepTable";

interface VisaHistoryInterface {
    booked_by: string;
    booking_code: string;
    destination_country: string;
    visa_type: string;
    entry_date: string;
    exit_date: string;
    total_amount: string;
    payment_status: string;
    visa_status: string;
    booking_date: string;
    traveller_country: string;
}
const VisaHistoryData: VisaHistoryInterface[] = [
    {
        booked_by: 'Sarah Connor',
        booking_code: 'VISA987654',
        destination_country: 'Canada',
        visa_type: 'Tourist Visa',
        entry_date: '2024-08-20',
        exit_date: '2024-09-20',
        total_amount: '150 USD',
        payment_status: 'Paid',
        visa_status: 'Approved',
        booking_date: '2024-07-30',
        traveller_country: 'USA',
    },
    {
        booked_by: 'Sarah Connors',
        booking_code: 'VISA987654',
        destination_country: 'Canada',
        visa_type: 'Tourist Visa',
        entry_date: '2024-08-20',
        exit_date: '2024-09-20',
        total_amount: '150 USD',
        payment_status: 'Paid',
        visa_status: 'Approved',
        booking_date: '2024-07-30',
        traveller_country: 'USA',
    },
];
const Visa = () => {
    const VisaHistoryFields: string[] = [
        'Booked By',
        'Booking Code',
        'Destination Country',
        'Visa Type',
        'Entry Date',
        'Exit Date',
        'Total Amount',
        'Payment Status',
        'Visa Status',
        'Booking Date',
        'Traveller Country',
    ];
    return (
        <KeepTable
            tableTitle="Visa"
            headerItems={VisaHistoryFields}
            data={VisaHistoryData}
        />
    );
};

export default Visa;

