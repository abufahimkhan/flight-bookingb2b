"use client"
import { KeepTable } from "@/components/keep-react/KeepTable";

interface HotelHistoryInterface {
    booked_by: string;
    hotel_name: string;
    city: string;
    country: string;
    booking_id: string;
    total_price: string;
    refundable: string;
    booking_status: string;
    payment_status: string;
    payment_type: string;
    agent_confirmation_status: string;
    checkin_date: string;
    checkout_date: string;
    last_cancellation_date: string;
}
const HotelHistoryData: HotelHistoryInterface[] = [
    {
        booked_by: 'John Doe',
        hotel_name: 'Grand Hotel',
        city: 'Paris',
        country: 'France',
        booking_id: 'H123456789',
        total_price: '350 USD',
        refundable: 'Yes',
        booking_status: 'Confirmed',
        payment_status: 'Paid',
        payment_type: 'Credit Card',
        agent_confirmation_status: 'Confirmed',
        checkin_date: '2024-09-10',
        checkout_date: '2024-09-15',
        last_cancellation_date: '2024-09-01',
    },
    {
        booked_by: 'John Does',
        hotel_name: 'Grand Hotel',
        city: 'Paris',
        country: 'France',
        booking_id: 'H123456789',
        total_price: '350 USD',
        refundable: 'Yes',
        booking_status: 'Confirmed',
        payment_status: 'Paid',
        payment_type: 'Credit Card',
        agent_confirmation_status: 'Confirmed',
        checkin_date: '2024-09-10',
        checkout_date: '2024-09-15',
        last_cancellation_date: '2024-09-01',
    },
];
const Hotel = () => {
    const HotelHistoryFields: string[] = [
        'Booked By',
        'Hotel Name',
        'City',
        'Country',
        'Booking ID',
        'Total Price',
        'Refundable',
        'Booking Status',
        'Payment Status',
        'Payment Type',
        'Agent Confirmation Status',
        'Check-in Date',
        'Check-out Date',
        'Last Cancellation Date',
    ];

    return (
        <div className="mx-5">
            <KeepTable
                tableTitle="Hotel Bookings"
                headerItems={HotelHistoryFields}
                data={HotelHistoryData}
            />
        </div>

    );
};

export default Hotel;

