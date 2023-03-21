import { useState } from "react";
import { Link } from "@inertiajs/react";
import { isMobile } from "react-device-detect";
import { usePage } from "@inertiajs/react";
import Submenu from "@/Layouts/Components/SubMenu";
import {
    HomeModernIcon,
    BellAlertIcon,
    UserIcon,
    Bars3Icon,
    ChevronDownIcon,
    ChevronUpIcon,
    DocumentTextIcon,
} from "@heroicons/react/20/solid";

function Menu({ menu, title, sidebar }) {
    const { url, component } = usePage();
    return (
        <div className="py-5 px-2">
            <h6 className="mb-4 text-[10px] sm:text-sm text-center sm:text-left sm:px-5 ">
                <span className="sm:hidden">{title.xs}</span>
                <span className="hidden sm:block">{title.sm}</span>
            </h6>
            <ul>
                {menu.map((val, index) => {
                    const [showSub, setShowSub] = useState(false);
                    const cssActive =
                        "bg-blue-300 bg-opacity-10 px-2 border border-blue-100 py-2 rounded-md text-blue-900";
                    const texActive = "text-blue-500";
                    const menuActive = url.startsWith("/" + val.route)
                        ? cssActive
                        : "px-3 py-2";
                    const textActive = url.startsWith("/" + val.route)
                        ? texActive
                        : "text-gray-700";
                    const menuHtml =
                        val.route == "#" ? (
                            <div>
                                <div
                                    onClick={() => setShowSub(!showSub)}
                                    className={`flex w-full justify-between ${
                                        val.sidebar.includes(sidebar)
                                            ? cssActive
                                            : "px-3 py-2"
                                    } ${
                                        showSub ? cssActive : ""
                                    } cursor-pointer`}
                                >
                                    <div
                                        className={`flex items-center ml-2 mt-1 text-md ${
                                            showSub ? texActive : ""
                                        }`}
                                    >
                                        {val.icon}
                                        <span className="text-sm ml-2">
                                            {val.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center text-xs">
                                        {showSub ? (
                                            <ChevronUpIcon
                                                width={20}
                                                className={`text-grey-700`}
                                            />
                                        ) : sidebar == val.sidebar ? (
                                            <ChevronUpIcon
                                                width={20}
                                                className={`text-grey-700`}
                                            />
                                        ) : (
                                            <ChevronDownIcon
                                                width={20}
                                                className={`text-grey-700`}
                                            />
                                        )}
                                    </div>
                                </div>
                                <ul
                                    className={`${
                                        showSub
                                            ? "display"
                                            : val.sidebar.includes(sidebar)
                                            ? "display"
                                            : "hidden"
                                    }`}
                                >
                                    <Submenu submenu={val.submenu} />
                                </ul>
                            </div>
                        ) : (
                            <Link
                                href={val.route == "#" ? "#!" : val.route}
                                className={`flex w-full justify-between ${menuActive} cursor-pointer`}
                            >
                                <div
                                    className={`flex items-center ml-2 mt-1 text-md ${textActive}`}
                                >
                                    {val.icon}
                                    <span className="text-sm ml-2">
                                        {val.name}
                                    </span>
                                </div>
                            </Link>
                        );
                    return <li key={index}>{menuHtml}</li>;
                })}
            </ul>
        </div>
    );
}

export default Menu;
