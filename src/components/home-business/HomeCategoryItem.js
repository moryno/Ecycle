import React from "react";

const HomeCategoryItem = ({ category }) => {
  return (
    <main className="relative flex flex-col box-border gap-3 my-3 md:my-8 md:w-[45%] lg:w-[30%]  w-full ">
      <section className="bg-section h-20"></section>
      <section className="bg-card rounded-full object-cover w-40 md:h-40 flex items-center justify-center cursor-pointer absolute right-0 left-0 m-auto">
        <img
          className="max-h-full md:max-h-40"
          src={category.img}
          alt="category"
        />
      </section>
      <section className="bg-white p-5 md:h-[40vh] lg:h-[50vh] xl:h-[42vh] shadow-xl">
        <article className="mt-20 ">
          <div className="pb-5  text-textHeavy font-bold text-[14px]">
            {category.label}
          </div>
          <h1 className="font-extrabold  py-1 text-[20px] lg:text-[26px]">
            {category.title}
          </h1>
          <span className="text-gray-500 text-[14px] font-medium">
            {category.description}
          </span>
          <div className="mt-2.5 py-2.5 text-link font-medium">
            <span className="	text-decoration-line: underline cursor-pointer">
              {category.link}
            </span>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomeCategoryItem;
