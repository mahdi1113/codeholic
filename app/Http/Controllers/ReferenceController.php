<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateReferenceController;
use App\Http\Requests\CreateReferenceRequest;
use App\Models\Reference;
use App\Models\User;
use Illuminate\Http\Request;

class ReferenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function references(User $user)
    {
        $reference = $user->load('references', 'references.reciveUser', 'references.mail');
        $mailIds = $user->references()->pluck('mail_id');
        $ReferralProcess = Reference::where('mail_id', $mailIds)
            ->with('user', 'reciveUser', 'mail')
            ->get();
        return response()->json(['reference' => $reference, 'ReferralProcess' => $ReferralProcess]);
    }

    public function referralsReceived(User $user)
    {
        $referralsReceived = $user->load('referralsReceived', 'referralsReceived.user', 'referralsReceived.mail');
        $mailIds = $user->referralsReceived()->pluck('mail_id');
        $ReferralProcess = Reference::where('mail_id', $mailIds)
            ->with('user', 'reciveUser', 'mail')
            ->get();
        return response()->json(['referralsReceived' => $referralsReceived, 'ReferralProcess' => $ReferralProcess]);
    }

    public function receivedReferralsNotView(User $user)
    {
        return $user;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateReferenceRequest $request, User $user)
    {
        // return $request;
        $reference = Reference::where('mail_id', $request->mail_id)
            ->latest()
            ->first();
        if ($reference == null) {
            $data = $request->validated();
            $user->references()->create($data);
            return response()->json(['msg' => 'نامه با موفقیت ارجاع داده شد.'], 200);
        } else{
            if($user->id == $reference->recive_id){
                $data = $request->validated();
            $user->references()->create($data);
            return response()->json(['msg' => 'نامه با موفقیت ارجاع داده شد.'], 200);
            }else{
                return 'خطا';
            }
        }
    }

    public function updateStatus(Reference $reference)
    {
        $reference->update([
            'status' => 1,
        ]);
        return response()->json(['msg' => 'وضعیت نامه ارجاع شده آپدیت شد']);
    }

    public function isFinished(User $user,Request $request)
    {

        $reference = Reference::where('mail_id', $request->mail_id)
            ->latest()
            ->first();
        if($user->id == $reference->recive_id)
        {
            $reference->update([
                'isFinished' => 1
            ]);
            return response()->json(['msg' => 'ارجاع با موفقیت به پایان رسید'],200);
        }else{
            return response()->json(['msg' => 'خطا'],401);
        }
    }



}
