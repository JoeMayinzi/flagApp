function Range({ countries, rangeValue, setRangeValue }) {
  function onChangeHandler(e) {
    const value = e.target.value;
    setRangeValue(value);
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
