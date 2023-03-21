import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as App } from "./AuthenticatedLayout-44adec90.mjs";
import DeleteUserForm from "./DeleteUserForm-a5559887.mjs";
import UpdatePasswordForm from "./UpdatePasswordForm-391e2c3a.mjs";
import UpdateProfileInformation from "./UpdateProfileInformationForm-0c9ea2a6.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@headlessui/react";
import "react-device-detect";
import "@heroicons/react/20/solid";
import "./TextInput-97c6f0da.mjs";
import "./InputLabel-65783540.mjs";
import "./PrimaryButton-c052be05.mjs";
function Edit({ auth, mustVerifyEmail, sidebar, status }) {
  return /* @__PURE__ */ jsxs(
    App,
    {
      auth,
      sidebar,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
