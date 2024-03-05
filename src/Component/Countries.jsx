import React from "react";
import Country from "./Country";
export default function Countries(props) {
  return (
    <section className="flex flex-wrap justify-center items-center">
      {props.countries.map((country) => {
        const countryNew = { country, id: crypto.randomUUID() };

        return <Country {...countryNew} key={countryNew.id} />;
      })}
    </section>
  );
}
