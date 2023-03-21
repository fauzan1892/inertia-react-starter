import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as App } from "./AuthenticatedLayout-44adec90.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@headlessui/react";
import "react-device-detect";
import "@heroicons/react/20/solid";
function Dashboard(props) {
  return /* @__PURE__ */ jsxs(
    App,
    {
      auth: props.auth,
      errors: props.errors,
      sidebar: "dashboard",
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-8xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900" }) }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
