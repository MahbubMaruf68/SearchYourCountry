import React from "react";
import "./Country.css";

export default function Country(props) {
  const { name, flags, capital, population, area } = props.country;
  return (
    <article className="countryBox m-10 border-4 rounded-md p-5 ">
      <div className="flex flex-col justify-center items-center">
        <img className="w-80 h-40" src={flags.png} alt={name.common} />
        <h1>Name: {name.common}</h1>
        <h2> Capital: {capital}</h2>
        <h2>Area: {area} Squre KM</h2>
        <h2>Population: {population}</h2>
      </div>
    </article>
  );
}
