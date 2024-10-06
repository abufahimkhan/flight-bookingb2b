"use client"
import { KeepTable } from "@/components/keep-react/KeepTable";

interface OnHoldInterface {
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    issue_before: string;
    total_price: string;
    status: string;
    action: string;
}

export const OnHoldData: OnHoldInterface[] = [
    {
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836999",
        passenger_name: "John Doe",
        flight_date: "27-08-2024 10:15",
        route: "DAC-DOH",
        pnr: "MZWE3B",
        issue_before: "Time Limit",
        total_price: "58,648.7",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693823",
        passenger_name: "Emily Johnson",
        flight_date: "2024-09-11",
        route: "SPD-DAC",
        pnr: "FRK234",
        issue_before: "Time Limit",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 12:00",
        booking_id: "TB638597297731693824",
        passenger_name: "Michael Smith",
        flight_date: "2024-09-12",
        route: "JFK-LAX",
        pnr: "PLK582",
        issue_before: "Time Limit",
        total_price: "15,732.50",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 13:20",
        booking_id: "TB638597297731693825",
        passenger_name: "Sarah Williams",
        flight_date: "2024-09-13",
        route: "LHR-JFK",
        pnr: "GTD896",
        issue_before: "Time Limit",
        total_price: "12,483.60",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 14:45",
        booking_id: "TB638597297731693826",
        passenger_name: "David Brown",
        flight_date: "2024-09-14",
        route: "CDG-SYD",
        pnr: "JHY542",
        issue_before: "Time Limit",
        total_price: "9,564.30",
        status: "On Hold",
        action: "VB RS",
    },
];
const OnHold = () => {
    const OnHoldFields: string[] = [
        'Booking Date',
        'Booking ID',
        'Passenger Name',
        'Flight Date',
        'Route',
        'PNR',
        'Issue Before',
        'Total Price',
        'Status',
        'Action',
    ];
    return (
        <div className="mx-5">
            <KeepTable
                tableTitle="On Hold"
                headerItems={OnHoldFields}
                data={OnHoldData}
            />
        </div>

    );
};

export default OnHold;
