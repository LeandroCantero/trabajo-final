import React from "react";
import SelectCategory from "./SelectCategory";

function CategoryList() {
  const options = [
    { value: "general", label: "General" },
    { value: "music", label: "Music" },
    { value: "language", label: "Language" },
    { value: "sciencenature", label: "Science & Nature" },
    { value: "fooddrink", label: "Food & Drink" },
    { value: "peopleplaces", label: "People & Places" },
    { value: "geography", label: "Geography" },
    { value: "historyholidays", label: "History & Holidays" },
    { value: "entertainment", label: "Entertainment" },
    { value: "toysgames", label: "Toys & Games" },
    { value: "mathematics", label: "Mathematics" },
    { value: "religionmythology", label: "Religion & Mythology" },
    { value: "sportsleisure", label: "Sports & Leisure" },
  ];
  return (
    <>
      <SelectCategory options={options} />
    </>
  );
}

export default CategoryList;
