const Hero = () => {
  return (
    <main className="w-full h-1/2 md:h-mdScreen lg:h-lgScreen">
      <img
        className="w-full h-1/2 md:h-mdScreen lg:h-lgScreen object-cover absolute mix-blend-overlay"
        src="https://www.waste360.com/sites/waste360.com/files/wmfeat_1.png"
        alt="landingImage"
      />
      <section className="container h-full mx-auto flex flex-col  justify-center">
        <h1 className="font-bold text-yellow text-2xl md:text-5xl mb-2">
          <span className="text-white">Recycling Better,</span> Together
        </h1>
        <p className="text-white md:font-semibold">
          Ecycle are rolling out the first major residential and organisation
          electronic recycling program in Kenya
        </p>
        <article></article>
      </section>
    </main>
  );
};

export default Hero;
