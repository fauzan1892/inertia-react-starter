import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CheckIcon } from "@heroicons/react/20/solid";
const Index = (props) => {
    const { pages } = usePage().props;
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const createPages = (e) => {
        e.preventDefault();
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };
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
            <div className="py-2">
                <div className="text-sm breadcrumbs sm:px-8  lg:px-8">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li> Create Pages</li>
                    </ul>
                </div>
                <div className="max-w-8xl mx-auto h-100 sm:px-6 lg:px-8">
                    <form onSubmit={createPages} enctype="multipart/form-data">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg w-full">
                            <div className="form-control w-full mb-3">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="input w-full input-bordered border-solid border-2 border-gray-300"
                                    label="Title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.title}
                                </span>
                            </div>
                            <div className="flex">
                                <div className="form-control flex w-full mb-3">
                                    <label className="pb-2">Gambar</label>
                                    <input
                                        type="file"
                                        placeholder="Gambar"
                                        className="w-full"
                                        name="gambar"
                                        value={data.gambar}
                                        onChange={(e) =>
                                            setData("gambar", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.gambar}
                                    </span>
                                </div>
                                <div className="form-control flex w-full mb-3">
                                    <label className="label">
                                        <span className="label-text">Publish</span>
                                    </label>
                                    <select className="select w-full border-solid border-2 border-gray-300"
                                        name="publish"
                                        value={data.publish}
                                        onChange={(e) =>
                                            setData("publish", e.target.value)
                                        }>
                                        <option>Publish</option>
                                        <option>Draft</option>
                                    </select>
                                    <span className="text-red-600">
                                        {errors.publish}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control w-full border-solid border-2 border-gray-300">
                                <Editor
                                    editorStyle={{
                                        height: "200px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                    }}
                                    editorState={editorState}
                                    onEditorStateChange={setEditorState}
                                    errors={errors.content}
                                    value={data.content}
                                    onChange={(e) =>
                                        setData("content", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.content}
                                </span>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success text-white btn-md mt-3"
                            >
                                <CheckIcon width={30} className="pr-1" /> Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
