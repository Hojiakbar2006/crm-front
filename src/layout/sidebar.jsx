import { useSelector } from "react-redux";
import { BiSolidDashboard } from "react-icons/bi";
import { Line, SideBarMain, SidebarItem } from "../components";
import { BiTable } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

import { MdOutlineMessage } from "react-icons/md";

export default function Sidebar() {
  const expanded = useSelector((state) => state.expand.isOpen);

  return (
    <SideBarMain>
      <SidebarItem
        icon={<BsPersonFill size={30} />}
        path="/profile"
        text="Profile"
        expanded={expanded}
      />
      <SidebarItem
        icon={<BiSolidDashboard size={30} />}
        path="/dashboard"
        text="Dashboard"
        expanded={expanded}
      />
      <SidebarItem
        icon={<BiTable size={30} />}
        text="Tables"
        expanded={expanded}
        data={[
          {
            id: 1,
            name: "Product",
            path: "/dashboard/product-list",
            icon: <FaList />,
          },
          {
            id: 2,
            name: "Category",
            path: "/dashboard/category-list",
            icon: <FaList />,
          },
          {
            id: 3,
            name: "Order",
            path: "/dashboard/order-list",
            icon: <FaList />,
          },
        ]}
      />
      <SidebarItem
        icon={<MdOutlineMessage size={30} />}
        path="/messages"
        text="Message"
        expanded={expanded}
      />
      <Line />
    </SideBarMain>
  );
}
