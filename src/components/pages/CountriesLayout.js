import React, { useContext } from "react";
import { BASE_URL } from "../../api/api";
import { RangeContext } from "../../context/RangeContext";
import useFetchData from "../../hooks/useFetchData";
import Countries from "../Countries";
import Loader from "../Loader";
import Modal from "../Modal";
import { CountryContext } from "../../context/Country";

function CountriesLayout(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  const [rangeValue] = useContext(RangeContext);
  const [modalCountryInfos, setmodalCountryInfos] = useContext(CountryContext);

  return (
    <div className="countries">
      {countries.length
        ? countries.slice(0, rangeValue).map((country) => (
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
      <Modal modalCountryInfos={modalCountryInfos} />
    </div>
  );
}

export default CountriesLayout;
