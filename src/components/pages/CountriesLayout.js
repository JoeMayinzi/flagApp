import React, { useContext } from "react";
import { BASE_URL } from "../../api/api";
import { RangeContext } from "../../context/RangeContext";
import useFetchData from "../../hooks/useFetchData";
import Countries from "../Countries";
import Loader from "../Loader";
import { useState } from "react";

function CountriesLayout(props) {
  const [countries, isLoading] = useFetchData(BASE_URL);
  const [rangeValue] = useContext(RangeContext);
  const [modalCountryInfos, setmodalCountryInfos] = useState({
    img: "",
    population: null,
    officialName: "",
    continent: null,
  });

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
                  continent: country.continents[0],
                });

                console.log(modalCountryInfos);
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
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src={modalCountryInfos.img}
                alt={modalCountryInfos.officialName + "flag"}
              />
            </div>
            <div className="modal-body">
              <h5>Infos</h5>
              <ul>
                <li>official name : {modalCountryInfos.officialName}</li>
                <li>population : {modalCountryInfos.population}</li>
                <li>continent : {modalCountryInfos.continent}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesLayout;
