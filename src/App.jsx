import React, { useEffect, useState } from "react";
import Countries from "./Component/Countries";

const url = "https://restcountries.com/v3.1/all";
export default function App() {
  const [isLoading, SetIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  // fetching Data
  const fetchData = async (url) => {
    SetIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      SetIsLoading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      SetIsLoading(false);
      setError(null);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <section>
      <h1 className="text-center">Country App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={countries} />}
    </section>
  );
}
