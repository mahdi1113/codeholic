<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\CreateMailController;

class MailController extends Controller
{
    public function sentLetters(Request $request)
    {
        $mail = Mail::where('user_id',$request->user_id)->paginate(5);
        return response()->json(['mail' => $mail]);
        //////////////////////////////////////////////////////////////////////////////////////
        // $parentRoleID = 1; // مقدار مورد نظر برای role_id

        // $parentRole = Role::find($parentRoleID);

        // $parent_id = $parentRole->parent_id;

        // if ($parentRole) {
        //     $allChildrenIDs = $parentRole->allChildrenIDs();
        //     $allCollege = Role::where('parent_id',$parent_id)->where('id', '!=' , $parentRoleID)->pluck('id')
        //     ->toArray();
        //     $parent = Role::where('id',$parent_id)->pluck('id')
        //     ->toArray();
        //     $data = array_merge($allChildrenIDs,$allCollege,$parent);
        //     sort($data);
        //     // $allChildrenIDs حالا شامل تمام idهای فرزندان و فرزندان فرزندان است بدون id والد
        //     // return $allChildrenIDs;
        // }
        // $usersWithDesiredRoles = User::whereIn('role_id', $data)->get();

        // return $usersWithDesiredRoles;
/////////////////////////////////////////////////////////////////////////////////////////////////////
    }

    public function AllreceivedMails($id)
    {
        $mail = Mail::where('receiv_id', $id)->paginate(5);
        return response()->json(['mail' => $mail]);
    }

    public function receivedMailsNotViewed($id)
    {
        $mail = Mail::where('receiv_id', $id)->where('status',0)->paginate(5);
        return response()->json(['mail' => $mail]);
    }
    public function store(CreateMailController $request, User $user)
    {

        $data = $request->validated();

        // آپلود تصویر
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/images');
            $data['image'] = basename($imagePath);
        }

        // آپلود فایل
        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('public/files');
            $data['file'] = basename($filePath);
        }

        $user->mails()->create($data);
        return response()->json(['msg' => 'نامه با موفقیت ارسال شد'], 200);
    }
    public function show(Mail $mail)
    {
        return response()->json(['mail' => $mail]);
    }
    public function updateStatus(Mail $mail)
    {
        $mail->update([
            'status' => 1,
        ]);
        return response()->json(['msg' => 'وضعیت نامه آپدیت شد']);
    }

    public function allowedPersons($id)
    {
        $parentRoleID = $id; // مقدار مورد نظر برای role_id

        $parentRole = Role::find($parentRoleID);

        $parent_id = $parentRole->parent_id;

        if ($parentRole) {
            $allChildrenIDs = $parentRole->allChildrenIDs();
            $allCollege = Role::where('parent_id',$parent_id)->where('id', '!=' , $parentRoleID)->pluck('id')
            ->toArray();
            $parent = Role::where('id',$parent_id)->pluck('id')
            ->toArray();
            $data = array_merge($allChildrenIDs,$allCollege,$parent);
            sort($data);
        }
        // $usersWithDesiredRoles = User::with('role')->whereIn('role_id', $data)->get();

        $usersWithDesiredRoles = User::with(['role' => function ($query) {
            $query->select('id', 'title');
        }])->select('id', 'name','role_id')->whereIn('role_id', $data)->get();

        return $usersWithDesiredRoles;
    }
}
