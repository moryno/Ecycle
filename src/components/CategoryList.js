import CategoryItem from "./CategoryItem";
import { cartegories } from "../helpers/categorySource";

const CategoryList = () => {
  return (
    <main className="bg-section lg:h-mdView">
      <section className="container h-full mx-auto flex justify-between flex-wrap p-5 items-center">
        {cartegories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </section>
    </main>
  );
};

export default CategoryList;
