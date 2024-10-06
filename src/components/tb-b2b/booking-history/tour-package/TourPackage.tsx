"use client"
import { KeepTable } from "@/components/keep-react/KeepTable";

interface TourPackageHistoryInterface {
    category: string;
    created_at: string;
    request_status: string;
    actions: string;
}
const TourPackageHistoryData: TourPackageHistoryInterface[] = [
    {
        category: 'Luxury Tour',
        created_at: '2024-07-25',
        request_status: 'Pending',
        actions: 'View/Edit/Delete',
    },
    {
        category: 'Luxury Tour',
        created_at: '2024-07-24',
        request_status: 'Pending',
        actions: 'View/Edit/Delete',
    },
    {
        category: 'Luxury Tour',
        created_at: '2024-07-22',
        request_status: 'Pending',
        actions: 'View/Edit/Delete',
    },
];
const TourPackage = () => {
    const TourPackageHistoryFields: string[] = [
        'Category',
        'Created At',
        'Request Status',
        'Actions',
    ];
    return (
        <KeepTable
            tableTitle="Tour Packages"
            headerItems={TourPackageHistoryFields}
            data={TourPackageHistoryData}
        />
    );
};

export default TourPackage;

