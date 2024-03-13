import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { LuMoreVertical } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpand } from "../redux/feature/slice/expandSlice";
import { PiSignOutFill } from "react-icons/pi";

import Line from "./line";

const SidebarMain = ({ children }) => {
  const expanded = useSelector((state) => state.expand.isOpen);
  const dispatch = useDispatch();

  return (
    <aside className="h-screen sticky top-0 select-none p-4 ">
      <nav className="h-full flex flex-col  bg-white shadow-sm rounded-2xl">
        <div className="p-4 pb-2  flex justify-between items-center ">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => dispatch(toggleExpand())}
            className="p-1.5 justify-between rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <LuChevronFirst size={25} />
            ) : (
              <LuChevronLast size={25} />
            )}
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <Line />

        {false ? (
          <div className="flex p-3 m-auto">
            <h1 className="p-3 rounded-lg bg-gray-300 cursor-pointer select-none font-bold">
              HN
            </h1>
            <div
              className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Hojiakbar Nasriddinov</h4>
                <span className="text-xs text-gray-600 ">
                  hojiakbarni2006@gmail.com
                </span>
              </div>
              <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                <LuMoreVertical size={30} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex p-3 justify-center">
            <button className="b flex py-2 justify-center items-center w-full hover:bg-indigo-50 text-gray-600 ease-linear rounded-md duration-300 ">
              <PiSignOutFill size={25} />
              <span
                className={`overflow-hidden transition-all ${
                  expanded ? "ml-3" : "w-0"
                }`}
              >
                Logout
              </span>
            </button>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default SidebarMain;
