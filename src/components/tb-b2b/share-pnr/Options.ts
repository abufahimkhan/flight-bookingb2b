export interface Supplier {
  id: string;
  option: string;
}
//Options as object
export const SupplierOptions: Supplier[] = [
  { id: 'galileo', option: 'Galileo' },
  { id: 'sabre', option: 'Sabre' },
  { id: 'amadeus', option: 'Amadeus' },
]