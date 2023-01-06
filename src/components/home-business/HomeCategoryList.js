import CategoryItem from "./HomeCategoryItem";

const HomeCategoryList = ({ categories }) => {
  return (
    <main className="bg-section ">
      <section className="container h-full mx-auto flex justify-between flex-wrap p-5 items-center">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </section>
    </main>
  );
};

export default HomeCategoryList;
