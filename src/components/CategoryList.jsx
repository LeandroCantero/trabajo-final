import React from "react";
import SelectCategory from "./SelectCategory";

function CategoryList() {
  const options = [
    { value: "general", label: "General" },
    { value: "music", label: "Music" },
    { value: "language", label: "Language" },
    { value: "sciencenature", label: "Sciencenature" },
    { value: "fooddrink", label: "Fooddrink" },
    { value: "peopleplaces", label: "Peopleplaces" },
    { value: "geography", label: "Geography" },
    { value: "historyholidays", label: "Historyholidays" },
    { value: "entertainment", label: "Entertainment" },
    { value: "toysgames", label: "Toysgames" },
    { value: "mathematics", label: "Mathematics" },
    { value: "religionmythology", label: "Religionmythology" },
    { value: "sportsleisure", label: "Sportsleisure" },
  ];
  return (
    <>
      <SelectCategory options={options} />
    </>
  );
}

export default CategoryList;
