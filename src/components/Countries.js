import React from "react";

function Countries(CountriesFlags) {
  console.log(CountriesFlags);
  return (
    <>
      <div className="country">
        <img
          src={CountriesFlags.CountriesFlags}
          alt="countries flags"
          width={"320"}
          height={"231"}
        />
      </div>
    </>
  );
}

export default Countries;
