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
                    Create Pages
                </h2>
            }
        >
            <Head title="Create Pages" />
            <div className="py-12">
                <div className="max-w-8xl mx-auto h-100 sm:px-6 lg:px-8">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg w-full">
                        <div class="form-control w-full">
                            <label class="label">>Enter amount</label>
                            <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
