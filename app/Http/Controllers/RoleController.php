<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $roles = Role::with('child')->get();
        // return response()->json($roles);

        $parentId = 1; // ای دی رکورد مورد نظر

        // $roles = Role::with('subChild')->find($parentId);

        $roles = Role::where('id', $parentId)->with('subChild')->get();

        // $allChildren = $roles->allChildren;

        return response()->json($roles);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
