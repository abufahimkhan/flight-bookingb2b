import { createStore } from "easy-peasy";
import { authModel } from "./models/authModel";
import { flightSearchModel } from "./models/flightSearchModel";
import { sidebarModel } from "./models/sidebarModel";
import { tripFilterModel } from "./models/tripFilterModel";

export const store = createStore({
  tripFilter: tripFilterModel,
  auth: authModel,
  flightSearch: flightSearchModel,
  sidebar: sidebarModel,
});
