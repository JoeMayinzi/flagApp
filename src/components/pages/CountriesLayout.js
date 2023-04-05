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
        ? countries.slice(0, rangeValue).map((country) => (
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesLayout;
