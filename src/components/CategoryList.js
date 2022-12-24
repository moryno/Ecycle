import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <main className="bg-section lg:h-mdView">
      <section className="container h-full mx-auto flex justify-between flex-wrap p-5 items-center">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </section>
    </main>
  );
};

export default CategoryList;
