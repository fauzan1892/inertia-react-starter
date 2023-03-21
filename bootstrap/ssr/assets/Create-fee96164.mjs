import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as App } from "./AuthenticatedLayout-44adec90.mjs";
import { usePage, Head } from "@inertiajs/react";
import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
import "react-device-detect";
import "@heroicons/react/20/solid";
const reactDraftWysiwyg = "";
const Index = (props) => {
  usePage().props;
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  );
  return /* @__PURE__ */ jsxs(
    App,
    {
      auth: props.auth,
      errors: props.errors,
      sidebar: props.sidebar,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Create Pages" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Create Pages" }),
        /* @__PURE__ */ jsxs("div", { className: "py-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm breadcrumbs sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: " Create Pages" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "max-w-8xl mx-auto h-100 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg w-full", children: [
            /* @__PURE__ */ jsx("div", { className: "form-control w-full mb-3", children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Title", className: "input w-full input-bordered border-solid border-2 border-gray-300 " }) }),
            /* @__PURE__ */ jsx("div", { className: "form-control w-full border-solid border-2 border-gray-300", children: /* @__PURE__ */ jsx(
              Editor,
              {
                editorStyle: { height: "200px", paddingLeft: "15px", paddingRight: "15px" },
                editorState,
                onEditorStateChange: setEditorState
              }
            ) })
          ] }) })
        ] })
      ]
    }
  );
};
export {
  Index as default
};
