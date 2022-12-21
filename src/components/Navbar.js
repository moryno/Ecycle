import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <main className=" w-full">
      <section className="container mx-auto py-5  flex items-center justify-between">
        <article className="flex items-center">
          <h1 className="text-orange font-bold text-3xl cursor-pointer">
            <span className="text-text">Ecy</span>cle
          </h1>
        </article>
        <article className="hidden md:block">
          <ul className="flex items-center md:gap-4 gap-10 text-text font-bold text-md cursor-pointer">
            <li className="hover:text-textHeavy">For Home</li>
            <li className="hover:text-textHeavy">For Business</li>
            <li className="hover:text-textHeavy">Drop Off Location</li>
            <li className="hover:text-textHeavy">View Schedule</li>
          </ul>
        </article>
        <article className="hidden md:block">
          <div className="flex items-center text-text font-bold text-md">
            Login <MdArrowDropDown size={"1.5rem"} />
          </div>
        </article>
        <article className="md:hidden">
          <div
            onClick={expand}
            className="space-y-1 p-1.5 bg-white md:hidden cursor-pointer z-50"
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
          {isExpanded && (
            <ul className=" absolute top-0 left-0 bg-bgHeavy text-white text-center rounded-b-3xl w-full space-y-10 p-10 z-20">
              <li
                className="cursor-pointer hover:text-textLight"
                onClick={expand}
              >
                <a href={`#home`}>For Home</a>
              </li>
              <li
                className="cursor-pointer hover:text-textLight"
                onClick={expand}
              >
                <a href={`#about`}>For Business</a>
              </li>
              <li
                className="cursor-pointer hover:text-textLight"
                onClick={expand}
              >
                <a href={`#skills`}>Drop off Location</a>
              </li>
              <li
                className="cursor-pointer hover:text-textLight"
                onClick={expand}
              >
                <a href={`#projects`}>View Schedule</a>
              </li>
            </ul>
          )}
        </article>
      </section>
    </main>
  );
};

export default Navbar;
