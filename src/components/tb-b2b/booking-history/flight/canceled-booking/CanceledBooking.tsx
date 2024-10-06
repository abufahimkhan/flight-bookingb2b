"use client"
import { KeepTable } from '@/components/keep-react/KeepTable'
import React from 'react'

interface CancelledBookingInterface {
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    total_price: string;
    status: string;
    action: string;
}
export const CancelledBookingData: CancelledBookingInterface[] = [
    {
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836995",
        passenger_name: "Mason Harris",
        flight_date: "27-08-2024 10:15",
        route: "MIA-ORD",
        pnr: "CVR983",
        total_price: "780.40",
        status: "Canceled",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693827",
        passenger_name: "Ava Martinez",
        flight_date: "2024-09-20",
        route: "SFO-LAX",
        pnr: "BFU462",
        total_price: "300.00",
        status: "Canceled",
        action: "VB RS",
    },
];

const CanceledBooking = () => {
    const CancelledBookingFields: string[] = [
        'Booking Date',
        'Booking ID',
        'Passenger Name',
        'Flight Date',
        'Route',
        'PNR',
        'Total Price',
        'Status',
        'Action',
    ];
    return (
        <div className="mx-5">
            <KeepTable
                tableTitle="Cancelled Bookings"
                headerItems={CancelledBookingFields}
                data={CancelledBookingData}
            />
        </div>
    )
}

export default CanceledBooking