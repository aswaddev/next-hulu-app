import { useRouter } from "next/router";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            className="hover:text-white hover:scale-125 cursor-pointer transition duration-100 transform active:text-red-500 last:pr-24"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-12" />
    </nav>
  );
};

export default Nav;
