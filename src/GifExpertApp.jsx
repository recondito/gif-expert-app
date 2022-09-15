import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (
      categories.findIndex(
        (category) => newCategory.toLowerCase() === category.toLowerCase()
      ) !== -1
    )
      return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GIF Expert</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
