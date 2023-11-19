<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateMailController;
use App\Models\Mail;
use App\Models\User;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function sentLetters(Request $request)
    {
        $mail = Mail::where('user_id',$request->user_id)->get();
        return response()->json(['mail' => $mail]);
    }

    public function receivedMails(Request $request)
    {
        $mail = Mail::where('receiv_id',$request->receiv_id)->get();
        return response()->json(['mail' => $mail]);
    }
    public function store(CreateMailController $request,User $user)
    {
        $user->mails()->create([
            'title' => $request->title,
            'description' => $request->description,
            'receiv_id' => $request->receiv_id,
        ]);
        return response()->json(['msg' => 'نامه با موفقیت ارسال شد'],200);
    }
    public function show(Mail $mail)
    {
        return response()->json(['mail'=> $mail]);
    }
    public function updateStatus(Mail $mail)
    {
        $mail->update([
            'status' => 1,
        ]);
        return response()->json(['msg' => 'وضعیت نامه آپدیت شد']);
    }
}
