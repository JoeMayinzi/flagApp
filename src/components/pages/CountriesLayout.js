import React, { useContext } from "react";
import { BASE_URL } from "../../api/api";
import { RangeContext } from "../../context/RangeContext";
import useFetchData from "../../hooks/useFetchData";
import Countries from "../Countries";
import Loader from "../Loader";

function CountriesLayout(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  const [rangeValue] = useContext(RangeContext);
  return (
    <div className="countries">
      {countries.length
        ? countries
            .slice(0, rangeValue)
            .map((country) => (
              <Countries
                name={country.name.official}
                capital={country.capital}
                continent={country.region}
                population={country.population}
                flag={country.flags.png}
              />
            ))
        : isLoading && <Loader />}
    </div>
  );
}

export default CountriesLayout;
