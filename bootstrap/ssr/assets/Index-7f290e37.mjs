import { a as jsx, j as jsxs } from "../ssr.mjs";
import { A as App } from "./AuthenticatedLayout-44adec90.mjs";
import { Link, usePage, Head } from "@inertiajs/react";
import "react";
import moment from "moment";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
import "react-device-detect";
import "@heroicons/react/20/solid";
function Pagination({ links }) {
  function getClassName(active) {
    if (active) {
      return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
    } else {
      return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
    }
  }
  return links.length > 3 && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap mt-8", children: links.map(
    (link, key) => link.url === null ? /* @__PURE__ */ jsx("div", { className: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded", children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: link.label } }) }, key) : /* @__PURE__ */ jsx(
      Link,
      {
        className: getClassName(link.active),
        href: link.url,
        children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: link.label } })
      },
      key
    )
  ) }) });
}
const Index = (props) => {
  const { pages } = usePage().props;
  return /* @__PURE__ */ jsxs(
    App,
    {
      auth: props.auth,
      errors: props.errors,
      sidebar: props.sidebar,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Pages" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Pages" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-8xl mx-auto h-100 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-6", children: /* @__PURE__ */ jsx(
            Link,
            {
              className: "px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",
              href: route("pages.create"),
              children: "Create Pages"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between py-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative max-w-xs", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "hs-table-search",
                  className: "sr-only",
                  children: "Search"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "hs-table-search",
                  id: "hs-table-search",
                  className: "block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400",
                  placeholder: "Search..."
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "h-3.5 w-3.5 text-gray-400",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  viewBox: "0 0 16 16",
                  children: /* @__PURE__ */ jsx("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("button", { className: "relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1", children: /* @__PURE__ */ jsxs("span", { className: "relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2", children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-3 h-3",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: "Filters" })
            ] }) }) }) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { children: "Title" }),
              /* @__PURE__ */ jsx("th", { children: "Status" }),
              /* @__PURE__ */ jsx("th", { children: "Created At" }),
              /* @__PURE__ */ jsx("th", { children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { children: [
              pages.data.map((item, index) => /* @__PURE__ */ jsxs("tr", { className: "", children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route(
                      "pages.edit",
                      item.id
                    ),
                    children: item.title
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    tabIndex: "1",
                    href: route(
                      "pages.edit",
                      item.id
                    ),
                    children: item.publish
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    tabIndex: "1",
                    href: route(
                      "pages.edit",
                      item.id
                    ),
                    children: moment(
                      item.created_at
                    ).format("DD MMM YYYY hh:mm:ss")
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    tabIndex: "1",
                    className: "btn btn-primary btn-sm",
                    href: route(
                      "pages.edit",
                      item.id
                    ),
                    children: "Edit"
                  }
                ) })
              ] }, item.id)),
              props.pages.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "4", children: "No contacts found." }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Pagination, { class: "mt-6", links: pages.links })
        ] }) }) })
      ]
    }
  );
};
export {
  Index as default
};
