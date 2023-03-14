import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(url) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const datas = await response.data;

        if (response.status) {
          setCountries(datas);
        }
      } catch (e) {
        throw new Error("an error is occured", e);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [countries, isLoading];
}
