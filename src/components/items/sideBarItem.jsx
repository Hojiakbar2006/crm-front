import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { memo, useState } from "react";

const SidebarItem = ({ icon, path, text, active, alert, data }) => {
  const expanded = useSelector((state) => state.expand.isOpen);
  const [isOpen, setoIsOpen] = useState(false);

  return !data ? (
    <li>
      <NavLink
        to={path}
        className={`
     relative flex items-center py-2 px-3 my-1
     font-medium rounded-md cursor-pointer
     transition-colors group
     ${
       active
         ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
         : "hover:bg-indigo-50 text-gray-600"
     }
 `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
       absolute left-full rounded-md px-2 py-1 ml-6
       bg-indigo-100 text-indigo-800 text-sm
       invisible opacity-20 -translate-x-3 transition-all
       group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
   `}
          >
            {text}
          </div>
        )}
      </NavLink>
    </li>
  ) : (
    <li>
      <div
        onClick={() => setoIsOpen(!isOpen)}
        className={`
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors group
    justify-between
    ${
      active
        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
        : "hover:bg-indigo-50 text-gray-600"
    }
`}
      >
        {icon}
        <NavLink
          className={`overflow-hidden transition-all  ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </NavLink>
        {alert && (
          <NavLink
            className={`absolute right-2 hover:bg-indigo-200  w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
       absolute left-full rounded-md ml-6 overflow-hidden
       bg-indigo-100 text-indigo-800 text-sm
       invisible opacity-20 -translate-x-3 transition-all
       group-hover:visible group-hover:opacity-100 flex flex-col group-hover:translate-x-0 group
   `}
          >
            <span className="p-1  pl-2">{text}:</span>
            {data.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  className="p-1 pl-4 hover:bg-indigo-200"
                  to={item.path}
                >
                  <span className=" border-solid border-indigo-600 border-b">
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
          </div>
        )}
        <span className={expanded ? "" : "absolute z-[-100]"}>
          <FaChevronRight
            className={isOpen ? "rotate-90" : "ease-in duration-300"}
          />
        </span>
      </div>
      {isOpen && expanded ? (
        <div className=" flex flex-col gap-1 ">
          {data?.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="w-full flex gap-2 mx-4 items-center capitalize rounded-md px-3 py-1 text-sm font-medium 
            hover:bg-indigo-50 text-gray-600"
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default memo(SidebarItem);
