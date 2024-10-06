import travelport from "@/utils/axios/travelport";
import { action, Action, thunk, Thunk } from "easy-peasy";

interface SearchModel {
  isLoading: boolean;
  error: string | null;
  response: any;
  setIsLoading: Action<SearchModel, boolean>;
  setError: Action<SearchModel, string | null>;
  setResponse: Action<SearchModel, any>;
  oneWaySearch: Thunk<SearchModel>;
}

export const searchOneWayFlightModel: SearchModel = {
  isLoading: false,
  error: null,
  response: null,

  // Actions to set state
  setIsLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  setResponse: action((state, payload) => {
    state.response = payload;
  }),

  // Thunk to handle the async operation
  oneWaySearch: thunk(async (actions, payload) => {
    actions.setIsLoading(true);
    actions.setError(null); // Reset any previous errors
    try {
      const res = await travelport.post(
        "/catalog/search/catalogproductofferings",
        payload,
      );
      actions.setResponse(res.data); // Set response data
    } catch (err: any) {
      console.log(err);
      actions.setError(
        err.response?.data?.message || "An error occurred while searching",
      );
    } finally {
      actions.setIsLoading(false);
    }
  }),
};
