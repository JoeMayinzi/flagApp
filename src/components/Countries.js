import React from "react";

function Countries(...props) {
  console.log(props);
  return (
    <>
      <div className="country">
        <img
          src={props[0].flag}
          alt={props[0].name + " flag"}
          width="320"
          height="213"
        />
      </div>
    </>
  );
}

export default Countries;
