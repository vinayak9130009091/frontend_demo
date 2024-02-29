import { FiHome } from "react-icons/fi";
import { FaChalkboard } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BiFoodMenu } from "react-icons/bi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GoWorkflow } from "react-icons/go";
import { RiBillFill } from "react-icons/ri";
import { HiTemplate } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { FaLandmark } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";
import { MdInput } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { AdminLogin } from "../pages/AdminLogin";

const SidebarItems = [
  {
    title: "Insights",
    path: "/tags",
    icon: <HiMiniSquares2X2 />,
  },
  {
    title: "Inbox+",
    path: "/TagTable",
    icon: <MdOutlineMailOutline />,
  },
  {
    title: "Clients", // Main menu item with submenus
    icon: <IoMdContact />,
    subNavOpen: false,
    subNav: [
      {
        title: "Accounts",
        path: "/submenu1",
        icon: <MdAccountBalanceWallet />,
      },
      {
        title: "Contacts",
        path: "/submenu2",
        icon: <MdPermContactCalendar />,
      },
    ],
  },
  {
    title: "Workflow", // Main menu item with submenus
    icon: <GoWorkflow />,
    subNavOpen: false,
    subNav: [
      {
        title: "Marketplace",
        path: "/marketplace",
        icon: <FaLandmark />,
      },
      {
        title: "Firmtemplates",
        path: "/firmtemplates",
        icon: <RiBuilding2Fill />,
      },
      {
        title: "Tags",
        path: "/newtag",
        icon: <IoMdPricetags />,
      },
      {
        title: "Services",
        path: "/tagtable",
        icon: <TiSpanner />,
      },
      {
        title: "Customfields",
        path: "/customfields",
        icon: <MdInput />,
      },
    ],
  },
  {
    title: "Documents",
    path: "/Card",
    icon: <BiFoodMenu />,
  },
  {
    title: "Billing",
    path: "/Card",
    icon: <RiBillFill />,
  },
  {
    title: "Templates",
    path: "/Card",
    icon: <HiTemplate />,
  },
  {
    title: "Settings",
    path: "/Card",
    icon: <IoSettingsSharp />,
  },
];

export default SidebarItems;
