const SidebarItems = [
  {
    title: "Home Work",
    path: "/",
    icon: "bx-book-bookmark",
  },
  {
    title: "Notice",
    path: "/Card",
    icon: "bx-chalkboard",
  },
  {
    title: "Schedule", // Main menu item with submenus
    icon: "bx-spreadsheet",
    subNavOpen: false,
    subNav: [
      {
        title: "Prepration",
        path: "/submenu1",
        icon: "bx-home-alt",
      },
      {
        title: "School",
        path: "/submenu2",
        icon: "bx-home-alt",
      },
      {
        title: "School",
        path: "/submenu2",
        icon: "bx-home-alt",
      },
    ],
  },
  {
    title: "Exam",
    path: "/Card",
    icon: "bx-food-menu",
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
