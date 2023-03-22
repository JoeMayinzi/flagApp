import { useContext } from "react";
import { RangeContext } from "../context/RangeContext";

function Range({ countries }) {
  const [rangeValue, setRangeValue] = useContext(RangeContext);
  function onChangeHandler(e) {
    const value = e.target.value;
    setRangeValue(value);
    console.log(rangeValue);
  }
  return (
    <div className="range">
      <label htmlFor="range">Regler le nombre des pays à afficher</label>
      <br></br>
      <input type={"range"} onChange={onChangeHandler} max={250} id="range" />
    </div>
  );
}

export default Range;
