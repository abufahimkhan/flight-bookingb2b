"use client";
import { defaultAirports, restAirports } from "@/assets/data/airports";
import { IconSearchEngine } from "@/interfaces/icons";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Button } from "keep-react";
import { useEffect, useState } from "react";
import FlightInput from "@/components/common/flight-search/FlightInput";
import PickDate from "@/components/common/flight-search/PickDate";

const RoundTripInputs = () => {
  const { setOrigin, setDestination, setDepartureDate, setReturnDate } =
    useStoreActions((actions: any) => actions.flightSearch);
  const { origin, destination, departureDate, returnDate } = useStoreState(
    (state: any) => state.flightSearch
  );

  const [originSearchKey, setOriginSearchKey] = useState("");
  const [destinationSearchKey, setDestinationSearchKey] = useState("");

  const [originAirportLists, setOriginAirportLists] = useState<any>([]);
  const [destinationAirportLists, setDestinationAirportLists] = useState<any>(
    []
  );

  const [restOriginAirportLists, setRestOriginAirportLists] = useState<any>([]);
  const [restDestinationAirportLists, setRestDestinationAirportLists] =
    useState<any>([]);

  useEffect(() => {
    /**====================ORIGIN AIRPORT LIST======================== */
    const filteredOriginLists = defaultAirports.filter(
      (item) => item.value !== destination.value // Exclude the selected destination
    );
    setOriginAirportLists(filteredOriginLists);

    //rest
    const filteredRestOriginLists = restAirports.filter(
      (item) => item.value !== destination.value // Exclude the selected destination
    );
    setRestOriginAirportLists(filteredRestOriginLists);

    /**====================DESTINATION AIRPORT LIST=================== */
    const filteredDestinationLists = defaultAirports.filter(
      (item) => item.value !== origin.value // Exclude the selected origin
    );

    setDestinationAirportLists(filteredDestinationLists);
    //rest
    const filteredRestDestinationLists = restAirports.filter(
      (item) => item.value !== origin.value // Exclude the selected destination
    );
    setRestDestinationAirportLists(filteredRestDestinationLists);
    /**===============ORIGIN SEARCH KEY========================== */
    if (originSearchKey) {
      const newOriginLists = filteredOriginLists.filter((item: any) => {
        const label = item?.label?.toLowerCase();
        const value = item?.value?.toLowerCase();
        return (
          label?.startsWith(originSearchKey) ||
          value?.startsWith(originSearchKey)
        );
      });

      setOriginAirportLists(newOriginLists);

      if (newOriginLists.length === 0) {
        const myNewLists = restOriginAirportLists.filter((item: any) => {
          const label = item?.label?.toLowerCase();
          const value = item?.value?.toLowerCase();
          return (
            label?.startsWith(originSearchKey) ||
            value?.startsWith(originSearchKey)
          );
        });

        setOriginAirportLists(myNewLists);
      }
    }

    /**===============DESTINATION SEARCH KEY====================== */
    if (destinationSearchKey) {
      const newDestinationLists = filteredDestinationLists.filter(
        (item: any) => {
          const label = item?.label?.toLowerCase();
          const value = item?.value?.toLowerCase();
          return (
            label?.startsWith(destinationSearchKey) ||
            value?.startsWith(destinationSearchKey)
          );
        }
      );
      setDestinationAirportLists(newDestinationLists);

      if (newDestinationLists.length === 0) {
        const myNewLists = restDestinationAirportLists.filter((item: any) => {
          const label = item?.label?.toLowerCase();
          const value = item?.value?.toLowerCase();
          return (
            label?.startsWith(destinationSearchKey) ||
            value?.startsWith(destinationSearchKey)
          );
        });

        setDestinationAirportLists(myNewLists);
      }
    }
  }, [
    originSearchKey,
    destinationSearchKey,
    destination.value,
    origin.value,
    restOriginAirportLists,
    restDestinationAirportLists,
  ]);

  return (
    <div className="grid grid-cols-5 gap-8 relative">
      {/* From Input */}
      <div className="flex flex-col items-center relative">
        <FlightInput
          label="From"
          id="from"
          options={
            originAirportLists.length ? originAirportLists : defaultAirports
          }
          value={origin}
          onInputChange={(item: string) => {
            setOriginSearchKey(item?.toLowerCase());
          }}
          onChange={(option: any) => {
            setOrigin(option);
          }}
        />
        {/* Vertical Line */}
      </div>
      <Button
        className="absolute bg-gray-300 left-[20%] -translate-x-[79%] top-1/2 -translate-y-[20%] p-1 size-[30px] aspect-square rounded-full z-10"
        onClick={() => {
          setDestination(origin);
          setOrigin(destination);
        }}
      >
        <IconSearchEngine.Swap className="text-xl text-black" />
      </Button>
      {/* To Input */}
      <div className="flex flex-col items-center relative">
        <FlightInput
          label="To"
          id="to"
          options={
            destinationAirportLists.length
              ? destinationAirportLists
              : defaultAirports
          }
          value={destination}
          onInputChange={(item: string) => {
            setDestinationSearchKey(item?.toLowerCase());
          }}
          onChange={(option: any) => {
            setDestination(option);
          }}
        />
        {/* Vertical Line */}
        <div className="absolute right-[-25px] top-0 bottom-0 w-[1px] bg-slate-700"></div>
      </div>

      {/*Departure Date Picker */}
      <div className="flex flex-col items-center">
        <PickDate
          date={departureDate}
          setDate={setDepartureDate}
          label="Departure"
        />
      </div>
      {/* Returbn Date Picker */}
      <div className="flex flex-col items-center">
        <PickDate date={returnDate} setDate={setReturnDate} label="Return" />
      </div>

      {/* Submit Button */}
      <div className="flex max-w-full justify-center items-center">
        <Button className="px-12 py-4 text-lg rounded-full bg-primary-main text-white">
          Submit
        </Button>
      </div>
    </div>
  );
};
export default RoundTripInputs;
