import React from "react";

function Modal({ modalCountryInfos, continentName }) {
  return (
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
              <li>capital : {modalCountryInfos.capital}</li>
              <li>languages : {modalCountryInfos.languages}</li>
              <li>population : {modalCountryInfos.population}</li>
              {continentName ? (
                ""
              ) : (
                <li>continent {modalCountryInfos.continent}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
