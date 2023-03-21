import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import Pagination from "@/Layouts/Pagination";
import moment from "moment";

const Index = (props) => {
    const { pages } = usePage().props;
    // console.log(pages.data);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            sidebar={props.sidebar}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pages
                </h2>
            }
        >
            <Head title="Pages" />
            <div className="py-12">
                <div className="max-w-8xl mx-auto h-100 sm:px-6 lg:px-8">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                href={route("pages.create")}
                            >
                                Create Pages
                            </Link>
                        </div>
                        <div className="overflow-x-auto">
                            <div className="flex justify-between py-3">
                                <div className="relative max-w-xs">
                                    <label
                                        htmlFor="hs-table-search"
                                        className="sr-only"
                                    >
                                        Search
                                    </label>
                                    <input
                                        type="text"
                                        name="hs-table-search"
                                        id="hs-table-search"
                                        className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                        placeholder="Search..."
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                        <svg
                                            className="h-3.5 w-3.5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="relative">
                                        <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                                            <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                                <div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-3 h-3"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="hidden sm:block">
                                                    Filters
                                                </div>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pages.data.map((item, index) => (
                                        <tr key={item.id} className="">
                                            <td>
                                                <Link
                                                    href={route(
                                                        "pages.edit",
                                                        item.id
                                                    )}
                                                >
                                                    {item.title}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link
                                                    tabIndex="1"
                                                    href={route(
                                                        "pages.edit",
                                                        item.id
                                                    )}
                                                >
                                                    {item.publish}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link
                                                    tabIndex="1"
                                                    href={route(
                                                        "pages.edit",
                                                        item.id
                                                    )}
                                                >
                                                    {moment(
                                                        item.created_at
                                                    ).format("DD MMM YYYY hh:mm:ss")}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link
                                                    tabIndex="1"
                                                    className="btn btn-primary btn-sm"
                                                    href={route(
                                                        "pages.edit",
                                                        item.id
                                                    )}
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    {props.pages.length === 0 && (
                                        <tr>
                                            <td colSpan="4">
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination class="mt-6" links={pages.links} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
