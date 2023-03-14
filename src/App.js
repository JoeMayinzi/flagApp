import Navbar from "./components/Navbar";
import "../src/App.scss";
import { BASE_URL } from "./api/api";
import useFetchData from "./hooks/useFetchData";
import Countries from "./components/Countries";

function App() {
  const [flags, isLoading] = useFetchData(BASE_URL);
  return (
    <>
      <Navbar />
      <div className="countries">
        {flags.map((flag) => (
          <Countries CountriesFlags={flag.flags.png} />
        ))}
      </div>
    </>
  );
}

export default App;
