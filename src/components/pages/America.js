import React from "react";
import { BASE_URL } from "../../api/api";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader";
import Navbar from "../Navbar";
import Countries from "../Countries";

function America(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  console.log(isLoading);
  console.log(countries);
  return (
    <>
      <Navbar />
      <div className="countries">
        {countries.length ? (
          countries
            .filter((c) => c.region === "Americas")
            .map((country) => (
              <Countries
                name={country.name.official}
                capital={country.capital}
                continent={country.region}
                population={country.population}
                flag={country.flags.png}
              />
            ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default America;
