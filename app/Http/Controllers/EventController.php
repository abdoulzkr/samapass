<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return redirect()->route('home');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {

        $request->validate(['name',
            'city' => 'required|max:255',
            'category' => 'required|max:255',
            'description' => 'required',
            'start_at' => 'required',
            'start_time' => 'required',
            'end_at' => 'required',
            'end_time' => 'required'
        ]);
        Event::create($request->all());
        return redirect()->back()->with('message', 'IT WORKS!');
        //dd($request->all());
    }
}
