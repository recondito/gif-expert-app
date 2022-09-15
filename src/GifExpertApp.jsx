import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // if ( categories.includes(newCategory) ) return;
    if (
      categories.findIndex(
        (category) => newCategory.toLowerCase() === category.toLowerCase()
      ) !== -1
    )
      return;
    // setCategories( [...categories, 'Stardew Valley'] );
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
