<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePagesRequest;
use App\Models\Pages;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $pages = Pages::latest()->paginate(5);
        return Inertia::render('Pages/Index', ['pages' => $pages, 'sidebar' => 'pages']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Pages/Create', ['sidebar' => 'pages']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pages $pages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pages $pages)
    {
        return Inertia::render('Pages/Edit', [
            'pages' => [
                'id'       => $pages->id,
                'title'    => $pages->title,
                'content'  => $pages->content
            ]
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pages $pages)
    {
        //
        $pages->update($request->validated());

        return Redirect::route('pages.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pages $pages)
    {
        //
        $pages->delete();

        return Redirect::route('pages.index');
    }
}
