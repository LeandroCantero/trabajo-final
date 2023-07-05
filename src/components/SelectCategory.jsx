import React from "react";
import Select from "react-select";
import Trivia from "./Trivia";
import { useState } from "react";

const SelectCategory = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [trivia, setTrivia] = useState("");
  const [errorM, setErrorM] = useState("");
  const [isError, setIsError] = useState(false);

  const getApiTrivia = async () => {
    try {
      const api = await fetch(
        `https://api.api-ninjas.com/v1/trivia?category=${selectedOption.value}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": process.env.REACT_APP_API_KEY,
          },
        }
      );
      const resultado = await api.json();
      setTrivia(resultado[0]);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorM("Debes seleccionar una categoría para empezar a jugar");
    }
  };

  return (
    <div className="flex items-center	justify-center w-full h-screen flex-col">
      <div className="rounded shadow-2xl bg-semiWhite flex items-center justify-center flex-col w-3/6 h-4/6">
        <div className="flex flex-col items-center">
          <p className="text-red-600 font-semibold absolute top-72">
            {isError && errorM}
          </p>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="w-52 mt-4"
          />
        </div>
        <Trivia trivia={trivia} getApiTrivia={getApiTrivia} />
      </div>
    </div>
  );
};

export default SelectCategory;