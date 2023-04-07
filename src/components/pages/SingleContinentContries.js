import React, { useContext } from "react";
import { BASE_URL } from "../../api/api";
import { RangeContext } from "../../context/RangeContext";
import useFetchData from "../../hooks/useFetchData";
import Countries from "../Countries";
import Loader from "../Loader";
import { CountryContext } from "../../context/Country";
import Modal from "../Modal";

function SingleContinentContries(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  const [rangeValue] = useContext(RangeContext);
  const [modalCountryInfos, setmodalCountryInfos] = useContext(CountryContext);
  const locationFistLetter = window.location.pathname
    .charAt(1)
    .toLocaleUpperCase();
  const locationSliced = window.location.pathname.slice(2);
  const continentName = locationFistLetter + locationSliced;

  return (
    <div className="countries">
      {countries.length
        ? countries
            .slice(0, rangeValue)
            .filter((c) => c.region === continentName)
            .map((country) => (
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  setmodalCountryInfos({
                    ...modalCountryInfos,
                    img: country.flags.png,
                    population: country.population,
                    officialName: country.name.official,
                    capital: country.capital,
                    languages: Object.values(country.languages).toString(),
                    continent: country.continents[0],
                    currencies: country.currencies,
                  });
                }}
              >
                <Countries
                  name={country.name.official}
                  capital={country.capital}
                  continent={country.region}
                  population={country.population}
                  flag={country.flags.png}
                />
              </div>
            ))
        : isLoading && <Loader />}
      <Modal
        modalCountryInfos={modalCountryInfos}
        continentName={continentName}
      />
    </div>
  );
}

export default SingleContinentContries;
