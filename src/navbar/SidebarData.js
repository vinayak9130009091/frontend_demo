import { FiHome } from "react-icons/fi";
import { FaChalkboard } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BiFoodMenu } from "react-icons/bi";

const SidebarItems = [
  {
    title: "Home Work",
    path: "/",
    icon: <FiHome />,
  },
  {
    title: "Notice",
    path: "/Card",
    icon: <FaChalkboard />,
  },
  {
    title: "Schedule", // Main menu item with submenus
    icon: <LuFileSpreadsheet />,
    subNavOpen: false,
    subNav: [
      {
        title: "Prepration",
        path: "/submenu1",
        icon: <FiHome />,
      },
      {
        title: "School",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "School",
        path: "/submenu2",
        icon: <FiHome />,
      },
    ],
  },
  {
    title: "Template", // Main menu item with submenus
    icon: <LuFileSpreadsheet />,
    subNavOpen: false,
    subNav: [
      {
        title: "Marketplace",
        path: "/marketplace",
        icon: <FiHome />,
      },
      {
        title: "Firmtemplates",
        path: "/firmtemplates",
        icon: <FiHome />,
      },
      {
        title: "Tags",
        path: "/tags",
        icon: <FiHome />,
      },
      {
        title: "Services",
        path: "/services",
        icon: <FiHome />,
      },
      {
        title: "Customfields",
        path: "/customfields",
        icon: <FiHome />,
      },
    ],
  },
  {
    title: "Exam",
    path: "/Card",
    icon: <BiFoodMenu />,
  },
  // {
  //   title: "Result",
  //   path: "/Card",
  //   icon: "bx-calendar-check",
  // },
  // {
  //   title: "Competetion",
  //   path: "/Card",
  //   icon: "bx-trophy",
  // },
  // {
  //   title: "Messages",
  //   path: "/Card",
  //   icon: "bx-message-rounded",
  // },
  // {
  //   title: "Contact Us",
  //   path: "/Card",
  //   icon: "bx-user",
  // },

  // {
  //   title: "Schedule", // Main menu item with submenus
  //   icon: "bx-spreadsheet",
  //   subNavOpen: false,
  //   subNav: [
  //     {
  //       title: "Prepration",
  //       path: "/submenu1",
  //       icon: "bx-home-alt",
  //     },
  //     {
  //       title: "School",
  //       path: "/submenu2",
  //       icon: "bx-home-alt",
  //     },
  //   ],
  // },
  // {
  //   title: "Schedule", // Main menu item with submenus
  //   icon: "bx-spreadsheet",
  //   subNavOpen: false,
  //   subNav: [
  //     {
  //       title: "Prepration",
  //       path: "/submenu1",
  //       icon: "bx-home-alt",
  //     },
  //     {
  //       title: "School",
  //       path: "/submenu2",
  //       icon: "bx-home-alt",
  //     },
  //   ],
  // },
  // Other menu items...
];

export default SidebarItems;
