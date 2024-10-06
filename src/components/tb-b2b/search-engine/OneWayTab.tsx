"use client";
import formatDate from "@/utils/formatDate";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";

import PickDate from "@/components/common/flight-search/PickDate";
import FlightInput from "@/components/common/flight-search/FlightInput";
import { Button } from "keep-react";

const OneWayTab = () => {
  const [flightSearchData, setFlightSearchData] = useState<any>({
    origin: "",
    destination: "",
    departureDate: new Date(),
  });

  /**===================redux start========================= */
  const { isLoading } = useStoreState((state: any) => state.searchFlight);
  console.log('isLoading', isLoading)
  const { oneWaySearch } = useStoreActions(
    (actions: any) => actions.searchFlight
  );
  /**===================redux end========================= */

  // associated with server
  const handleSubmission = () => {
    oneWaySearch({
      CatalogProductOfferingsQueryRequest: {
        CatalogProductOfferingsRequest: {
          "@type": "CatalogProductOfferingsRequestAir",
          maxNumberOfUpsellsToReturn: 4,
          contentSourceList: ["GDS"],
          PassengerCriteria: [
            {
              "@type": "PassengerCriteria",
              number: 1,
              passengerTypeCode: "ADT",
            },
          ],
          SearchCriteriaFlight: [
            {
              "@type": "SearchCriteriaFlight",
              departureDate: formatDate(
                flightSearchData.departureDate.startDate
              ),
              From: {
                value: flightSearchData.origin,
              },
              To: {
                value: flightSearchData.destination,
              },
            },
          ],
          SearchModifiersAir: {
            "@type": "SearchModifiersAir",
            CarrierPreference: [
              {
                "@type": "CarrierPreference",
                preferenceType: "Preferred",
                carriers: ["AA"],
              },
            ],
          },
        },
      },
    });
  };

  console.log('handleSubmission', handleSubmission)

  return (
    <div className="flex w-full items-center gap-5 p-5">
      <FlightInput
        onOriginChange={(origin: any) => {
          setFlightSearchData({ ...flightSearchData, origin: origin });
        }}
        onDestinationChange={(destination: any) => {
          setFlightSearchData({
            ...flightSearchData,
            destination: destination,
          });
        }}
      />

      <div className="flex w-full items-center gap-5">
        <PickDate
          label="Depart"
          onDateChange={(date: any) => {
            setFlightSearchData({ ...flightSearchData, departureDate: date });
          }}
        />

        <Button></Button>
      </div>
    </div>
  );
};

export default OneWayTab;
