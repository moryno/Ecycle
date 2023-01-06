import React from "react";
import HomeCategoryList from "../../components/home-business/HomeCategoryList";
import HomeHero from "../../components/home-business/HomeHero";

const SingleHome = ({ heroSource, categories }) => {
  return (
    <div>
      <HomeHero hero={heroSource} />
      <HomeCategoryList categories={categories} />
    </div>
  );
};

export default SingleHome;
