'use client';

import { useState } from 'react';
import { Supplier, SupplierOptions } from './Options';
import { IconSharePnr } from '@/interfaces/icons';

const SharePNR = () => {
    const [supplier, setSupplier] = useState<Supplier>(SupplierOptions[0]);
    const [pnr, setPnr] = useState<string>('');

    // Retrieves the selected supplier's, Finds the corresponding supplier, Updates the supplier state
    const handleSupplierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSupplier = SupplierOptions.find(
            (supplier: Supplier) => supplier.id === e.target.value
        );
        if (selectedSupplier) {
            setSupplier(selectedSupplier);
        }
    };

    // For submit button 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here. Backend inplementation logic here
        console.log('Supplier:', supplier);
        console.log('PNR:', pnr);
    };

    return (
        <div className="flex flex-col items-center justify-center p-5 lg:p-12 bg-white shadow-lg rounded-md w-full max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {/* Used Icon Object from @/icons  */}
                <IconSharePnr.Plane className="inline-block text-blue-400 mr-2" />
                Please Find the Shared PNR Code
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex flex-col w-full">
                    <label htmlFor="supplier" className="text-sm lg:text-lg font-semibold text-gray-600 mb-2">
                        Supplier
                    </label>
                    <select
                        id="supplier"
                        value={supplier.id}
                        onChange={handleSupplierChange}
                        className="p-3 border-2 border-slate-300 focus:outline-none rounded-md shadow-sm text-gray-700 w-full"
                    >
                        {/* Used nanoid package as global key */}
                        {SupplierOptions.map((nanoid) => (
                            <option key={nanoid.id} value={nanoid.id}>
                                {nanoid.option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="pnr" className="text-sm lg:text-lg font-semibold text-gray-600 mb-2">
                        PNR
                    </label>
                    <input
                        type="text"
                        id="pnr"
                        value={pnr}
                        onChange={(e) => setPnr(e.target.value)}
                        className="p-3 border-2 border-slate-300 focus:outline-none rounded-md shadow-sm text-gray-700 w-full"
                        placeholder="Enter PNR code"
                    />
                </div>
                <div className="flex items-end w-full sm:w-auto">
                    <button
                        type="submit"
                        className="bg-blue-400 text-white lg:p-4 p-4 lg:mt-9 font-bold rounded-md shadow-md flex text-center gap-2 text-sm hover:bg-blue-700 transition-colors w-fit"
                    >
                        Fetch
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SharePNR;
