import { useEffect, useState } from "react";
import { IoMdSettings, IoMdNotifications } from "react-icons/io";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`w-full sticky top-4 mt-4  px-4 transition-all ease-in duration-300  h-16 flex rounded-2xl items-center justify-between  ${
        isSticky ? "bg-white shadow-sm" : ""
      }`}
    >
      <nav className="flex w-full flex-row items-center justify-between">
        <div>NavBar</div>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            className="p-2 rounded-md bg-transparent border border-gray-300 "
            placeholder="Search"
          />
          <button>
            <IoMdSettings size={30} className="text-gray-500" />
          </button>
          <button>
            <IoMdNotifications size={30} className="text-gray-500" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
