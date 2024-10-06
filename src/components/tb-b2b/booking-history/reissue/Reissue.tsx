"use client";

import { KeepTable } from "@/components/keep-react/KeepTable";

interface ReissueHistoryInterface {
    pnr: string;
    airlines_pnr: string;
    requested_by: string;
    void_search_id: string;
    booking_code: string;
    status: string;
    account_status: string;
    created_at: string;
    details: string;
}
const ReissueHistoryData: ReissueHistoryInterface[] = [
    {
        pnr: "ABC123",
        airlines_pnr: "XYZ456",
        requested_by: "John Doe",
        void_search_id: "V001",
        booking_code: "BOOK789",
        status: "Confirmed",
        account_status: "Active",
        created_at: "2024-09-18T10:30:00Z",
        details: "Round-trip flight from New York to Los Angeles.",
    },
    {
        pnr: "DEF456",
        airlines_pnr: "LMN789",
        requested_by: "Jane Smith",
        void_search_id: "V002",
        booking_code: "BOOK123",
        status: "Pending",
        account_status: "Pending",
        created_at: "2024-09-18T12:45:00Z",
        details: "One-way flight from Chicago to Miami.",
    },
    {
        pnr: "GHI789",
        airlines_pnr: "OPQ123",
        requested_by: "Robert Johnson",
        void_search_id: "V003",
        booking_code: "BOOK456",
        status: "Cancelled",
        account_status: "Inactive",
        created_at: "2024-09-17T09:15:00Z",
        details: "Business class flight from San Francisco to Tokyo.",
    },
    {
        pnr: "JKL012",
        airlines_pnr: "RST345",
        requested_by: "Emily Davis",
        void_search_id: "V004",
        booking_code: "BOOK678",
        status: "Void",
        account_status: "Void",
        created_at: "2024-09-16T08:00:00Z",
        details: "Economy class flight from Dallas to Paris.",
    },
];

const Reissue = () => {
    const ReissueHistoryFields: string[] = [
        "PNR",
        "Airlines PNR",
        "Requested By",
        "Void Search ID",
        "Booking Code",
        "Status",
        "Account Status",
        "Created At",
        "Details",
    ];
    return (
        <div className="mx-5">
            <KeepTable
                tableTitle="Reissues"
                headerItems={ReissueHistoryFields}
                data={ReissueHistoryData}
            />
        </div>
    );
};

export default Reissue;
