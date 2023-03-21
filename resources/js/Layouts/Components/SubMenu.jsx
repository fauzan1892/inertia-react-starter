import { useState } from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function SubMenu({ submenu, sidebar }) {
    const { url, component } = usePage();
    return (
        <div>
            {submenu.map((val, index) => {
                const menuActive = val.route == sidebar
                    ? "bg-blue-300 bg-opacity-10 px-3 border border-blue-100 py-2 rounded-md text-blue-900"
                    : "px-3 py-2";

                const textActive = val.route == sidebar
                    ? "text-blue-500"
                    : "text-gray-700";
                const menuHtml = (
                    <Link
                        href={route(val.route)}
                        className={`flex w-full justify-between ${menuActive} cursor-pointer`}
                    >
                        <div
                            className={`flex items-center ml-2 mt-1 text-md ${textActive}`}
                        >
                            {val.icon}
                            <span className="text-sm ml-2">{val.name}</span>
                        </div>
                    </Link>
                );
                return <li key={index}>{menuHtml}</li>;
            })}
        </div>
    );
}

export default SubMenu;
