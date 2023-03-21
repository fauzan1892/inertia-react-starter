import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { createContext, useState, useContext, Fragment as Fragment$1 } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { isMobile } from "react-device-detect";
import { ChevronUpIcon, ChevronDownIcon, Bars3Icon, UserIcon, HomeModernIcon, DocumentTextIcon } from "@heroicons/react/20/solid";
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function SubMenu({ submenu, sidebar }) {
  usePage();
  return /* @__PURE__ */ jsx("div", { children: submenu.map((val, index) => {
    const menuActive = val.route == sidebar ? "bg-blue-300 bg-opacity-10 px-3 border border-blue-100 py-2 rounded-md text-blue-900" : "px-3 py-2";
    const textActive = val.route == sidebar ? "text-blue-500" : "text-gray-700";
    const menuHtml = /* @__PURE__ */ jsx(
      Link,
      {
        href: route(val.route),
        className: `flex w-full justify-between ${menuActive} cursor-pointer`,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex items-center ml-2 mt-1 text-md ${textActive}`,
            children: [
              val.icon,
              /* @__PURE__ */ jsx("span", { className: "text-sm ml-2", children: val.name })
            ]
          }
        )
      }
    );
    return /* @__PURE__ */ jsx("li", { children: menuHtml }, index);
  }) });
}
function Menu({ menu, title, sidebar }) {
  usePage();
  return /* @__PURE__ */ jsxs("div", { className: "py-5 px-2", children: [
    /* @__PURE__ */ jsxs("h6", { className: "mb-4 text-[10px] sm:text-sm text-center sm:text-left sm:px-5 ", children: [
      /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: title.xs }),
      /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: title.sm })
    ] }),
    /* @__PURE__ */ jsx("ul", { children: menu.map((val, index) => {
      const [showSub, setShowSub] = useState(false);
      const cssActive = "bg-blue-300 bg-opacity-10 px-2 border border-blue-100 py-2 rounded-md text-blue-900";
      const texActive = "text-blue-500";
      const menuActive = val.route == sidebar ? cssActive : "px-3 py-2";
      const textActive = val.route == sidebar ? texActive : "text-gray-700";
      const menuHtml = val.route == "#" ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => setShowSub(!showSub),
            className: `flex w-full justify-between ${val.sidebar.includes(sidebar) ? cssActive : "px-3 py-2"} ${showSub ? cssActive : ""} cursor-pointer`,
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `flex items-center ml-2 mt-1 text-md ${showSub ? texActive : ""}`,
                  children: [
                    val.icon,
                    /* @__PURE__ */ jsx("span", { className: "text-sm ml-2", children: val.name })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-xs", children: showSub ? /* @__PURE__ */ jsx(
                ChevronUpIcon,
                {
                  width: 20,
                  className: `text-grey-700`
                }
              ) : sidebar == val.sidebar ? /* @__PURE__ */ jsx(
                ChevronUpIcon,
                {
                  width: 20,
                  className: `text-grey-700`
                }
              ) : /* @__PURE__ */ jsx(
                ChevronDownIcon,
                {
                  width: 20,
                  className: `text-grey-700`
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "ul",
          {
            className: `${showSub ? "display" : val.sidebar.includes(sidebar) ? "display" : "hidden"}`,
            children: /* @__PURE__ */ jsx(SubMenu, { submenu: val.submenu, sidebar })
          }
        )
      ] }) : /* @__PURE__ */ jsx(
        Link,
        {
          href: route(val.route),
          className: `flex w-full justify-between ${menuActive} cursor-pointer`,
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex items-center ml-2 mt-1 text-md ${textActive}`,
              children: [
                val.icon,
                /* @__PURE__ */ jsx("span", { className: "text-sm ml-2", children: val.name })
              ]
            }
          )
        }
      );
      return /* @__PURE__ */ jsx("li", { children: menuHtml }, index);
    }) })
  ] });
}
function App({ auth, header, sidebar, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = isMobile ? useState(false) : useState(true);
  const menu1 = [
    {
      name: "Dashboard",
      route: "dashboard",
      sidebar: "dashboard",
      icon: /* @__PURE__ */ jsx(HomeModernIcon, { width: 25, className: "text-gray-600" }),
      submenu: null
    },
    {
      name: "Profil",
      route: "#",
      sidebar: ["profile.edit"],
      icon: /* @__PURE__ */ jsx(UserIcon, { width: 25, className: "flex text-gray-600" }),
      submenu: [
        {
          name: "Profil 1",
          route: "profile.edit",
          icon: /* @__PURE__ */ jsx(UserIcon, { width: 25, className: "text-gray-600" })
        }
      ]
    },
    {
      name: "Pages",
      route: "pages.index",
      icon: /* @__PURE__ */ jsx(DocumentTextIcon, { width: 25, className: "text-gray-600" }),
      submenu: null
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex bg-gray-100", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${showSidebar ? "w-64 flex-0 sm:w-64 bg-white h-100 overflow-x-auto" : "hidden"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "border-b border-r p-5 text-center sm:text-left", children: /* @__PURE__ */ jsxs("a", { href: route("dashboard"), children: [
            /* @__PURE__ */ jsx("span", { className: "hidden sm:block text-center", children: "Codekop CMS" }),
            /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "CMS" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: " border-b text-sm", children: /* @__PURE__ */ jsx(
            Menu,
            {
              menu: menu1,
              sidebar,
              title: { sm: "MAIN NAVIGATION", xs: "MAIN NAVIGATION" }
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${isMobile ? showSidebar ? "hidden" : "w-full h-screen sm:w-20 xl:w-60  flex-1" : "flex-1"}`,
        children: [
          /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", children: [
            /* @__PURE__ */ jsx("div", { className: "max-w-8xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
              /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#!",
                  onClick: () => setShowSidebar(!showSidebar),
                  children: /* @__PURE__ */ jsx(
                    Bars3Icon,
                    {
                      width: 18,
                      className: "text-gray-500"
                    }
                  )
                }
              ) }) }),
              /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-6", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
                /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
                    children: [
                      auth.user.name,
                      /* @__PURE__ */ jsx(
                        "svg",
                        {
                          className: "ml-2 -mr-0.5 h-4 w-4",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: /* @__PURE__ */ jsx(
                            "path",
                            {
                              fillRule: "evenodd",
                              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                              clipRule: "evenodd"
                            }
                          )
                        }
                      )
                    ]
                  }
                ) }) }),
                /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
                  /* @__PURE__ */ jsx(
                    Dropdown.Link,
                    {
                      href: route("profile.edit"),
                      children: "Profile"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Dropdown.Link,
                    {
                      href: route("logout"),
                      method: "post",
                      as: "button",
                      children: "Log Out"
                    }
                  )
                ] })
              ] }) }) }),
              /* @__PURE__ */ jsx("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setShowingNavigationDropdown(
                    (previousState) => !previousState
                  ),
                  className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      className: "h-6 w-6",
                      stroke: "currentColor",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ jsx(
                          UserIcon,
                          {
                            width: 25,
                            className: !showingNavigationDropdown ? "inline-flex" : "hidden"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            className: showingNavigationDropdown ? "inline-flex" : "hidden",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M6 18L18 6M6 6l12 12"
                          }
                        )
                      ]
                    }
                  )
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden",
                children: /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: auth.user.name }),
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: auth.user.email })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
                    /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        method: "post",
                        href: route("logout"),
                        as: "button",
                        children: "Log Out"
                      }
                    )
                  ] })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("main", { children })
        ]
      }
    )
  ] });
}
export {
  App as A
};
