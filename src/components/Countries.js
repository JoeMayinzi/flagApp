import React from "react";

function Countries(...props) {
  console.log("re-render country");
  return (
    <>
      <div>
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
