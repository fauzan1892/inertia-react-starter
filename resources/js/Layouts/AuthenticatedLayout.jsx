import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { isMobile } from "react-device-detect";
import { usePage } from "@inertiajs/react";
import Menus from "@/Layouts/Components/Menu";
import {
    HomeModernIcon,
    BellAlertIcon,
    UserIcon,
    Bars3Icon,
    ChevronDownIcon,
    ChevronUpIcon,
    DocumentTextIcon,
} from "@heroicons/react/20/solid";

function App({ auth, header, sidebar, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [showSidebar, setShowSidebar] = isMobile
        ? useState(false)
        : useState(true);
    const menu1 = [
        {
            name: "Dashboard",
            route: "dashboard",
            sidebar: "dashboard",
            icon: <HomeModernIcon width={25} className="text-gray-600" />,
            submenu: null,
        },
        {
            name: "Profil",
            route: "#",
            sidebar: ["profile"],
            icon: <UserIcon width={25} className="flex text-gray-600" />,
            submenu: [
                {
                    name: "Profil 1",
                    route: "profile",
                    icon: <UserIcon width={25} className="text-gray-600" />,
                },
            ],
        },
        {
            name: "Pages",
            route: "pages",
            icon: <DocumentTextIcon width={25} className="text-gray-600" />,
            submenu: null,
        },
    ];

    return (
        <div className="min-h-screen flex bg-gray-100">
            <div
                className={`${
                    showSidebar
                        ? "w-64 flex-0 sm:w-64 bg-white h-100 overflow-x-auto"
                        : "hidden"
                }`}
            >
                <div className="border-b border-r p-5 text-center sm:text-left">
                    <a href={route("dashboard")}>
                        <span className="hidden sm:block text-center">
                            Codekop CMS
                        </span>
                        <span className="sm:hidden">CMS</span>
                    </a>
                </div>
                <div className=" border-b text-sm">
                    <Menus
                        menu={menu1}
                        sidebar={sidebar}
                        title={{ sm: "MAIN NAVIGATION", xs: "MAIN NAVIGATION" }}
                    />
                </div>
            </div>
            <div
                className={`${
                    isMobile
                        ? showSidebar
                            ? "hidden"
                            : "w-full h-screen sm:w-20 xl:w-60  flex-1"
                        : "flex-1"
                }`}
            >
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <a
                                        href="#!"
                                        onClick={() =>
                                            setShowSidebar(!showSidebar)
                                        }
                                    >
                                        <Bars3Icon
                                            width={18}
                                            className="text-gray-500"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {auth.user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <UserIcon
                                            width={25}
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        {/* <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div> */}
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {auth.user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {auth.user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>
                <main>{children}</main>
            </div>
        </div>
    );
}

export default App;
