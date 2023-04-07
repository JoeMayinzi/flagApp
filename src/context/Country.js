import { createContext, useState } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [modalCountryInfos, setmodalCountryInfos] = useState({
    img: "",
    population: null,
    officialName: "",
    capital: null,
    continent: null,
    languages: null,
    currencies: [],
  });

  return (
    <CountryContext.Provider value={[modalCountryInfos, setmodalCountryInfos]}>
      {children}
    </CountryContext.Provider>
  );
};
