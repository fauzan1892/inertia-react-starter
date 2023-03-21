import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Index = (props) => {
    const { pages } = usePage().props;
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
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
                <div className="text-sm breadcrumbs sm:px-6 lg:px-8">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li> Create Pages</li>
                    </ul>
                </div>
                <div className="max-w-8xl mx-auto h-100 sm:px-6 lg:px-8">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg w-full">
                        <div className="form-control w-full mb-3">
                            <input type="text" placeholder="Title" className="input w-full input-bordered border-solid border-2 border-gray-300 " />
                        </div>
                        <div className="form-control w-full border-solid border-2 border-gray-300">
                            <Editor
                                editorStyle={{ height: '200px', paddingLeft:'15px', paddingRight:'15px' }}
                                editorState={editorState}
                                onEditorStateChange={setEditorState}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
