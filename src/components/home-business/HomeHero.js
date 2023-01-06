const HomeHero = ({ hero }) => {
  return (
    <main className=" h-[400px] md:h-mdScreen">
      <section className="flex flex-col md:flex-row w-full h-full">
        <article className="bg-bgHeavy flex items-center justify-center lg:justify-end md:w-6/12 relative px-10">
          <article className="py-4 xl:w-[80%] flex">
            <h1 className=" text-white font-extrabold text-2xl md:text-4xl lg:text-6xl">
              {hero.bigTitle}
            </h1>
          </article>
        </article>
        <article className="h-full md:w-6/12">
          <img
            className="w-full h-full object-cover"
            src={hero.cover}
            alt="landingImage"
          />
        </article>
      </section>
    </main>
  );
};

export default HomeHero;
