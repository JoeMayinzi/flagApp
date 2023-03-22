import React, { useContext } from "react";
import { BASE_URL } from "../../api/api";
import { RangeContext } from "../../context/RangeContext";
import useFetchData from "../../hooks/useFetchData";
import Countries from "../Countries";
import Loader from "../Loader";

function SingleContinentContries(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  const [rangeValue] = useContext(RangeContext);
  const locationFistLetter = window.location.pathname
    .charAt(1)
    .toLocaleUpperCase();
  const locationSliced = window.location.pathname.slice(2);
  const continentName = locationFistLetter + locationSliced;
  console.log(continentName);

  return (
    <div className="countries">
      {countries.length
        ? countries
            .slice(0, rangeValue)
            .filter((c) => c.region === continentName)
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

export default SingleContinentContries;
