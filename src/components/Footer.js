import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-bgHeavy text-white">
      <section className="container mx-auto py-10 px-5">
        <article className="">
          <h1 className="text-orange font-bold text-3xl cursor-pointer">
            <span className="text-white">Ecy</span>cle
          </h1>
        </article>
        <hr className="my-4" />
        <article className="hidden  md:flex justify-between pb-10">
          <div>
            <h1 className="font-extrabold mb-2 text-[18px]">
              Products & Services
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Trash Collection & Recycling for Home
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Waste Disposal & Recycling for Business
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Roll-Off Dumpster Rental
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Repair Broken Electronics
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Bulk Trash Pickup
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold mb-2 text-[18px]">
              Customer Support
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Recycling for Home
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                W Recycling for Business
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Roll-Off Dumpster Rental
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Repair Broken Electronics
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Bulk Trash Pickup
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold mb-2 text-[18px]">Quick Info</h1>
            <ul className="flex flex-col gap-2">
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Trash Recycling for Home
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Waste Disposal & Recycling for Business
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Roll-Off Dumpster Rental
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Repair Broken Electronics
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Bulk Trash Pickup
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold mb-2 text-[18px]">Our Company</h1>
            <ul className="flex flex-col gap-2">
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                who We are
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Why Ecycle?
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Roll-Off Dumpster Rental
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Repair Broken Electronics
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Bulk Trash Pickup
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-extrabold mb-2 text-[18px]">Work With Us</h1>
            <ul className="flex flex-col gap-2">
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Careers
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Investors
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Suppliers
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Repair
              </li>
              <li className="pt-1 w-[90%] cursor-pointer text-[14px]">
                Bulk Trash Pickup
              </li>
            </ul>
          </div>
        </article>
        <article className="flex md:justify-end">
          <section className="flex gap-5">
            <div className="flex items-center justify-center rounded-full ring-1 ring-white p-2 cursor-pointer">
              <FaFacebook />
            </div>
            <div className="flex items-center justify-center rounded-full ring-1 ring-white p-2 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center rounded-full ring-1 ring-white p-2 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="flex items-center justify-center rounded-full ring-1 ring-white p-2 cursor-pointer">
              <FaLinkedin />
            </div>
            <div className="flex items-center justify-center rounded-full ring-1 ring-white p-2 cursor-pointer">
              <FaYoutube />
            </div>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Footer;
