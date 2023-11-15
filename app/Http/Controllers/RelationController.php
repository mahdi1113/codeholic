<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RelationController extends Controller
{
    public function showRelationForm(User $user)
    {
        $users = User::where('id' , '!=' , $user->id)->get();
        return view("makeRelation",compact("users","user"));
    }

    public function makeRelation(User $user, Request $request)
    {
        $childUser = User::where("id", $request->child_id)->first();
        $childUser->update([
            "parent_id"=> $user->id,
        ]);
    }
}
