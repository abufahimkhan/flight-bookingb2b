import { action } from "easy-peasy";

import {
  defaultDestinationAirport,
  defaultOriginAirport,
} from "@/assets/data/airports";
import { toast } from "keep-react";

export const flightSearchModel = {
  origin: defaultOriginAirport,
  destination: defaultDestinationAirport,
  departureDate: new Date(),
  returnDate: new Date(),

  setOrigin: action((state: any, payload: any) => {
    state.origin = payload;
  }),

  setDestination: action((state: any, payload: any) => {
    state.destination = payload;
  }),

  setDepartureDate: action((state: any, payload: any) => {
    state.departureDate = payload;
    if (state.departureDate?.toString() === state.returnDate?.toString()) {
      toast.warning("Dates can not be same");
    }
  }),

  setReturnDate: action((state: any, payload: any) => {
    state.returnDate = payload;
    if (state.departureDate?.toString() === state.returnDate?.toString()) {
      toast.warning("Dates can not be same");
    }
  }),
};
