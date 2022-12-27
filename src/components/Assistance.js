const Assistance = () => {
  return (
    <main className="bg-section py-10 ">
      <section>
        <article className="container mx-auto">
          <div className="md:w-[60vw] lg:w-[50vw] xl:w-[30vw] mx-auto flex flex-col gap-5 items-center py-10">
            <h1 className="text-text font-extrabold text-4xl">
              Need assistance?
            </h1>
            <p className=" self-start w-full text-card text-[14px]">
              Use our guided support tool to resolve your issue right now,
              entirely online
            </p>
            <button className="bg-button p-3 w-fit rounded-3xl text-white cursor-pointer font-semibold">
              Visit Support Center
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Assistance;
