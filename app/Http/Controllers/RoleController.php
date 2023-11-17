<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Models\Role;
use App\Models\User;
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
/////////////////////////////////////////////////////////////////////////////////////////////

        // $user = User::with('role')->find(1);
        // return $user;

        // $role = Role::with('users','subChild')->find(1);
        // return $role;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRoleRequest $request)
    {
        $data = $request->validated();
        if($data['parent_id'] === 0)
        {
            return response()->json(['msg' => 'نقش نمی تواند 0 باشد'],422);
        }

        $role = Role::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'parent_id' => $data['parent_id']
        ]);

        return response()->json(['msg'=> 'نقش با موفقیت ایجاد شد.','role' => $role],200);

    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        return response()->json($role);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, Role $role)
    {
        $data = $request->validated();
        if($data['parent_id'] === 0)
        {
            return response()->json(['msg' => 'نقش نمی تواند 0 باشد'],422);
        }

        $role->update([
            'title' => $data['title'],
            'description' => $data['description'],
            'parent_id' => $data['parent_id']
        ]);

        return response()->json(['msg'=> 'نقش با موفقیت آپدیت شد.','role' => $role],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $role->delete();
        return response()->json(['msg'=> 'نقش با موفقیت حذف شد.'],200);
    }
}
