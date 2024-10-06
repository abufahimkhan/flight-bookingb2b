import { Country, State, City } from "country-state-city";

// Get all countries
export const allCountries = Country.getAllCountries()?.map((country) => {
  return {
    value: country.name,
    label: country.name,
    phoneCode: country.phonecode,
    isoCode: country.isoCode,
  };
});

// Get all states
export const allStates = (isoCode: string) =>
  State.getStatesOfCountry(isoCode)?.map((state) => {
    return {
      value: state.name,
      label: state.name,
      stateCode: state.isoCode,
    };
  });

// Get all cities
export const allCities = (isoCode: string, stateCode: string) =>
  City.getCitiesOfState(isoCode, stateCode)?.map((city) => {
    return {
      value: city.name,
      label: city.name,
    };
  });
