<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\CreateMailController;

class MailController extends Controller
{
    public function sendMail(User $user)
    {
        $mails = Mail::where('user_id',$user->id)->with([
            'user' => function ($query) {
                $query->select('id', 'first_name','role_id');
            },
            'user.role' => function ($query) {
                $query->select('id', 'title');
            },
            'reciveUser' => function ($query) {
                $query->select('id', 'first_name','role_id');
            },
            'reciveUser.role' => function ($query) {
                $query->select('id', 'title');
            },
        ])
        ->orderBy('created_at', 'desc')
        ->get();
        return response()->json(['mail' => $mails]);
    }

    public function AllreciveMails($id)
    {
        $mail = Mail::where('recive_id', $id)->with([
            'user' => function ($query) {
                $query->select('id', 'first_name','role_id');
            },
            'user.role' => function ($query) {
                $query->select('id', 'title');
            },
            'reciveUser' => function ($query) {
                $query->select('id', 'first_name','role_id');
            },
            'reciveUser.role' => function ($query) {
                $query->select('id', 'title');
            },
        ])
        ->orderBy('created_at', 'desc')
        ->get();
        return response()->json(['mail' => $mail]);
    }

    public function reciveMailsNotViewed($id)
    {
        $mail = Mail::where('recive_id', $id)->where('status',0)->with([
            'user' => function ($query) {
                $query->select('id', 'first_name','role_id');
            },
            'user.role' => function ($query) {
                $query->select('id', 'title');
            },
            'reciveUser' => function ($query) {
                $query->select('id', 'first_name','role_id');
            },
            'reciveUser.role' => function ($query) {
                $query->select('id', 'title');
            },
        ])
        ->orderBy('created_at', 'desc')
        ->get();
        return response()->json(['mail' => $mail]);
    }
    public function store(CreateMailController $request, User $user)
    {
        $data = $request->validated();
        // آپلود تصویر
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . hash('sha256', $image->getClientOriginalName()) . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);
            $data['image'] = 'images/' . $imageName;
        }
        // آپلود فایل
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $fileName = time() . '_' . hash('sha256', $file->getClientOriginalName()) . '.' . $file->extension();
            $file->move(public_path('files'), $fileName);
            $data['file'] = 'files/' . $fileName;
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

    public function allowedPersons(User $user)
    {
        $parentRoleID = $user->role_id; // مقدار مورد نظر برای role_id

        $parentRole = Role::find($parentRoleID);

        $parent_id = $parentRole->parent_id;


        if ($parentRole) {
            $allChildrenIDs = $parentRole->allChildrenIDs();
            $allCollege = Role::where('parent_id',$parent_id)->pluck('id')
            ->toArray();
            $parent = Role::where('id',$parent_id)->pluck('id')
            ->toArray();
            $data = array_merge($allChildrenIDs,$allCollege,$parent);
            sort($data);
        }

        // return $data;

        // $usersWithDesiredRoles = User::whereIn('role_id',$data)->pluck()->get();

        // return $usersWithDesiredRoles;


        // $usersWithDesiredRoles = User::with('role')->whereIn('role_id', $data)->get();
        // return $data;

        $usersWithDesiredRoles = User::with(['role' => function ($query) {
            $query->select('id', 'title');
        }])->select('id', 'first_name','last_name','role_id')->whereIn('role_id', $data)->get();
        return $usersWithDesiredRoles;

    }

}
