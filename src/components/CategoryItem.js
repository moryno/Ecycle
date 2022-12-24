import React from "react";

const CategoryItem = () => {
  return (
    <main className="relative flex flex-col box-border gap-3 my-3 md:my-8 md:w-[45%] lg:w-medium  w-full">
      <section className="bg-section h-20"></section>
      <section className="bg-card rounded-full object-cover w-40 h-40 flex items-center justify-center absolute right-0 left-0 m-auto">
        <img
          className="max-h-40"
          src="https://o.remove.bg/downloads/abfe5669-afd4-4b0c-9916-417bce4f08e7/recycle-WM-removebg-preview.png"
          alt="category"
        />
      </section>
      <section className="bg-white p-5 shadow-xl">
        <h1 className="font-bold h mt-20 py-1 text-[20px]  text-card">
          Residential Waste Pickup
        </h1>
        <span className="text-gray-500 text-[14px] font-medium">
          Ecycle curbside trash and recycling pickup is the best choicefor your
          home, and for the environment{" "}
        </span>
        <div className="mt-2.5 py-2.5 text-link font-medium">
          <span className="	text-decoration-line: underline cursor-pointer">
            Get Residential Waste Service
          </span>
        </div>
      </section>
    </main>
  );
};

export default CategoryItem;
