"use client"
import { KeepTable } from '@/components/keep-react/KeepTable';

interface FlightIssuedInterface {
    issue_date: string;
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    ticket_number: string;
    total_price: string;
    status: string;
    action: string;
};

const FlightIssuedData: FlightIssuedInterface[] = [
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836991",
        passenger_name: "James Lee",
        flight_date: "27-08-2024 10:15",
        route: "LAX-SFO",
        pnr: "QWE123",
        ticket_number: "7792409146161",
        total_price: "450.99",
        status: "Ticketed",
        action: "VT IN RS",
    },
    {
        issue_date: "22-08-2024 10:25",
        booking_date: "21-08-2024 09:30",
        booking_id: "TB638597297731693821",
        passenger_name: "Olivia Green",
        flight_date: "2024-09-10",
        route: "ORD-MIA",
        pnr: "HJU568",
        ticket_number: "7792409146162",
        total_price: "850.00",
        status: "Ticketed",
        action: "VT IN RS",
    },
];


const Issued = () => {
    const FlightIssuedFields: string[] = [
        'Issue Date',
        'Booking Date',
        'Booking ID',
        'Passenger Name',
        'Flight Date',
        'Route',
        'PNR',
        'Ticket Number',
        'Total Price',
        'Status',
        'Action',
    ];
    return (
        <div className="mx-5">
            <KeepTable
                tableTitle="Flight Issued"
                headerItems={FlightIssuedFields}
                data={FlightIssuedData}
            />
        </div>

    )
}

export default Issued